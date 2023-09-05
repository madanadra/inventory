'use client'

import { HiOutlineBars3, HiOutlineMagnifyingGlass, HiOutlineChatBubbleLeft } from "react-icons/hi2";
import { useInventory } from "@/zustand";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
    const { setShowNavbar } = useInventory()
    const router = useRouter()
    const pathname = usePathname()

    return (
        <div className="flex items-center gap-x-4 h-16 px-4 md:px-6 sticky top-0 bg-[--bg] border-b border-[--border]">

            {/* Mobile */}
            <div className="-ml-1 grid md:hidden place-content-center w-6 aspect-square rounded-full cursor-pointer">
                <HiOutlineBars3 onClick={() => setShowNavbar(true)} className='text-xl text-[--text2]' />
            </div>

            <h1 className="grow text-sm font-medium capitalize">{pathname === '/' ? 'dashboard' : pathname.substring(1)}</h1>

            <div className="flex items-center gap-x-4">
                <div onClick={() => router.push('/search')} className="grid place-content-center w-6 aspect-square rounded-full cursor-pointer">
                    <HiOutlineMagnifyingGlass className='text-xl text-[--text2]' />
                </div>
                <div onClick={() => router.push('/chat')} className="grid place-content-center w-6 aspect-square rounded-full cursor-pointer">
                    <HiOutlineChatBubbleLeft className='text-xl text-[--text2]' />
                </div>
                <img onClick={() => router.push('/account')} src="https://images.alphacoders.com/112/thumb-1920-112121.jpg" 
                alt='Avatar' className="w-6 aspect-square rounded-full cursor-pointer ml-1" />
            </div>
        </div>
    )
}