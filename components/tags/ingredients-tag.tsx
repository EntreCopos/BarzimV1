interface IngredientsTagProps {
    label: string
}

export const IngredientsTag: React.FC<IngredientsTagProps> = ({ label }) => {
    return (
        <span className="text-[#333333] font-extrabold text-sm bg-marfim-barzim p-[2px] px-2 rounded-full">{label}</span>
    )
} 