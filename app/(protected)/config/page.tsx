import { auth, signOut } from '@/auth'
import { AccountSettingsForm } from '@/components/forms/account-configs-form'
import { safeGetUserById } from '@/data/user'
import { HeaderConfigsWrapper } from '@/components/wrappers/header-configs/header-configs-wrapper'

const UserConfigs = async () => {
  const session = await auth()
  const userId = session?.user.id
  const user = await safeGetUserById(userId as string)

  if (user) {
    return (
      <div className="min-h-screen p-6">
        <HeaderConfigsWrapper user={user} />
        <AccountSettingsForm user={user} />
      </div>
    )
  }
}

export default UserConfigs
