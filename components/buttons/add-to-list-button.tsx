import { FaPlus } from "react-icons/fa";

export const AddtoListButton: React.FC<{ onClick: () => void; }> = ({ onClick }) => {
    return (
        <button className="bg-transparent border-2 rounded-full text-white font-medium text-sm px-3 py-1 flex items-center" onClick={onClick}>
            <FaPlus />
            <span className='ml-2'>Adicionar à lista</span>
        </button>
    )
}