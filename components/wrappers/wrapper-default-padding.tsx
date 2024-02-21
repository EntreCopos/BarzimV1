export const WrapperDefaultPadding: React.FC<{
  children: React.ReactNode | React.ReactNode[]
}> = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingInline: '30px' }}>
      {children}
    </div>
  )
}

