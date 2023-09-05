export default function Card({title, subtitle, children}: {title: string, subtitle: string, children: React.ReactNode}) {
    return (
        <div className='grid gap-y-1'>
            <h1 className='text-lg font-semibold leading-7'>{title}</h1>
            <h1 className='mb-2 text-[--text2] text-sm'>{subtitle}</h1>
            {children}
        </div>
    )
}