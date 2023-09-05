'use client'

import '../../globals.css'
import Header from "./header"
import Navbar from "./navbar"
import { useInventory } from "@/zustand"
import { useEffect } from 'react';
import ModalFilter from './search/modal-filter'

export default function MainLayout({children}: {children: React.ReactNode}) {
    const { showNavbar, theme, setShowNavbar } = useInventory()

    useEffect(() => {
        if (theme === '') {
            document.documentElement.removeAttribute('color-scheme')
        } else {
            if (theme === 'light') {
                document.documentElement.setAttribute('color-scheme', 'light')
            } else if (theme === 'dark') {
                document.documentElement.setAttribute('color-scheme', 'dark')
            }
        }
    }, [theme])

    return (<>
        <main className="grid md:grid-cols-[1fr_4fr]">

            {/* Navbar */}
            <div className="hidden md:grid">
                <Navbar />
            </div>

            <div className='min-h-screen flex flex-col'>

                {/* Header */}
                <Header />

                {/* Content */}
                <div className='grow'>
                    {children}
                </div>

            </div>
        </main>

        {/* Navbar mobile */}
        <div onClick={() => setShowNavbar(false)} 
        className={`${!showNavbar && 'hidden'} md:hidden fixed inset-0 bg-[--bg2] z-50`}>
            <div onClick={(e) => e.stopPropagation()} className="w-4/5 animation-navbar">
                <Navbar />
            </div>
        </div>

        {/* Modal filter search */}
        <ModalFilter />

    </>)
}