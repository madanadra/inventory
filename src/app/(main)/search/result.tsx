import { HiOutlineChevronRight } from "react-icons/hi2";

export default function Result({name, createdAt, icon}: {name: string, createdAt: string, icon: React.ReactNode}) {
    return (
        <div className="flex gap-x-4 items-center px-4 md:px-6 py-2 cursor-pointer hover:bg-[--component]">
            <div className="text-[--text2] text-2xl">{icon}</div>
            <div className="grow grid content-center">
                    <h1 className="font-medium truncate">{name}</h1>
                    <h1 className="text-[--text2] text-sm truncate">Created at {createdAt}</h1>
            </div>
            <HiOutlineChevronRight className='text-[--text2] text-xl' />
        </div>
    )
}