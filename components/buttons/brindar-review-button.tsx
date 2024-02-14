import BrindarIcon from './brindar-icon'

export const BrindarReviewButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <button className="rounded-full bg-yellow-barzim text-[#141414] font-medium text-sm px-1 h-8 flex items-center hover:bg-[#f4c85a] transition-all duration-300" onClick={onClick}>
            <BrindarIcon />
            <span>Brindar avaliação</span>
        </button>
    )
}