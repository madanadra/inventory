import { IoSearchOutline } from "react-icons/io5";

export default function Search() {
    return (
        <div className="relative flex items-center h-[2em]">
            <IoSearchOutline className='text-[1em] text-slate-600 absolute ml-2 pointer-events-none' />
            <input type="text" placeholder="Search here" 
            className="w-full h-full text-[0.875em] leading-tight pl-8 pr-2 rounded-full outline-none 
            border border-slate-300 bg-slate-200" />
        </div>
    )
}