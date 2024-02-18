import BrindarIcon from './brindar-icon'

export const BrindarReviewButton: React.FC = () => {
    return (
        <button className="rounded-full bg-yellow-barzim text-[#141414] font-medium text-sm px-1 h-8 max-w-40 flex items-center justify-center hover:bg-[#f4c85a] transition-all duration-300">
            <BrindarIcon />
            <span>Brindar avaliação</span>
        </button>
    )
}