import { AccountSettingsForm } from "@/components/forms/account-configs-form"
import { type User } from "@/data/data"
import { getUserByUsername } from "@/data/user"

const UserConfigs = async ({
    params,
}: {
    params: { username: string }
}) => {
    const user = await getUserByUsername(params.username)

    return (
        <div className="px-6">
            <AccountSettingsForm user={user} />
        </div>
    )

}

export default UserConfigs