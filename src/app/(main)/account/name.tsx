import Card from "@/app/card";

export default function Name() {
    return (
        <Card title='Name' subtitle="Please enter your full name, or a display name you are comfortable with.">
            <div className='flex items-center gap-x-4'>
                <input type='text' defaultValue='Indra' required className='w-full rounded-md outline-none text-sm leading-6 py-1.5 px-3 border 
                border-[--border] bg-transparent focus:border-[--main]' />
                <button className="rounded-md bg-[--main] text-[--main2] py-1.5 px-3 
                text-sm leading-6 font-semibold">Save</button>
            </div>
        </Card>
    )
}