import { notFound } from "next/navigation";

export default function Users({ params }) {

   if(params.id > 100) {
    notFound();
   }

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{`User ${params.id}`}</h1>
      </main>
    );
  }