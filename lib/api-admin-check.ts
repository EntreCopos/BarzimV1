import { currentRole } from './auth'

export const isAllowed = async (): Promise<boolean> => {
  const role = await currentRole()
  return role === 'ADMIN'
}
