'use client'

import { useInventory } from "@/zustand";
import { usePathname, useRouter } from "next/navigation";
import { HiCube, HiOutlineHome, HiOutlineSquares2X2, HiOutlineClipboardDocumentCheck, HiOutlineDocument, 
HiOutlineBookOpen, HiOutlineUser, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar() {
    const { setShowNavbar } = useInventory()
    const router = useRouter()
    const pathname = usePathname()

    const Menu = ({name, icon, url}: {name: string, icon: React.ReactNode, selected?: boolean, url?: string}) => {
        return (
            <div onClick={() => url && router.push(url)} className={`${pathname != url && 'text-[--text2]'} 
            flex items-center gap-x-2.5 p-2 cursor-pointer hover:text-[--text]`}>
                <div className="text-2xl w-6">{icon}</div>
                <h1 className="font-medium">{name}</h1>
            </div>
        )
    } 
    return (
        <div className="h-screen bg-[--bg] border-r border-[--border] overflow-y-auto sticky top-0">
            
            {/* Logo */}
            <div className="flex justify-between items-center h-16 px-4 md:px-6">
                <HiCube onClick={() => router.push('/')} className='text-[--main] text-4xl cursor-pointer' />
                <HiOutlineXMark onClick={() => setShowNavbar(false)} className='md:hidden text-2xl text-[--text2] cursor-pointer' />
            </div>

            {/* Navbar menu */}
            <div className="grid content-start gap-y-1 p-2 md:p-4">
                <Menu name="Dashboard" icon={<HiOutlineHome />} url="/" />
                <Menu name="Items" icon={<HiOutlineSquares2X2 />} />
                <Menu name="Operations" icon={<HiOutlineClipboardDocumentCheck />} />
                <Menu name="Documents" icon={<HiOutlineDocument />} />
                <Menu name="Admin" icon={<HiOutlineUser />} />
                <Menu name="History" icon={<HiOutlineBookOpen />} />
            </div>
            
        </div>
    )
}