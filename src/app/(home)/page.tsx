import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
                <Navbar />
            </div>
            <div className="mt-16">
                <h1 className="text-5xl font-semibold">Welcome to MY DOCS</h1>

                <Link
                    href="/documents/new"
                    className="text-blue-500 underline hover:text-blue-700 text-2xl mt-4"
                >
                    Go To Document Id
                </Link>
            </div>
        </div>
    );
};

export default Home;
