# Freya FE — Spec funcional

> Alcance: solo Frontend (`freya-java-FE`). Spec funcional, sin detalle técnico de implementación.
> Fuente modelo general: https://github.com/phalanxeyes/freya-java

## 1. Visión

Freya es una plataforma social donde usuarios comparten y escuchan covers de canciones. El FE permite descubrir canciones, ver sus covers, ver el detalle de un cover, registrarse/loguearse, subir covers (quedan pendientes) y administrar contenido (admin).

## 2. Alcance

### Incluye
- Navegación pública: Home, `SongView`, `CoverView`.
- Auth: Signup, Login, Logout, sesión persistida.
- Subir cover con flujo pendiente de aprobación.
- Admin: ABMC de canciones + moderar covers (aprobar/rechazar).
- Estados globales: `NotFound`, `Service Down` (health check).

### No incluye (fuera de scope actual)
- Comentarios con backend. Hoy `src/components/cover/CoverComments.tsx:10` es stub local.
- Playlists y guardar/favoritos.
- Artista como entidad. Es solo `string` dentro de Album en el back.
- Rol Moderador. Por ahora solo: no-logged, logged, admin.
- Listado complejo de comentarios por usuario con filtros de fecha (requerimiento AP directa, no especificado aquí).

## 3. Roles

| Rol | Descripción | Acceso FE |
|---|---|---|
| No-logged | Visitante sin sesión | Home, Song, Cover, Login, Signup. No puede subir covers ni entrar a `/admin`. |
| Logged | Usuario con token | Todo lo anterior + subir cover. Ve `Hola, {userName}` y `Cerrar sesión` en `src/layouts/Navbar.tsx:21`. |
| Admin | Usuario administrador | Todo lo anterior + `/admin` (canciones y covers). Hoy sin guard en `src/App.tsx:36`, pendiente. |

Sin manejo de roles en `src/context/AuthContext.tsx` — solo `user/token/isAuthenticated`.

## 4. Entidades funcionales

Generadas desde el back (SpringBoot → `src/api/api.d.ts`). No congelar aquí.

- `User`: `id, userName, createdAt`. Alta con `userName, email, password`.
- `Album`: `id, name, artist: string, coverUrl`. Alta con `name, artist`. No hay `albumService` en FE todavía.
- `Song`: `id, duration, name, lyrics, album: Album`.
- `Cover`: `id, duration, createdAt, playCount, song: Song`. Alta con `songId, uploaderUserId, duration, youtubeUrl`.
- `Health`: `health: string`.

## 5. Rutas

Definidas en `src/App.tsx:30-38`:

| Ruta | Pantalla | Acceso |
|---|---|---|
| `/` | `Home` | Público |
| `/song/:id` | `SongView` | Público |
| `/cover/:id` | `CoverView` | Público |
| `/login` | `Login` | No-logged (si ya logueado, redirige a `/` tras login) |
| `/signup` | `SignUp` | No-logged |
| `/admin` | `AdminView` | Admin (pendiente guard) |
| `*` | `NotFound` | Público |

Layout global: `MainLayout + Navbar` (`src/layouts/MainLayout.tsx`, `src/layouts/Navbar.tsx`).

## 6. Pantallas y criterios de aceptación

### Home (`src/pages/Home.tsx`)
- Hero “Escuchá, reversioná, compartí”.
- Carrusel Canciones: tarjetas con `name, duration, album.coverUrl` → click a `/song/:id`.
- Carrusel Últimos covers: ordenados por `createdAt` desc (`src/pages/Home.tsx:21`), tarjeta con `song.name, duration, fecha` → click a `/cover/:id`.
- Aceptación: sin sesión se ve todo; loading muestra `LoadingState`; si falla API, vacío/error visible.

### SongView (`/song/:id`, `src/pages/SongView.tsx`)
- `SongHeader`: nombre, duración `m:ss`, portada. Nota: hoy imagen hardcodeada (`src/components/song/SongHeader.tsx:19`), debe usar `album.coverUrl`.
- `SongLyrics`: letra completa.
- `SongCovers`: grilla de covers de esa canción. Hoy filtra en cliente (`src/pages/SongView.tsx:25`). Si no hay, no muestra sección. Si `song` null → “Canción no encontrada.”

### CoverView (`/cover/:id`, `src/pages/CoverView.tsx`)
- Link “Cover de {song.name}” → `/song/:id`.
- `CoverPlayer`: reproduce YouTube por `videoId`. Hoy se pasa `null` (`src/pages/CoverView.tsx:59`) → muestra “Sin video disponible”. Pendiente: derivar `videoId` desde `youtubeUrl`.
- `CoverUploaderCard`: “Publicado el {fecha es-AR}” + “Reproducciones: {playCount}”.
- Comentarios: solo stub local, fuera de spec.
- Si `cover` null → “Cover no encontrado.”

### Login / Signup
- Login (`src/pages/Login.tsx`): `email + password` → `POST auth/login` → guarda `token+user`, navega a `/`. Error visible en pantalla.
- Signup (`src/pages/SignUp.tsx`): `name + email + password (min 6)` → `POST auth/register` → igual que login. Link cruzado login↔signup.
- Navbar cambia según `isAuthenticated`.

### Admin (`/admin`, `src/pages/AdminView.tsx`)
Hoy placeholders (`ModerateSongs.tsx`, `ModerateCovers.tsx`). Comportamiento esperado:
- Tabs: “Moderar canciones” | “Moderar covers”.
- Moderar canciones = ABMC Song (`name, lyrics, duration` + álbum asociado). Crear, editar, eliminar. Confirmación al eliminar.
- Moderar covers = cola de pendientes: aprobar (publica en Home/Song) o rechazar (desaparece de listados). No edita contenido del cover.
- Album: como `artist` es string, el alta de canción debe permitir elegir/crear álbum con `name + artist`. `CreateAlbumDTO` ya existe en back.

### Transversales
- `Service Down`: si `GET health` falla (`src/App.tsx:16`), muestra “Service Down” en lugar de la app.
- `NotFound`: ruta desconocida.
- Errores API visibles en UI (formularios y “no encontrado”), no solo consola.

## 7. Casos de uso incluidos

### CU1 — Subir cover (flujo pendiente)
- Actor: Logged.
- Pre: sesión activa, existe `songId` destino.
- Flujo: desde canción (pendiente botón) → elige canción, pega `youtubeUrl`, FE completa `duration + uploaderUserId` (de sesión) → `POST /covers` → queda pendiente, no lista en Home/Song hasta aprobación. Confirma con mensaje.
- Aceptación: no-logged no puede; `youtubeUrl` inválida se rechaza en form; duplicado permitido (no se valida).

### CU2 — Aprobar/rechazar cover
- Actor: Admin en `/admin → covers`.
- Flujo: ve pendientes → Aprueba (visible en Home + Song) / Rechaza (oculto). Acción reversible solo vía eliminar.
- Aceptación: cambio reflejado al recargar listados.

### CU3 — ABMC Canción oficial
- Actor: Admin en `/admin → songs`.
- Flujo: crear (`name, lyrics, duration, album`), editar, eliminar con confirmación.
- Aceptación: Home y SongView reflejan cambios; eliminar canción oculta sus covers.

## 8. Contrato API (referencia, no congelado)

> REGLA DE GOBERNANZA:
> - SIEMPRE la fuente de verdad de tipos es `src/api/api.d.ts` (generado desde SpringBoot).
> - NUNCA JAMÁS usar objetos TS genéricos/`any`/interfaces inventadas en el FE para entidades del BE.
> - Si algo no está en `docs/api/api-docs.json`, NO se asume: se pregunta primero.

`src/api/api.ts:4` usa base `${API_URL}/api/` (`API_URL=http://localhost:8080` en `.env`). Patrón `createResourceClient`: `GET all, GET /:id, POST, PUT /:id, DELETE /:id`.

Endpoints usados hoy por el FE:
`POST auth/login, POST auth/register, GET songs, GET songs/:id, POST songs, PUT songs/:id, DELETE songs/:id, GET covers, GET covers/pending, GET covers/:id, POST covers/:id/approve, POST covers/:id/reject, GET health`.

Futuros (ABMC + moderación) siguen el mismo patrón sobre `songs`, `covers`, `albums`. **No se congelan aquí: la referencia viva es `docs/api/api-docs.json` (Swagger del BE, actualizado por versión de API).** `api.d.ts` se regenera desde SpringBoot.

Pendiente FE: enviar `Authorization` header (`TODO` en `src/api/api.ts:12`).

## 9. Estado actual vs pendiente

| Área | Estado |
|---|---|
| Home, Song, Cover, Auth, Navbar | Implementado funcional |
| `CoverPlayer videoId=null` | Stub → derivar de `youtubeUrl` |
| `CoverComments` local | Stub, fuera de scope |
| `ModerateSongs/Covers` | Placeholders → CU2/CU3 |
| Filtro covers por canción en cliente | Funciona, ideal mover a query backend |
| Imagen SongHeader hardcodeada | Usar `album.coverUrl` |
| Guard `/admin` + roles | Pendiente |
| `albumService` | Pendiente (DTO ya existe) |

## 10. Referencias
- Central: https://github.com/phalanxeyes/freya-java
- FE: https://github.com/phalanxeyes/freya-java-FE
- BE: https://github.com/phalanxeyes/freya-java-BE
- Tipos FE: `src/api/api.d.ts` (generado 2026-08-28)
