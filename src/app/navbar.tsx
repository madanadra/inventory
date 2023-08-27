import { ReactElement } from "react";
import { IoHomeOutline, IoGridOutline, IoCheckboxOutline, IoDocumentOutline, IoChatboxOutline } from "react-icons/io5";

export default function Navbar() {
    const Menu = ({name, icon, selected}: {name: string, icon: ReactElement, selected?: boolean}) => {
        return (
            <div className={`${selected ? 'text-teal-600' : 'hover:text-slate-950 text-slate-600'} 
            flex items-center gap-x-6 p-2 text-[1.1em] rounded cursor-pointer`}>
                {icon}
                <h1 className="leading-none">{name}</h1>
            </div>
        )
    } 
    return (
        <div className="grid content-start gap-y-4 bg-slate-100 border-r border-slate-300 p-4 sm:px-6">
            <Menu name="Dashboard" icon={<IoHomeOutline />} selected />
            <Menu name="Product" icon={<IoGridOutline />} />
            <Menu name="Operation" icon={<IoCheckboxOutline />} />
            <Menu name="Document" icon={<IoDocumentOutline />} />
            <Menu name="Chat" icon={<IoChatboxOutline />} />
        </div>
    )
}