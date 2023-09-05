import Card from "@/app/card";

export default function Avatar() {
    return (
        <Card title='Avatar' subtitle="An avatar is optional but recommended to recognize your account.">
            <div className='flex items-center gap-x-4'>
                <img src="https://images.alphacoders.com/112/thumb-1920-112121.jpg" alt='Avatar'
                className="w-40 aspect-square rounded-full border border-[--border]" />
                <button className="rounded-md bg-[--main] text-[--main2] py-1.5 px-3 
                text-sm leading-6 font-semibold">Choose</button>
            </div>
        </Card>
    )
}