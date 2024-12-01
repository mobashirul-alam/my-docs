import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-5xl font-semibold">Welcome to MY DOCS</h1>

            <Link
                href="/documents/new"
                className="text-blue-500 underline hover:text-blue-700 text-2xl mt-4"
            >
                Go To Document Id
            </Link>
        </div>
    );
};

export default Home;
