"use client";
import React from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react";
import Loader from '@/components/Loader';

const Provider = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <LiveblocksProvider authEndpoint={"/api/live-block"}>

            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>

        </LiveblocksProvider>
    )
}

export default Provider