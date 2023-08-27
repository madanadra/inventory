import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inventory',
}

export default function Home() {
  return (
    <div className="p-4 sm:px-6">
      <h1 className='font-black text-[2em] leading-none py-2'>Dashboard</h1>
    </div>
  )
}
