export const metadata = {
    title: 'About Page',
}

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</button>
            <h1>About Page</h1>
        </main>
    );
}