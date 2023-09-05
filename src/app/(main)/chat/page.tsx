import type { Metadata } from 'next'
import Input from './input'
import Bubble from './bubble'
import { HiOutlineChevronDown } from 'react-icons/hi2'

export const metadata: Metadata = {
  title: 'Chat - Inventory',
}

export default function Chat() {
    return (
        <div className='h-full flex flex-col'>
            <div className='grow p-4 md:p-6 grid content-start gap-y-6'>
                <div className='text-[--text2] flex gap-x-2.5 items-center cursor-pointer w-max'>
                    <h1 className='font-medium text-sm'>Today</h1>
                    <HiOutlineChevronDown />
                </div>
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
                <Bubble avatar='https://images.alphacoders.com/112/thumb-1920-112121.jpg' name='Indra' createdAt='23.50' 
                message='Test doang inimah Test doang inimah Test doang inimah Test doang inimah' />
            </div>
            <Input />
        </div>
    )
}