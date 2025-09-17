"use client";

import { ClerkProvider, SignIn, useAuth } from "@clerk/nextjs";
import {
    Authenticated,
    AuthLoading,
    ConvexReactClient,
    Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
import { FullScreenLoader } from "../loader/fullscreen-loader";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    throw new Error("NEXT_PUBLIC_CONVEX_URL is not set");
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>{children}</Authenticated>
                <Unauthenticated>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <SignIn routing="hash" />
                    </div>
                </Unauthenticated>
                <AuthLoading>
                    <FullScreenLoader label="Auth Loading..." />
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
