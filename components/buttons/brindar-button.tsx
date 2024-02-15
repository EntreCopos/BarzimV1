import BrindarIcon from './brindar-icon'

export const BrindarButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button className="rounded-full bg-yellow-barzim text-[#141414] font-medium text-sm px-3 flex items-center hover:bg-[#f4c85a] transition-all duration-300" onClick={onClick}>
            <BrindarIcon />
            <span className='ml-1'>Brindar</span>
        </button>
    )
}