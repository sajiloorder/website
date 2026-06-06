import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen items-center bg-gray-100 px-4 flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-gray-500 mt-4">
          Sorry, we couldn’t find the page you were looking for.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
