export default function LoadingState() {
    return (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
            {/* Cargador Radial */}
            <div
                className="h-8 w-8 animate-spin rounded-full border-2 border-olive-bark-200 border-t-espresso-600"
                role="status"
                aria-label="Cargando"
            />
            {/* Texto opcional por accesibilidad */}
            <span className="text-xs font-medium text-dusty-olive-500">Cargando...</span>
        </div>
    );
}
