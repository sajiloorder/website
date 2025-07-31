import Link from "next/link";


export default function NotFound() {
    return (
        <div className="min-h-screen  items-center bg-gray-100 px-4">
            <div className="">
                <Link href="/">
                    <div className="mt-6 inline-block px-2 py-1 bg-primary text-white rounded-lg hover:bg-green-600 transition">
                        Go Home
                    </div>
                </Link>
            </div>
            <div className="flex  justify-center">
                <div className="flex items-center space-x-6">
                    <h1 className="text-xl font-bold text-gray-800">404</h1>
                    <div className="w-px h-10 bg-gray-400" />
                    <div>
                        <p className="text-gray-500 mt-2">Sorry, we couldn’t find the page you were looking for.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
