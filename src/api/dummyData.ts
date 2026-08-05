import { type Song, type Album, type Artist, type Cover, type User } from '@api/types';

// ==========================================
// 1. DUMMY DATA: ARTISTAS
// ==========================================
export const mockArtists: Artist[] = [
    { id: 'artist-1', name: 'Mohammad Crist' },
    { id: 'artist-2', name: 'Laury Aufderhar PhD' },
    { id: 'artist-3', name: 'Claudia Leffler' },
    { id: 'artist-4', name: 'Brionna Hilll' },
    { id: 'artist-5', name: 'Joel Bayer' },
    { id: 'artist-6', name: 'Tracey Schowalter-Haag' },
    { id: 'artist-7', name: 'Bryan Barton I' },
    { id: 'artist-8', name: 'John Denesik DDS' },
    { id: 'artist-9', name: 'Laron Bogisich' },
    { id: 'artist-10', name: 'Hope Shields' },
];

// ==========================================
// 2. DUMMY DATA: USUARIOS
// ==========================================
export const mockUsers: User[] = [
    { id: 'user-1', name: 'Miss Caroline Blanda Jr.', email: 'norval_buckridge62@yahoo.com', creationDate: new Date('2021-03-21') },
    { id: 'user-2', name: 'Nancy Torphy', email: 'keara.ledner2@gmail.com', creationDate: new Date('2021-02-09') },
    { id: 'user-3', name: 'Jimmie Franey', email: 'erika87@yahoo.com', creationDate: new Date('2021-08-21') },
    { id: 'user-4', name: 'Rodney Hamill', email: 'ruthie.johnson@gmail.com', creationDate: new Date('2024-03-21') },
    { id: 'user-5', name: 'Mindy Witting I', email: 'andrea.bechtelar90@hotmail.com', creationDate: new Date('2021-06-30') },
    { id: 'user-6', name: 'Dayne Ruecker', email: 'lisette.smith18@yahoo.com', creationDate: new Date('2023-01-07') },
    { id: 'user-7', name: 'Joe O\'Connell', email: 'bridgette_walsh@yahoo.com', creationDate: new Date('2023-10-17') },
    { id: 'user-8', name: 'Dennis Treutel V', email: 'skyla16@hotmail.com', creationDate: new Date('2023-01-27') },
    { id: 'user-9', name: 'Martha Crooks', email: 'nicolas_rogahn@yahoo.com', creationDate: new Date('2022-12-10') },
    { id: 'user-10', name: 'Elena Wiza', email: 'jessy_dietrich28@yahoo.com', creationDate: new Date('2023-03-16') },
    { id: 'user-11', name: 'Velda Hilpert', email: 'vincenzo_howe31@yahoo.com', creationDate: new Date('2022-11-26') },
    { id: 'user-12', name: 'Mr. Kenya Morar IV', email: 'maurine86@yahoo.com', creationDate: new Date('2022-09-30') },
];

// ==========================================
// 3. DUMMY DATA: ÁLBUMES
// ==========================================
export const mockAlbums: Album[] = [
    { id: 'album-1', name: 'That\'s What Friends Are For', date: new Date('2006-03-14'), artist: mockArtists.find(a => a.id === 'artist-6')! },
    { id: 'album-2', name: 'That\'ll Be the Day', date: new Date('2017-09-20'), artist: mockArtists.find(a => a.id === 'artist-8')! },
    { id: 'album-3', name: 'I Just Called to Say I Love You', date: new Date('1979-07-06'), artist: mockArtists.find(a => a.id === 'artist-4')! },
    { id: 'album-4', name: 'Afternoon Delight', date: new Date('1997-05-07'), artist: mockArtists.find(a => a.id === 'artist-6')! },
    { id: 'album-5', name: 'Good Times', date: new Date('2003-05-12'), artist: mockArtists.find(a => a.id === 'artist-6')! },
    { id: 'album-6', name: 'Again', date: new Date('2014-06-26'), artist: mockArtists.find(a => a.id === 'artist-1')! },
    { id: 'album-7', name: 'Born to Be Wild', date: new Date('2000-01-25'), artist: mockArtists.find(a => a.id === 'artist-4')! },
    { id: 'album-8', name: 'Don\'t Stop \'Til You Get Enough', date: new Date('2004-11-24'), artist: mockArtists.find(a => a.id === 'artist-8')! },
    { id: 'album-9', name: 'All You Need is Love', date: new Date('2000-07-03'), artist: mockArtists.find(a => a.id === 'artist-1')! },
    { id: 'album-10', name: 'Pop Muzik', date: new Date('2009-11-07'), artist: mockArtists.find(a => a.id === 'artist-6')! },
    { id: 'album-11', name: 'Love to Love You Baby', date: new Date('1990-07-03'), artist: mockArtists.find(a => a.id === 'artist-10')! },
    { id: 'album-12', name: 'Get Down Tonight', date: new Date('1996-01-27'), artist: mockArtists.find(a => a.id === 'artist-8')! },
    { id: 'album-13', name: 'A Thousand Miles', date: new Date('2021-03-17'), artist: mockArtists.find(a => a.id === 'artist-1')! },
    { id: 'album-14', name: 'Sentimental Journey', date: new Date('1994-08-18'), artist: mockArtists.find(a => a.id === 'artist-9')! },
    { id: 'album-15', name: 'Car Wash', date: new Date('1987-01-05'), artist: mockArtists.find(a => a.id === 'artist-2')! },
    { id: 'album-16', name: 'Sixteen Tons', date: new Date('2006-09-09'), artist: mockArtists.find(a => a.id === 'artist-6')! },
];

// ==========================================
// 4. DUMMY DATA: CANCIONES
// ==========================================
export let mockSongs: Song[] = [
    {
        id: 'song-1',
        name: 'Spirit in the Sky',
        duration: 300,
        coverUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400',
        artist: mockArtists.find(a => a.id === 'artist-3')!,

        lyrics: `Constans tempora accedo ancilla. Adhaero umbra succedo. Alter deprimo demergo atavus damno cubitum.
Rem adipisci corrupti quidem desolo umerus soluta. Aeneus sapiente acquiro occaecati. Necessitatibus cresco sed defungo in vilis creptio vito ventosus autus.
Amaritudo accusamus alius. Aequitas comis tutis acervus torrens cilicium angustus subiungo. Utpote tabesco thymbra cilicium atrocitas tandem timor vulariter.`,
    },
    {
        id: 'song-2',
        name: 'Swinging On a Star',
        duration: 242,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-5')!,

        lyrics: `Curto tantillus tego amet veniam despecto trepide comitatus vehemens. Abstergo ventosus aliqua comis virga virga. Ratione dedico clarus compono spectaculum tantum textilis.
Aliqua depulso adsuesco inflammatio decimus valens consequatur angelus aranea. Quae ambitus ago substantia aequus traho suffoco aggredior ago. Corrumpo correptius tonsor vinitor vos tardus coruscus agnosco tergiversatio labore.
Ventus amoveo depromo absum delicate adstringo. Angulus sodalitas tamen. Vivo corrupti circumvenio ustilo caecus vix abundans.`,
    },
    {
        id: 'song-3',
        name: 'Upside Down',
        duration: 293,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-10')!,
        album: mockAlbums.find(al => al.id === 'album-11')!,
        lyrics: `Iste volubilis eos. Subito deficio quis nulla venia adipisci cicuta virga. Defleo quam chirographum audeo delectus conservo nulla aetas voluptatem vos.
Facilis collum torqueo stillicidium ascisco vere traho vir. Placeat cura vicissitudo usitas adipisci acquiro cotidie tollo. Arcus paens creator volubilis turbo tum delicate cuppedia certus adstringo.
Torqueo xiphias vulnus itaque tenus vinco ulciscor carmen defendo. Virtus pecto calco spectaculum. Contabesco amplitudo speciosus eius ter eius ulterius.`,
    },
    {
        id: 'song-4',
        name: 'I\'ll be seeing you',
        duration: 186,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,
        album: mockAlbums.find(al => al.id === 'album-16')!,
        lyrics: `Succurro benevolentia approbo accedo consequatur officia cruciamentum. Ventito conqueror doloribus terra crux quasi. Vir arca vester deprimo causa degenero vomer depromo compono.
Capto aestivus aperiam antiquus argentum aptus saepe attonbitus. Vel demitto sopor at aurum. Asporto cibo atqui.
Animi degusto beatae. Desolo strues adflicto thermae quisquam. Uterque verumtamen aduro.`,
    },
    {
        id: 'song-5',
        name: 'Stop! in the Name of Love',
        duration: 200,
        coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
        artist: mockArtists.find(a => a.id === 'artist-3')!,

        lyrics: `Quae corporis delectatio tametsi adfectus casus. Vehemens doloremque exercitationem amita dedecor expedita carcer censura. Accusator comminor beneficium complectus animadverto validus.
Spoliatio testimonium deripio aiunt fuga ocer tamdiu. Antiquus ciminatio conventus sint molestias constans. Pecto capillus ambitus argumentum cariosus arto audentia cinis atavus vel.
Error cunae vomito. Cubicularis volubilis uredo. Causa assumenda sordeo vetus iusto mollitia cibus tenus audentia.`,
    },
    {
        id: 'song-6',
        name: 'Everybody Wants to Rule the World',
        duration: 181,
        coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        artist: mockArtists.find(a => a.id === 'artist-4')!,
        album: mockAlbums.find(al => al.id === 'album-7')!,
        lyrics: `Arma denique expedita admoneo conduco appono adversus. Commodi tollo caterva stabilis temporibus patior demens cupiditas conscendo vetus. Vociferor ante suus vigilo attonbitus aeger talio natus turba.
Theatrum baiulus ascit asper. Sono eos contego utpote crudelis totam decens cotidie delectatio. Tametsi desolo campana velum credo.
Ventus quia angelus vigor quisquam conculco apud. Quam expedita varietas tertius argentum color carpo tam ademptio. Tempus utor congregatio trado amor tyrannus antiquus.`,
    },
    {
        id: 'song-7',
        name: 'Can You Feel the Love Tonight',
        duration: 212,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        artist: mockArtists.find(a => a.id === 'artist-4')!,

        lyrics: `Suasoria illo caste coniuratio attonbitus ver nostrum cui. Vinitor arguo occaecati dicta perferendis accusamus. Vicissitudo maiores subito vesco suffragium argumentum nemo pectus curriculum.
Victus vespillo defendo amplitudo vorax tumultus ante verumtamen. Earum officiis cubitum adopto conculco thymbra abeo concido cubicularis. Verto coniuratio conor tabula defero caelestis defero.
Atqui deripio curatio vergo. Nobis ratione abutor somnus atrocitas. Arcesso cuppedia ait vulnus desipio pariatur aegre tandem bellum velociter.`,
    },
    {
        id: 'song-8',
        name: 'Afternoon Delight',
        duration: 277,
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        artist: mockArtists.find(a => a.id === 'artist-3')!,

        lyrics: `Defessus error decet cui laborum armarium attonbitus universe vindico. Cerno sequi cunabula acies armarium. Soluta acsi brevis callide spectaculum accusantium amicitia thesaurus.
Solitudo capio alveus carcer. Umbra triduana crux sordeo bardus clarus vel abundans. Beatus acquiro attonbitus.
Curis vapulus totidem congregatio caveo crastinus officia. Quia cunae ipsam debeo claustrum. Tenax apud ustilo depono varius thesaurus currus acerbitas censura id.`,
    },
    {
        id: 'song-9',
        name: 'Build Me Up Buttercup',
        duration: 376,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Astrum certe accusamus vergo angulus nemo certus. Soleo tricesimus beatae abstergo approbo velut utilis. Pauci sono atque vergo curatio crebro earum.
Aspernatur taceo agnitio. Cariosus creta civitas constans super clibanus maxime. Sonitus video synagoga bestia addo celebrer.
Admoneo derelinquo patria concido tepidus amissio aestivus. Deputo sto dapifer caritas totus thermae sub cernuus. Contra aliqua vero approbo virga decumbo audacia.`,
    },
    {
        id: 'song-10',
        name: 'Somethin\' Stupid',
        duration: 368,
        coverUrl: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,

        lyrics: `Carus deporto bos votum vinco adflicto sufficio vespillo attollo. Veritas ademptio subiungo coadunatio vesper volup vinco. Unus tutamen comis tricesimus adfectus patior.
Animi aestus subito conforto. Aedificium comburo fugit texo comis quidem valde praesentium. Acidus usus acer utilis.
Vigor theologus vulpes consequatur tenetur cuius denego. Uterque vorax tenuis cura curiositas tabula capitulus amor. Cito clibanus canis adicio accommodo.`,
    },
    {
        id: 'song-11',
        name: 'I Swear',
        duration: 334,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-10')!,
        album: mockAlbums.find(al => al.id === 'album-11')!,
        lyrics: `Alii cura utroque vinco deleo placeat aspernatur vulgaris campana. Sodalitas pecus dolores callide atqui bos audentia tergum consectetur adsuesco. Vacuus vestigium vulgus atavus crustulum tempora subito arguo totam caelestis.
Fuga optio nisi aliqua. Cena aperio valeo vis unus tolero sollers ipsa aiunt cunabula. Caveo supra derelinquo aggero bonus.
Aestus ullus deputo denique omnis tredecim conqueror spiritus. Cenaculum utrimque thema solus ullam usque suggero. Subiungo sponte quae tantum articulus utrum ut adamo tremo.`,
    },
    {
        id: 'song-12',
        name: 'Stand By Me',
        duration: 193,
        coverUrl: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400',
        artist: mockArtists.find(a => a.id === 'artist-2')!,
        album: mockAlbums.find(al => al.id === 'album-15')!,
        lyrics: `Absconditus cito provident vomica ratione caveo reiciendis. Termes amissio temptatio hic vix congregatio ratione. Ambulo viduo sto aegre coerceo suggero aegre non coniuratio quas.
Ut voluptate volo. Aperio tempora acidus acerbitas commodo deporto tepesco statua. Certus vulpes cursim defendo ascit theatrum.
Bos agnitio sponte solium certe virga arcus custodia. Curia reprehenderit cubicularis certus vorago cunabula varius calculus benevolentia addo. Corporis urbs demergo volo audax ustilo tergeo tepidus.`,
    },
    {
        id: 'song-13',
        name: 'Personality',
        duration: 185,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-9')!,

        lyrics: `Theca dens angulus antea stillicidium curtus averto. Advoco non censura thema colo deficio. Aequus crudelis denego.
Claro sub undique termes adflicto denique amicitia. Vos aranea deserunt quae. Laborum absque compello eaque alias consequatur ademptio aeternus.
Apparatus minima strenuus thesaurus aveho aspicio. Repellat suffoco addo. Admoneo hic sui ut summopere thesis conforto tot aggero varius.`,
    },
    {
        id: 'song-14',
        name: 'King of the Road',
        duration: 324,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,

        lyrics: `Adulescens caritas artificiose. Blanditiis voluptates conduco attonbitus testimonium soluta deripio itaque super. Vulnus voluptatem sol aveho.
Aequus adaugeo causa delectatio ustilo suscipio talis cursim. Correptius votum adhaero usque nihil. Surgo depono uterque velut curis charisma.
Verecundia bene qui quos tabella apostolus sumptus. Attero capio volup attollo ultra deprimo caritas usus decretum dolorum. Optio ascit crinis volubilis causa.`,
    },
    {
        id: 'song-15',
        name: 'Sweet Georgia Brown',
        duration: 185,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Canto aer assentator eius conduco tricesimus. Carpo provident suffragium aspernatur aspicio adfectus. Sonitus demo tutamen tibi numquam ustilo basium amoveo.
Adsuesco excepturi video adflicto animus. Victoria comedo dignissimos adhuc arcesso vos. Abeo virgo repudiandae ustilo deficio ducimus deporto sopor apud adamo.
Succurro baiulus speculum volubilis aliquid. Decor ustilo atqui stultus tum vinco statua derideo. Ustulo molestias adaugeo vicinus strenuus spes bibo.`,
    },
    {
        id: 'song-16',
        name: 'Rapture',
        duration: 178,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Voluptatum cum usus. Minima taceo utrimque culpo compello sopor titulus tempus theologus. Toties animi illum abscido communis cornu.
Sub creta deduco capio corroboro calcar. Pax sordeo quaerat. Crastinus urbanus earum demum acies confugo.
Cubitum nisi explicabo pecus teneo torqueo. Vis accusamus autus absens sit velociter careo vestigium. Victus consequuntur ambitus.`,
    },
    {
        id: 'song-17',
        name: 'Good Lovin\'',
        duration: 233,
        coverUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400',
        artist: mockArtists.find(a => a.id === 'artist-5')!,

        lyrics: `Pel sumptus certe cupio animus. Stabilis attonbitus esse sui. Minima cauda vivo.
Timidus inventore adimpleo recusandae virgo pauper. Vado calcar beneficium perferendis cunctatio tunc velut considero capillus. Cervus traho curriculum sopor allatus quia defero ocer aspicio.
Unus bis allatus acervus sapiente pectus incidunt campana. Paens derideo votum approbo sub culpo. Sunt stultus vulgaris aperiam amicitia surculus.`,
    },
    {
        id: 'song-18',
        name: 'Band On the Run',
        duration: 392,
        coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,
        album: mockAlbums.find(al => al.id === 'album-1')!,
        lyrics: `Conspergo aegrus earum aegre. Canis harum utrum soleo expedita communis concedo sortitus vulgus. Labore sustineo delego adulescens libero vita atque strues.
Facilis alo defaeco temperantia. Sono theatrum vestigium canonicus cubitum. Vulgivagus vestigium harum turbo.
Qui alii temeritas antiquus trepide tero sui. Cognatus celebrer contigo. Viduo iste cohaero.`,
    },
    {
        id: 'song-19',
        name: 'Love is a Many Splendoured Thing',
        duration: 399,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-4')!,
        album: mockAlbums.find(al => al.id === 'album-7')!,
        lyrics: `Bellicus via angelus totidem creator utrimque ustilo timidus texo. Aggero culpa atavus sub coniuratio. Saepe traho apparatus unus vesco depono pecto teneo ater desolo.
Arca corona aegrotatio acies appositus vix. Vociferor damnatio color dicta decerno amiculum saepe. Quaerat sol argentum aduro.
Degero adsum vulgus adsuesco sub vorago capitulus aranea animus. Amaritudo stultus advenio dolor vulnus. Possimus cohaero quia et cursim aperte valde defaeco autem.`,
    },
    {
        id: 'song-20',
        name: 'Soul Man',
        duration: 358,
        coverUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400',
        artist: mockArtists.find(a => a.id === 'artist-4')!,
        album: mockAlbums.find(al => al.id === 'album-7')!,
        lyrics: `Accusantium caveo temporibus approbo facere bestia. Caput voluptates thesis. Depopulo amo infit defetiscor tutamen alter depopulo architecto communis tabula.
Coruscus crur degenero territo vapulus vis. Comedo sto debitis caterva turba adficio venia deinde repellendus. Vehemens repellendus porro aeger eaque arcus tabula doloremque.
Adhuc ago sumptus aequus aequitas abundans viscus tabula. Clibanus consectetur teres solvo audax. Altus solutio tendo celo.`,
    },
    {
        id: 'song-21',
        name: 'Green River',
        duration: 358,
        coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
        artist: mockArtists.find(a => a.id === 'artist-1')!,
        album: mockAlbums.find(al => al.id === 'album-13')!,
        lyrics: `Animus possimus teres sequi. Adhuc volo theologus clarus volva pauper non. Tondeo sollicito antiquus confero vestrum caelestis corrigo custodia.
Placeat villa caput animus avaritia valens. Circumvenio totam universe tyrannus verto caste temeritas degusto. Suscipit tergeo sollicito atrocitas impedit vorax viduo adimpleo asper.
Sursum totidem benigne dicta. Tabella id officia distinctio coadunatio maiores strenuus uterque repellat. Artificiose deinde absque caritas sursum vulgaris alveus cuius thesaurus.`,
    },
    {
        id: 'song-22',
        name: 'Something',
        duration: 316,
        coverUrl: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400',
        artist: mockArtists.find(a => a.id === 'artist-3')!,

        lyrics: `Iste abscido temptatio adeptio tamdiu balbus vitae corona compello. Cohaero utor vulnus corona. Suppono valde optio cruciamentum cupiditate sub.
Quaerat constans thalassinus. Odio denique sapiente. Nisi laudantium laudantium.
Spes tibi centum tremo deripio aestus adsum. Territo suffragium tertius ea decerno. Complectus damno alienus bos.`,
    },
    {
        id: 'song-23',
        name: 'Your Cheatin\' Heart',
        duration: 402,
        coverUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,

        lyrics: `Territo angustus cunae tumultus credo mollitia odio audacia. Conculco acquiro acidus tripudio certe. Coaegresco vilicus caveo curtus uter turbo audax.
Defungo denuncio appello aggero suscipit derelinquo debilito suspendo teneo. Pel appositus tantillus solum. Aegrotatio adstringo cilicium cedo caritas ventus carus cernuus tempore defaeco.
Aedificium depopulo ademptio advenio ventus apud exercitationem cunctatio conor. Acer sonitus vix laborum video admoveo curatio caveo suus vomica. Solium avaritia maiores delectus voluptas.`,
    },
    {
        id: 'song-24',
        name: 'Blaze of Glory',
        duration: 190,
        coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Laudantium eos amplus undique supra aegre suggero illo aggredior. Deorsum asperiores vinculum ullam sortitus deinde. Soleo impedit advenio doloremque timidus degenero.
Terror baiulus caute. Comprehendo temperantia earum bardus. Utroque usus capitulus defendo voro ter acsi aedificium delectus verbera.
Deripio amiculum solum traho creator terga vobis. Eos cito textus nesciunt. Theologus crustulum veritas expedita ars subito textus comes.`,
    },
    {
        id: 'song-25',
        name: 'Gives You Hell',
        duration: 416,
        coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        artist: mockArtists.find(a => a.id === 'artist-9')!,

        lyrics: `Varius solium argentum decerno. Agnosco vaco thymbra despecto volaticus cura vorax. Rem asperiores vaco cursus ascisco abundans laborum et.
Validus ager suus audeo una totus hic sulum. Deludo trado degenero contabesco depulso. Conculco atavus summa trepide amaritudo capto ara conqueror defaeco.
Soleo quas conservo turba deludo volva reiciendis antepono. Communis stipes aegrus ater umbra calamitas tui cibo. Suasoria dolores cohaero benevolentia ademptio cognomen solitudo vigilo.`,
    },
    {
        id: 'song-26',
        name: 'Temperature',
        duration: 330,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-9')!,

        lyrics: `Laborum amor dedecor degero urbs incidunt creator voluptatibus. Curo adhuc taedium. Cibus una claro verbum tego tibi accommodo vivo sursum cogo.
Cilicium uter amplexus succedo hic alo carbo abundans delicate. Patrocinor clibanus coepi talus administratio. Ulterius sordeo optio vapulus audax aeternus capto thalassinus adeo nostrum.
Umbra eligendi adversus tripudio patruus amplus aliquid verbera sortitus tricesimus. Mollitia ea curtus comes dapifer teres pauper vapulus decipio pectus. Omnis subvenio capio doloremque amicitia creo depopulo solio.`,
    },
    {
        id: 'song-27',
        name: 'Stand By Me',
        duration: 287,
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        artist: mockArtists.find(a => a.id === 'artist-10')!,
        album: mockAlbums.find(al => al.id === 'album-11')!,
        lyrics: `Conturbo demergo adipisci apud charisma. Conatus dens autus perferendis cicuta beatae ea abscido absens blanditiis. Amita confido thorax.
Dolores claudeo vicinus crux alias provident amplitudo. Dignissimos utilis depulso subvenio vulgivagus. Cervus crur curis cunctatio.
Summopere pecus collum trans vis trado ab repellat admoneo causa. Peccatus stipes amplus. Defleo corporis animi curatio tantillus aeneus.`,
    },
    {
        id: 'song-28',
        name: 'Rock With You',
        duration: 333,
        coverUrl: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?w=400',
        artist: mockArtists.find(a => a.id === 'artist-1')!,
        album: mockAlbums.find(al => al.id === 'album-13')!,
        lyrics: `Repellat vereor perspiciatis. Surculus animi veniam aeger explicabo ara absum curis claustrum. Neque adimpleo annus laboriosam conicio suspendo.
Tutis stultus curtus speculum cetera cohibeo testimonium decumbo. Traho umquam veritatis curvo comis non correptius paulatim sufficio. Corrupti aspernatur curvo aranea validus coniuratio arma acies.
Repellendus confugo aequitas cunae colo spiculum pecto copia. Voveo defetiscor sto aqua. Acsi despecto vobis credo adficio adaugeo.`,
    },
    {
        id: 'song-29',
        name: 'Stronger',
        duration: 274,
        coverUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400',
        artist: mockArtists.find(a => a.id === 'artist-4')!,
        album: mockAlbums.find(al => al.id === 'album-3')!,
        lyrics: `Vis combibo valeo. Trepide vorax civitas vito cribro creptio confugo. Arguo iste id tempus triumphus decet cognatus.
Autem adsuesco conicio centum voco. Conor nisi apud decor quidem deporto cuius. Utrum qui modi quas baiulus crur adflicto demonstro illo calcar.
Verbera suppono expedita usus aperte texo ante thalassinus cetera utpote. Arcesso delectatio vomica denuncio urbanus odit corrupti circumvenio barba tempus. Dolorem deprimo neque uredo vomer cumque.`,
    },
    {
        id: 'song-30',
        name: 'My Sharona',
        duration: 409,
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        artist: mockArtists.find(a => a.id === 'artist-9')!,

        lyrics: `Decens uberrime varietas advenio vacuus dedico dolore quidem vester. Demoror sto suppono. Appono coepi contego thymum cibo bene vita absorbeo.
Spiculum tribuo claustrum accedo taceo trucido taedium aranea tardus tenus. Tener tyrannus placeat alienus depopulo aetas cumque cum. Conscendo amor titulus.
Aequus vis eos coepi aestus desino thalassinus suffragium admitto aequus. Claustrum candidus cicuta thymbra vetus cultellus. Comminor demonstro caelum rerum volva pax contabesco socius annus valeo.`,
    },
    {
        id: 'song-31',
        name: 'People Got to Be Free',
        duration: 169,
        coverUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
        artist: mockArtists.find(a => a.id === 'artist-6')!,
        album: mockAlbums.find(al => al.id === 'album-5')!,
        lyrics: `Traho thymum ipsam eius aranea terga cernuus derideo. Appello quo adopto tamisium cometes. Dolorem adipiscor cetera.
Advenio tumultus abduco caritas talio comedo ambitus contigo. Turbo combibo testimonium vallum damno. Cotidie vobis alii stips depulso cresco recusandae succurro abeo aspernatur.
Sophismata voco temptatio virga subvenio coadunatio amiculum tero. Administratio contigo viscus desidero damnatio defungo bellicus corporis. Admoveo tenetur cur traho ullam.`,
    },
    {
        id: 'song-32',
        name: 'Leaving, on a Jet Plane',
        duration: 388,
        coverUrl: 'https://images.unsplash.com/photo-1499415479124-43c32433a620?w=400',
        artist: mockArtists.find(a => a.id === 'artist-3')!,

        lyrics: `Clementia approbo soleo taceo comedo similique crur. Aveho validus civis corona adsum amoveo ducimus ceno. Accedo cras confero accusantium ante cupio depromo culpo excepturi.
Absque delectus vix earum spiculum color teres. Eligendi voluptatibus antea acceptus tepesco timor animi cena accommodo. Terebro eaque conqueror corrigo ab.
Sint voluptatem uberrime acervus velociter. Termes defungo cubicularis cognatus aedificium calco caritas denuo tametsi. Adsuesco vita vilitas territo vulgaris illum.`,
    },
    {
        id: 'song-33',
        name: 'I Fall to Pieces',
        duration: 211,
        coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400',
        artist: mockArtists.find(a => a.id === 'artist-10')!,
        album: mockAlbums.find(al => al.id === 'album-11')!,
        lyrics: `Terminatio nesciunt arca tondeo repellat cresco sperno. Conitor vero clamo delinquo validus. Advenio arceo absens quos dedico appono vita ex.
Desino spoliatio aestus cervus. Degero incidunt damnatio adimpleo asperiores decumbo bellicus admiratio turpis. Textus ultio carbo vitium auxilium virgo vulgus summa vomica modi.
Debilito optio aer quasi vomica. Textor venustas villa vitium. Voluptatum templum arx demoror supellex carmen rerum.`,
    },
    {
        id: 'song-34',
        name: 'My Eyes Adored You',
        duration: 359,
        coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Consuasor vester calco. Brevis comminor ubi suspendo allatus curto adamo denique. Angustus civitas cubicularis verto vulgo adinventitias temptatio corrigo.
Tego versus virga neque consuasor tersus. Magni contego sollicito caput aureus. Ambitus dicta bos adficio adeptio atque usitas cimentarius virga non.
Nisi ea tempore cimentarius conservo varius. Vapulus curia termes demonstro deripio bardus officiis audax conatus umbra. Aequitas aegrotatio vilicus dignissimos.`,
    },
    {
        id: 'song-35',
        name: 'Theme From \'A Summer Place\'',
        duration: 240,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        artist: mockArtists.find(a => a.id === 'artist-5')!,

        lyrics: `Argentum utor fugit cimentarius currus adfero antiquus teneo. Cur enim adopto. Caelum cognomen cognomen callide ab suspendo voco caelestis somnus talis.
Curo cognatus communis summa totam attonbitus correptius veniam timidus. Tego crudelis officiis solvo aeternus illum sui aspicio termes nulla. Adicio cena paulatim clibanus summopere tempore ambulo doloribus dolor corporis.
Tres subiungo summopere deinde verus suasoria suspendo universe certus timor. Conitor condico volutabrum umerus. Suscipio libero vinitor derelinquo creator ascisco terror tabernus.`,
    },
    {
        id: 'song-36',
        name: '(They Long to Be) Close to You',
        duration: 340,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-4')!,
        album: mockAlbums.find(al => al.id === 'album-7')!,
        lyrics: `Canonicus sufficio totidem in volaticus admoneo. Supellex unus attero thesaurus ipsum crux apostolus. Ars collum clam ut speculum theca casso quibusdam mollitia.
Ventus abundans sperno admoneo inflammatio civis cohibeo conservo quas. Synagoga cultellus aegrotatio terra circumvenio. Stillicidium concedo adstringo corrumpo vinco sapiente.
Ratione avarus cura tantillus ambitus chirographum charisma custodia. Aegre earum attero voluntarius amplitudo culpo taceo succurro curo conor. Celo basium denuncio censura civis solum.`,
    },
    {
        id: 'song-37',
        name: 'Bad Day',
        duration: 170,
        coverUrl: null,
        artist: mockArtists.find(a => a.id === 'artist-10')!,
        album: mockAlbums.find(al => al.id === 'album-11')!,
        lyrics: `Aliqua patruus quia socius ceno. Vociferor casso spes. Pel coma cerno patrocinor usitas vindico amiculum arma.
Tabgo vacuus balbus ocer substantia sponte cumque accendo nostrum casus. Vita cubitum tumultus audio spectaculum voluptatum. Absorbeo damno aliquam.
Vergo damno caute damno supra absque odit placeat. Carbo summopere aliqua aveho utpote taceo abutor carpo. Cerno carmen advenio degenero.`,
    },
    {
        id: 'song-38',
        name: 'Bad, Bad Leroy Brown',
        duration: 407,
        coverUrl: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400',
        artist: mockArtists.find(a => a.id === 'artist-8')!,
        album: mockAlbums.find(al => al.id === 'album-12')!,
        lyrics: `Vicissitudo illum averto provident talus taceo eligendi aegrotatio correptius. Nulla fugiat censura corporis vehemens sophismata tersus defetiscor quod carpo. Cursus decipio sodalitas video adversus tredecim clarus decor.
Coerceo desolo adstringo. Vestigium amiculum tendo cunae sollers caveo. Arto aeneus audax sonitus.
Torrens stillicidium amor civitas collum carus dolorum facilis consuasor considero. Testimonium cohors vereor viridis compello conspergo dicta vilis utor. Crudelis ipsum desolo.`,
    },
    {
        id: 'song-39',
        name: 'Roses Are Red',
        duration: 377,
        coverUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400',
        artist: mockArtists.find(a => a.id === 'artist-2')!,

        lyrics: `Pel arto speculum attero suasoria calculus. Asperiores ab super. Dolorum arx agnosco accusantium asperiores validus carbo considero.
Cado earum pecus. Adsuesco crinis canis bonus. Praesentium iusto cupressus curto hic subito subvenio astrum desidero cupiditas.
Quos exercitationem ancilla pecto angulus conduco aranea stultus beatae. Vehemens bardus distinctio curatio accusamus textor. Demitto laudantium quisquam.`,
    },
    {
        id: 'song-40',
        name: '(Sexual) Healing',
        duration: 346,
        coverUrl: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=400',
        artist: mockArtists.find(a => a.id === 'artist-7')!,

        lyrics: `Turpis deorsum concido textilis defendo auctus umbra vaco deleniti. Cresco thymbra venia. Aeger utpote cribro id.
Aeger socius aestas coruscus thymum damno vulpes laboriosam commemoro bonus. Corroboro aegrotatio corpus delectus supra. Sui absorbeo blandior somniculosus denuo abscido thymum terebro.
Aeger tener nulla tero tantillus thymbra eaque. Speciosus quam talis assentator. Validus tandem ver tempora.`,
    },
];

// Relación inversa álbum -> canciones
mockAlbums.forEach(album => {
    album.songs = mockSongs.filter(s => s.album?.id === album.id);
});

// ==========================================
// 5. DUMMY DATA: COVERS
// ==========================================
export const mockCovers: Cover[] = [
    {
        id: 'cover-1',
        song: mockSongs.find(s => s.id === 'song-24')!,
        youtubeUrl: null,
        duration: 282,
        publishDate: new Date('2023-04-08'),
        uploader: mockUsers.find(u => u.id === 'user-8')!,
    },
    {
        id: 'cover-2',
        song: mockSongs.find(s => s.id === 'song-7')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
        duration: 176,
        publishDate: new Date('2022-02-15'),
        uploader: mockUsers.find(u => u.id === 'user-6')!,
    },
    {
        id: 'cover-3',
        song: mockSongs.find(s => s.id === 'song-10')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        duration: 262,
        publishDate: new Date('2021-09-03'),
        uploader: mockUsers.find(u => u.id === 'user-3')!,
    },
    {
        id: 'cover-4',
        song: mockSongs.find(s => s.id === 'song-4')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        duration: 305,
        publishDate: new Date('2023-11-08'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-5',
        song: mockSongs.find(s => s.id === 'song-11')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        duration: 298,
        publishDate: new Date('2022-03-01'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-6',
        song: mockSongs.find(s => s.id === 'song-11')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=QkCxE2Lh458',
        duration: 287,
        publishDate: new Date('2021-12-13'),
        uploader: mockUsers.find(u => u.id === 'user-3')!,
    },
    {
        id: 'cover-7',
        song: mockSongs.find(s => s.id === 'song-27')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        duration: 172,
        publishDate: new Date('2021-04-26'),
        uploader: mockUsers.find(u => u.id === 'user-10')!,
    },
    {
        id: 'cover-8',
        song: mockSongs.find(s => s.id === 'song-28')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        duration: 192,
        publishDate: new Date('2021-02-14'),
        uploader: mockUsers.find(u => u.id === 'user-5')!,
    },
    {
        id: 'cover-9',
        song: mockSongs.find(s => s.id === 'song-36')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        duration: 307,
        publishDate: new Date('2022-02-27'),
        uploader: mockUsers.find(u => u.id === 'user-3')!,
    },
    {
        id: 'cover-10',
        song: mockSongs.find(s => s.id === 'song-36')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        duration: 399,
        publishDate: new Date('2023-12-16'),
        uploader: mockUsers.find(u => u.id === 'user-11')!,
    },
    {
        id: 'cover-11',
        song: mockSongs.find(s => s.id === 'song-34')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        duration: 146,
        publishDate: new Date('2024-07-30'),
        uploader: mockUsers.find(u => u.id === 'user-3')!,
    },
    {
        id: 'cover-12',
        song: mockSongs.find(s => s.id === 'song-14')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        duration: 400,
        publishDate: new Date('2021-11-12'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-13',
        song: mockSongs.find(s => s.id === 'song-2')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
        duration: 221,
        publishDate: new Date('2023-10-23'),
        uploader: mockUsers.find(u => u.id === 'user-5')!,
    },
    {
        id: 'cover-14',
        song: mockSongs.find(s => s.id === 'song-23')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=QkCxE2Lh458',
        duration: 124,
        publishDate: new Date('2023-09-27'),
        uploader: mockUsers.find(u => u.id === 'user-4')!,
    },
    {
        id: 'cover-15',
        song: mockSongs.find(s => s.id === 'song-25')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        duration: 294,
        publishDate: new Date('2023-01-07'),
        uploader: mockUsers.find(u => u.id === 'user-10')!,
    },
    {
        id: 'cover-16',
        song: mockSongs.find(s => s.id === 'song-25')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=3JWTaaS7LdU',
        duration: 398,
        publishDate: new Date('2023-09-17'),
        uploader: mockUsers.find(u => u.id === 'user-11')!,
    },
    {
        id: 'cover-17',
        song: mockSongs.find(s => s.id === 'song-18')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=QkCxE2Lh458',
        duration: 287,
        publishDate: new Date('2024-04-29'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-18',
        song: mockSongs.find(s => s.id === 'song-38')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=QkCxE2Lh458',
        duration: 399,
        publishDate: new Date('2024-07-07'),
        uploader: mockUsers.find(u => u.id === 'user-5')!,
    },
    {
        id: 'cover-19',
        song: mockSongs.find(s => s.id === 'song-26')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=3JWTaaS7LdU',
        duration: 134,
        publishDate: new Date('2022-08-18'),
        uploader: mockUsers.find(u => u.id === 'user-10')!,
    },
    {
        id: 'cover-20',
        song: mockSongs.find(s => s.id === 'song-27')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        duration: 167,
        publishDate: new Date('2022-10-17'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-21',
        song: mockSongs.find(s => s.id === 'song-28')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
        duration: 163,
        publishDate: new Date('2023-04-12'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-22',
        song: mockSongs.find(s => s.id === 'song-24')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 307,
        publishDate: new Date('2024-01-01'),
        uploader: mockUsers.find(u => u.id === 'user-3')!,
    },
    {
        id: 'cover-23',
        song: mockSongs.find(s => s.id === 'song-7')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=3JWTaaS7LdU',
        duration: 316,
        publishDate: new Date('2024-01-02'),
        uploader: mockUsers.find(u => u.id === 'user-1')!,
    },
    {
        id: 'cover-24',
        song: mockSongs.find(s => s.id === 'song-33')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 232,
        publishDate: new Date('2021-07-21'),
        uploader: mockUsers.find(u => u.id === 'user-12')!,
    },
    {
        id: 'cover-25',
        song: mockSongs.find(s => s.id === 'song-23')!,
        youtubeUrl: null,
        duration: 283,
        publishDate: new Date('2023-02-15'),
        uploader: mockUsers.find(u => u.id === 'user-4')!,
    },
    {
        id: 'cover-26',
        song: mockSongs.find(s => s.id === 'song-15')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 143,
        publishDate: new Date('2023-03-05'),
        uploader: mockUsers.find(u => u.id === 'user-1')!,
    },
    {
        id: 'cover-27',
        song: mockSongs.find(s => s.id === 'song-36')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=QkCxE2Lh458',
        duration: 362,
        publishDate: new Date('2024-03-05'),
        uploader: mockUsers.find(u => u.id === 'user-11')!,
    },
    {
        id: 'cover-28',
        song: mockSongs.find(s => s.id === 'song-8')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=09R8_2nJtjg',
        duration: 400,
        publishDate: new Date('2021-02-09'),
        uploader: mockUsers.find(u => u.id === 'user-9')!,
    },
    {
        id: 'cover-29',
        song: mockSongs.find(s => s.id === 'song-36')!,
        youtubeUrl: null,
        duration: 250,
        publishDate: new Date('2024-01-14'),
        uploader: mockUsers.find(u => u.id === 'user-8')!,
    },
    {
        id: 'cover-30',
        song: mockSongs.find(s => s.id === 'song-3')!,
        youtubeUrl: 'https://www.youtube.com/watch?v=CevxZvSJLk8',
        duration: 349,
        publishDate: new Date('2024-01-21'),
        uploader: mockUsers.find(u => u.id === 'user-5')!,
    },
];

// Relación inversa canción -> covers
mockSongs.forEach(song => {
    song.covers = mockCovers.filter(c => c.song?.id === song.id);
});