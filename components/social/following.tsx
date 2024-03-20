import { UserListDrawer } from './userlist-drawer'

export const Following: React.FC<{
  following: any[]
}> = ({ following }) => {
  return (
    <UserListDrawer title="Seguindo" list={following}>
      <div className="col-span-1 rounded-md bg-slate-barzim p-1 text-center text-marfim-barzim">
        <span>{following.length}</span>
        <h2 className="text-xs lowercase">seguindo</h2>
      </div>
    </UserListDrawer>
  )
}
