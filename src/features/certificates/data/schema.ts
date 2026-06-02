import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('expiring'),
  z.literal('expired'),
  z.literal('renewed'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userRoleSchema = z.union([
  z.literal('production'),
  z.literal('qa'),
  z.literal('development'),
  z.literal('testing'),
])

const _userSchema = z.object({
  id: z.string(),
  certificateName: z.string(),
  application: z.string(),
  serverName: z.string(),
  expiryDate: z.string(),
  status: userStatusSchema,
  environment: userRoleSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
