export default function ReviewUser({ params }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{`Review ${params.reviewId} of User ${params.id}`}</h1>
      </main>
    );
  }