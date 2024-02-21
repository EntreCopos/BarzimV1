import { auth } from "@/auth"
import { AccountSettingsForm } from "@/components/forms/account-configs-form"
import { getUserById } from "@/data/user"

import { HeaderConfigsWrapper } from "@/components/wrappers/header-configs/header-configs-wrapper"

const UserConfigs = async () => {
    const session = await auth()
    const userId = session?.user.id
    const user = await getUserById(userId)

    return (
        <div style={{ padding: '2rem' }}>
            <HeaderConfigsWrapper user={user} />
            <div>
                <AccountSettingsForm user={user} />
            </div>
        </div>
    )
}

export default UserConfigs