export default function Modal({children, click, hidden}: {children: React.ReactNode, click: () => void, hidden: boolean}) {
    return (
        <div onClick={click} className={`${hidden ? 'hidden' : 'grid'} 
        content-center justify-items-center fixed inset-0 bg-[--bg2] z-50 p-4 md:p-6`}>
            <div onClick={(e) => e.stopPropagation()} className="rounded-md bg-[--component] border border-[--border] w-full max-w-sm animation-modal">
                {children}
            </div>
        </div>
    )
}