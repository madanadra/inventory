export default function Bubble({avatar, name, createdAt, message}: {avatar: string, name: string, createdAt: string, message: string}) {
    return (
        <div className="rounded-md flex items-start gap-x-2.5">
            <img src={avatar} 
            alt='Avatar' className="w-10 aspect-square rounded-full cursor-pointer" />
            <div className="grid content-start text-sm">
                <h1 className="font-medium cursor-pointer w-max">{name}<span className="text-[--text2] text-xs font-normal cursor-text"> &middot; {createdAt}</span></h1>
                <h1>{message}</h1>
            </div>
        </div>
    )
}