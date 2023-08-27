'use client'

import { IoCloseOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import Navbar from "./navbar";
import { useState } from "react";
import Search from "./search";

export default function Header() {
    const [navbar, setNavbar] = useState<boolean>(false) 
    const [search, setSearch] = useState<boolean>(false) 

    return (
        <div className="flex items-center gap-x-6 border-b border-slate-300 p-4 sm:px-6 relative">
            <div className="flex items-center gap-x-6">
                <IoMenuOutline onClick={() => setNavbar(true)} className='sm:hidden text-[1.5em] text-slate-600 cursor-pointer' />
                <div className="flex items-center gap-x-2 cursor-pointer">
                    <img src="./logo.png" alt="Logo" className="w-[1.5em]" />
                    <h1 className="font-extrabold text-[1.5em] text-teal-600 leading-none">Inventory</h1>
                </div>
            </div>
            <div className="grow flex justify-end gap-x-6 items-center">
                <div className="hidden sm:grid w-full max-w-sm"><Search /></div>
                <IoSearchOutline onClick={() => setSearch(true)} className='sm:hidden text-[1.5em] text-slate-600 cursor-pointer' />
                <img src="https://images.alphacoders.com/112/thumb-1920-112121.jpg" alt='Profile'
                className="w-[2em] aspect-square rounded-full border border-slate-300 cursor-pointer" />
            </div>
            <div className={`${!search && 'hidden'} sm:hidden absolute inset-0 flex items-center gap-x-6 p-4 sm:px-6 bg-slate-50`}>
                <div className="w-full"><Search /></div>
                <IoCloseOutline onClick={() => setSearch(false)} className='sm:hidden text-[1.5em] text-slate-600 cursor-pointer' />
            </div>
            <div onClick={() => setNavbar(false)} 
            className={`${!navbar && 'hidden'} sm:hidden fixed inset-0 bg-slate-950 bg-opacity-75`}>
                <div onClick={(e) => e.stopPropagation()} className="w-4/5 h-screen grid">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}