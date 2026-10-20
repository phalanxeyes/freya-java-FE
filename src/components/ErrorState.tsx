export default function ErrorState({ message }: { message: string }) {
    return (
        <div className="flex min-h-[40vh] items-center justify-center px-6">
            <p
                role="alert"
                className="rounded-2xl bg-dark-walnut-100 px-5 py-4 text-center text-sm text-dark-walnut-800"
            >
                {message}
            </p>
        </div>
    );
}
