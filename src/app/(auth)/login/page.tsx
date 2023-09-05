import type { Metadata } from 'next'
import { HiCube } from "react-icons/hi2";

export const metadata: Metadata = {
  title: 'Log in - Inventory',
}

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 md:p-6">
      <div className='grid gap-y-6 justify-items-center w-full max-w-sm'>
          <HiCube className='mt-10 text-[--main] text-7xl' />
          <h1 className='text-2xl font-bold leading-9 tracking-tight'>Log in to your account</h1>
          <form className='mt-2 w-full grid gap-y-6 rounded-md bg-[--component] border border-[--border] p-4 md:p-6'>
            <div>
              <label htmlFor='username' className='text-sm font-medium'>Username</label>
              <input type='text' name='username' autoComplete='username' autoCapitalize='off' autoCorrect='off' required
              className='mt-2 w-full rounded-md outline-none text-sm leading-6 py-1.5 px-3 border 
              border-[--border] bg-transparent focus:border-[--main]' />
            </div>
            <div>
              <label htmlFor='password' className='text-sm font-medium'>Password</label>
              <input type='password' name='password' autoComplete='password' required
              className='mt-2 w-full rounded-md outline-none text-sm leading-6 py-1.5 px-3 border 
              border-[--border] bg-transparent focus:border-[--main]' />
            </div>
            <button type="submit" className="rounded-md bg-[--main] text-[--main2] py-1.5 px-3 
            text-sm leading-6 font-semibold">Log in</button>
          </form>
          </div>
    </div>
  )
}