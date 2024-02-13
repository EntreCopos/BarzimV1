interface BackgroundProps {
    children: React.ReactNode
    mobileBackground: string
    desktopBackground: string
}

export const Background: React.FC<BackgroundProps> = ({
    children,
    mobileBackground,
    desktopBackground,
}) => {
    return (
        <div className={`bg-no-repeat bg-cover h-svh w-svw ${mobileBackground} ${desktopBackground}`}>
            {children}
        </div>
    )
}