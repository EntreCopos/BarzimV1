export const TitleAvatarWrapper: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <div
      //   style={{ justifyContent: 'space-between ', paddingInline: '30px' }}
      className="flex items-center justify-between px-8"
    >
      {children}
    </div>
  )
}
