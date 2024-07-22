export default function Users({ params }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{params.id}</h1>
      </main>
    );
  }