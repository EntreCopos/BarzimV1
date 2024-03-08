import { auth, signOut } from '@/auth'
import { AccountSettingsForm } from '@/components/forms/account-configs-form'
import { safeGetUserById } from '@/data/user'

import { HeaderConfigsWrapper } from '@/components/wrappers/header-configs/header-configs-wrapper'
import { Button } from '@/components/ui/button'

const UserConfigs = async () => {
  const session = await auth()
  const userId = session?.user.id
  const user = await safeGetUserById(userId as string)

  if (user) {
    return (
      <div style={{ padding: '2rem' }}>
        <HeaderConfigsWrapper user={user} />
        <AccountSettingsForm user={user} />
        <div className="mt-4 flex w-full items-center justify-between gap-4 px-6 text-marfim-barzim ">
          <h2>Deseja sair do Barzim?</h2>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button className="w-full" variant="destructive" type="submit">
              Sair
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default UserConfigs
