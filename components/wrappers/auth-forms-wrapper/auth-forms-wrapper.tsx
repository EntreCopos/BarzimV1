export const AuthFormsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="overflow-y-auto">
      <div className="grid w-full items-center gap-6 px-2 md:grid-cols-[1fr_1fr]">
        {children}
      </div>
    </div>
  )
}
