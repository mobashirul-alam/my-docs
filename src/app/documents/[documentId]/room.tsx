"use client";

import { FullScreenLoader } from "@/components/loader/fullscreen-loader";
import {
    ClientSideSuspense,
    LiveblocksProvider,
    RoomProvider,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { getUsers } from "./actions";

type User = { id: string; name: string; avatar: string };

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();

    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useMemo(
        () => async () => {
            try {
                const list = await getUsers();
                setUsers(list);
            } catch {
                toast.error("Failed to fetch users");
            }
        },
        []
    );

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <LiveblocksProvider
            throttle={16}
            authEndpoint={"/api/liveblocks-auth"}
            resolveUsers={({ userIds }) => {
                return userIds.map((userId) =>
                    users.find((user) => user.id === userId)
                );
            }}
            resolveMentionSuggestions={({ text }) => {
                let filteredUsers = users;

                if (text) {
                    filteredUsers = users.filter((user) => {
                        return user.name
                            .toLowerCase()
                            .includes(text.toLowerCase());
                    });
                }

                return filteredUsers.map((user) => user.id);
            }}
            resolveRoomsInfo={() => []}
        >
            <RoomProvider id={params.documentId as string}>
                <ClientSideSuspense
                    fallback={<FullScreenLoader label="Room Loading..." />}
                >
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}
