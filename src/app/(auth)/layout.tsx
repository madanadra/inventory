'use client'

import '../../globals.css'
import { useEffect } from 'react';

export default function MainLayout({children}: {children: React.ReactNode}) {
    useEffect(() => {
        document.documentElement.removeAttribute('color-scheme')
    }, [])

    return (
        <main className="min-h-screen">
            {children}
        </main>
    )
}