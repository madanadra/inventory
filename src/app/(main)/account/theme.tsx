'use client'

import Card from "@/app/card";
import { useInventory } from "@/zustand";

export default function Theme() {
    const { theme, setTheme } = useInventory()

    const Box = ({name, value, loading}: {name: string, value: string, loading?: boolean}) => {
        return (
            <div onClick={() => setTheme(value)} className="flex items-center gap-x-2.5 cursor-pointer w-max group">
                {loading 
                ?   <div className="w-4 aspect-square rounded-full border-[5px] border-x-[--main] border-y-transparent animate-spin" />
                :   <div className={`${theme === value ? 'border-[5px] border-[--main] bg-[--main2]' : 'border border-[--border]'} 
                    w-4 aspect-square rounded-full`} />
                }
                <h1 className='text-sm font-medium'>{name}</h1>
            </div>
        )
    } 

    return (
        <Card title='Theme' subtitle="Choose your favorite color scheme.">
            <div className="grid gap-y-3.5">
                <Box name="System" value="" />
                <Box name="Light" value="light" loading />
                <Box name="Dark" value="dark" />
            </div>
        </Card>
    )
}