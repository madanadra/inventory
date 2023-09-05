import type { Metadata } from 'next'
import Theme from './theme'
import LogOut from './log-out'
import Avatar from './avatar'
import Name from './name'
import Username from './username'
import Password from './password'

export const metadata: Metadata = {
  title: 'Account - Inventory',
}

export default function Account() {
    return (
        <div className='grid content-start gap-y-6 p-4 md:p-6'>
            <Avatar />
            <Name />
            <Username />
            <Password />
            <Theme />
            <LogOut />
        </div>
    )
}