"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react'
import React from 'react'
import { Editor } from './editor/Editor'
import Header from './Header'
import Loader from './Loader'

export const CollabrativeRoom = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<Loader />}>
                <div className='collaborative-room'>
                    <Header>
                        <div className='flex w-fit items-center justify-center gap-2'>
                            <p>share</p>
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}
