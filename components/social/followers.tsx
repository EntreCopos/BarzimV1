import { UserListDrawer } from './userlist-drawer'

export const Followers: React.FC<{
  followers: any[]
}> = ({ followers }) => {
  return (
    <UserListDrawer title="Seguidores" list={followers}>
      <div className="col-span-1 rounded-md bg-slate-barzim p-1 text-center text-marfim-barzim">
        <span>{followers.length}</span>
        <h2 className="text-xs lowercase">seguidores</h2>
      </div>
    </UserListDrawer>
  )
}
