'use client'

import { useInventory } from "@/zustand";
import { HiOutlineChevronDown } from "react-icons/hi2";

export default function Filter() { 
    const { setModalFilterSearch } = useInventory()

    return (
        <div onClick={() => setModalFilterSearch(true)} className='text-[--text2] flex gap-x-2.5 items-center cursor-pointer w-max mx-4 md:mx-6 my-2'>
            <h1 className='font-medium text-sm'>Filter</h1>
            <HiOutlineChevronDown />
        </div>
    )
}