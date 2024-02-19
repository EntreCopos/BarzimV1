import Link from 'next/link'
import BrindarIcon from './brindar-icon'
import { RiEdit2Line } from 'react-icons/ri'

export const BrindarButton: React.FC<{id: string}> = ({id}) => {
    return (
        <Link style={{display: 'contents'}} href={id + '/avaliar'}>
        <button className="rounded-full py-4 bg-yellow-barzim text-[#141414] font-medium text-sm px-3 flex items-center hover:bg-[#f4c85a] transition-all duration-300" >
            {/* <BrindarIcon /> */}
            <RiEdit2Line/>
            <span className='ml-1 p-2'>Avaliar</span>
        </button>
        
        </Link>
    )
}