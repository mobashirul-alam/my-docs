import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SearchInput } from "./search-input";

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between h-full w-full">
            <div className="flex gap-3 items-center shrink-0 pr-6">
                <Link href={"/"}>
                    <Image
                        src={"/logo.svg"}
                        alt="logo"
                        width={36}
                        height={36}
                    />
                </Link>
                <h3 className="text-xl font-medium">My Docs</h3>
            </div>
            <Suspense fallback={<div className="flex-1" />}>
                <SearchInput />
            </Suspense>
            <UserButton />
        </nav>
    );
};
