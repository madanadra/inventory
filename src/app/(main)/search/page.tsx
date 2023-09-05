import type { Metadata } from 'next'
import Input from './input'
import Result from './result'
import { HiOutlineSquares2X2, HiOutlineClipboardDocumentCheck, HiOutlineDocument, 
HiOutlineUser } from "react-icons/hi2";
import Filter from './filter';

export const metadata: Metadata = {
  title: 'Search - Inventory',
}

export default function Search() {
    return (
        <div className='h-full flex flex-col'>
          <Input />
          <div className="grow">
            <Filter />
            <Result name="Mouse type A-300" createdAt="19 minutes ago" icon={<HiOutlineSquares2X2 />} />
            <Result name="Activity :19 May" createdAt="19 hours ago" icon={<HiOutlineClipboardDocumentCheck />} />
            <Result name="Sales report :June" createdAt="19 days ago" icon={<HiOutlineDocument />} />
            <Result name="Indra" createdAt="19 weeks ago" icon={<HiOutlineUser />} />
            <Result name="Mouse type A-300" createdAt="19 minutes ago" icon={<HiOutlineSquares2X2 />} />
            <Result name="Activity :19 May" createdAt="19 hours ago" icon={<HiOutlineClipboardDocumentCheck />} />
            <Result name="Sales report :June" createdAt="19 days ago" icon={<HiOutlineDocument />} />
            <Result name="Indra" createdAt="19 weeks ago" icon={<HiOutlineUser />} />
            <Result name="Mouse type A-300" createdAt="19 minutes ago" icon={<HiOutlineSquares2X2 />} />
            <Result name="Activity :19 May" createdAt="19 hours ago" icon={<HiOutlineClipboardDocumentCheck />} />
          </div>
        </div>
    )
}