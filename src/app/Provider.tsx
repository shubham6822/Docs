"use client";
import React from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react";
import Loader from '@/components/Loader';
import { getClerkUsers } from '@/lib/action/user.action';

const Provider = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <LiveblocksProvider authEndpoint={"/api/live-block"} resolveUsers={async ({ userIds }) => {
            const user = await getClerkUsers({ userIds })
            return user
        }}>
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default Provider