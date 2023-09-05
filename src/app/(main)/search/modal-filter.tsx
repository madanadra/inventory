'use client'

import Modal from "@/app/modal";
import { useInventory } from "@/zustand";
import { useState, useEffect } from "react";
import { HiOutlineCheck } from "react-icons/hi2";

export default function ModalFilter() {
    const { modalFilterSearch, filterSearch, setModalFilterSearch, setFilterSearch } = useInventory()
    const [type, setType] = useState<{
        item: boolean,
        operation: boolean,
        document: boolean,
        admin: boolean
    }>({
        item: true,
        operation: true,
        document: true,
        admin: true
    })

    useEffect(() => {
        modalFilterSearch && setType(filterSearch)
    }, [modalFilterSearch])

    const Box = ({name, click, selected}: {name: string, click: () => void, selected: boolean}) => {
        return (
            <div onClick={click} className="flex items-center gap-x-2.5 cursor-pointer w-max group">
                <div className={`${selected ? 'bg-[--main]' : 'border border-[--border]'} grid place-content-center
                w-4 aspect-square rounded-md`}>
                    <HiOutlineCheck className={`${!selected && 'hidden'} text-xs text-[--main2]`} />
                </div>
                <h1 className='text-sm font-medium'>{name}</h1>
            </div>
        )
    } 

    return (
        <Modal click={() => setModalFilterSearch(false)} hidden={!modalFilterSearch}>
            <div className="p-4 md:p-6 grid gap-y-6">
                <h1 className="font-semibold">Type</h1>
                <div className="grid gap-y-3.5">
                    <Box name="Item" click={() => setType({...type, item: !type.item})} selected={type.item} />
                    <Box name="Operation" click={() => setType({...type, operation: !type.operation})} selected={type.operation} />
                    <Box name="Document" click={() => setType({...type, document: !type.document})} selected={type.document} />
                    <Box name="Admin" click={() => setType({...type, admin: !type.admin})} selected={type.admin} />
                </div>
                <div className="flex justify-end gap-x-4 text-sm font-bold uppercase">
                    <h1 onClick={() => setModalFilterSearch(false)} className="text-[--text2] cursor-pointer">Cancel</h1>
                    <h1 onClick={() => {setFilterSearch(type); setModalFilterSearch(false)}} className="text-[--main] cursor-pointer">Save</h1>
                </div>
            </div>
        </Modal>
    )
}