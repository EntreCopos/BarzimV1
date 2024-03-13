import { Knock } from '@knocklabs/node'

export const notifications = new Knock(process.env.KNOCK_API_SECRET)
