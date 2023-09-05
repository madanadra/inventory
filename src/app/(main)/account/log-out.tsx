'use client'

import Card from "@/app/card";
import { useRouter } from "next/navigation";

export default function LogOut() {
    const router = useRouter()

    return (
        <Card title='Log out' subtitle="If you log out, you'll need to log in again to access your account.">
            <button onClick={() => router.push('/login')} className="w-max rounded-md bg-[--red] text-[--main2] py-1.5 px-3 
            text-sm leading-6 font-semibold">Log out</button>
        </Card>
    )
}