import Card from "@/app/card";

export default function Username() {
    return (
        <Card title='Username' subtitle="Cannot be changed, this is used for your account identification.">
            <input type='text' defaultValue='madanadra' disabled 
            className='w-full rounded-md outline-none text-sm leading-6 py-1.5 px-3 
            border border-[--border] bg-[--component2]' />
        </Card>
    )
}