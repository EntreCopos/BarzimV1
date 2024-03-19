export const AuthFormsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="overflow-y-auto">
      <div className="grid w-full grid-cols-[1fr_1fr] items-center gap-6">
        {children}
      </div>
    </div>
  )
}
