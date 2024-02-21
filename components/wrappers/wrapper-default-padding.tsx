export const WrapperDefaultPadding: React.FC<{
  children: React.ReactNode | React.ReactNode[]
  style?: {}
}> = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingInline: '30px',
      }}
    >
      {children}
    </div>
  )
}
