'use client'

import { useEffect, useRef } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function Input() {
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        searchRef.current && searchRef.current.focus()
    }, [])

    return (
        <div className="h-16 flex items-center sticky top-16 px-4 md:px-6 bg-[--bg]">
            <div className="relative w-full flex items-center">
                <HiOutlineMagnifyingGlass className='absolute left-3 text-xl text-[--text2] pointer-events-none' />
                <input ref={searchRef} type="text" placeholder="Search" 
                className="w-full outline-none text-sm py-1.5 pl-11 pr-3 leading-6 rounded-md bg-transparent 
                border border-[--border] focus:border-[--main] focus:z-10" />
            </div>
        </div>
    )
}