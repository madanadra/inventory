import Card from "@/app/card";

export default function Password() {
    return (
        <Card title='Password' subtitle="Don't share your password, this is used for log in to your account.">
            <button className="w-max rounded-md bg-[--main] text-[--main2] py-1.5 px-3 
            text-sm leading-6 font-semibold">Change</button>
        </Card>
    )
}