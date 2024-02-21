import { auth } from "@/auth"
import { AccountSettingsForm } from "@/components/forms/account-configs-form"
import { getUserById } from "@/data/user"

const UserConfigs = async () => {
    const session = await auth()
    const userId = session?.user.id
    const user = await getUserById(userId)

    return (
        <div className="px-6">
            <AccountSettingsForm user={user} />
        </div>
    )
}

export default UserConfigs