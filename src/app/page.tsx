import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Personal Health Record App
        </h1>
        <p className="mb-8">
          Your secure place to manage health records.
        </p>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 bg-[#0070f3] text-white rounded-md hover:bg-blue-600">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}