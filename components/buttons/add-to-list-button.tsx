"use client"

import { FaPlus } from "react-icons/fa";
import Popup from 'reactjs-popup';
import { addCervejaToList } from '../../actions/userCerveja'; 

export const AddtoListButton: React.FC<{id: string, usuario: string}> = ({id, usuario}) => {
    return (
        <Popup trigger={
            <button type="button" className="bg-transparent border-2 rounded-full text-white font-medium text-sm px-3 py-1 flex items-center">
                <FaPlus />
                <span className='ml-2'>Adicionar</span>
            </button>
        } position="bottom right">
            <div className="py-1 bg-white z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#" onClick={() => addCervejaToList(Number(id), 'Quero Beber', usuario)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Quero Beber</a>
                <a href="#" onClick={() => addCervejaToList(Number(id), 'Já Bebi', usuario)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Já Bebi</a>
            </div>
        </Popup>
    )
}