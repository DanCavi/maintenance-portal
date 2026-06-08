import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('expiring'),
  z.literal('expired'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const _userSchema = z.object({
  id: z.string(),
  userName: z.string(),
  application: z.string(),
  environment: z.string(),
  displayName: z.string(),
  expirationDate: z.string(),
  updatedBy: z.string(),
  observation: z.string(),
  frequency: z.string(),
  requestId: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
