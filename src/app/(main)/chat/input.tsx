import { HiOutlinePaperAirplane } from "react-icons/hi2";

export default function Input() {
    return (
        <div className="flex items-center gap-x-4 h-16 px-4 md:px-6 sticky bottom-0 bg-[--bg]">
            <input type="text" placeholder="Type a message" 
            className="grow outline-none text-sm py-1.5 px-3 leading-6 rounded-md bg-transparent 
            border border-[--border] focus:border-[--main]" />
            <button className="grid place-content-center h-[38.5px] aspect-square rounded-md bg-[--main] text-[--main2]">
                <HiOutlinePaperAirplane className='text-xl' />
            </button>
        </div>
    )
}