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
      <div className={`bg-no-repeat bg-cover min-h-screen ${mobileBackground} ${desktopBackground}`}>
        {children}
      </div>
    );
  };
  