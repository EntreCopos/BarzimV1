interface TitleAvatarWrapperProps {
    children: React.ReactNode[]
}

export const TitleAvatarWrapper: React.FC<TitleAvatarWrapperProps> = ({ children }) => {
    return (
        <div style={{ justifyContent: 'space-between ', paddingInline: '30px' }} className={'flex items-center'}>
            {children}
        </div>
    )
}