import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'

const Document = () => {
    return (
        <div>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <h1 className='text-xl'>this is fake </h1>
                </div>
            </Header>
            <Editor />
        </div>
    )
}

export default Document