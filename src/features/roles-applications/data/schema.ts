import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('healthy'), 
  z.literal('warning'),
  z.literal('critical'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const userRoleSchema = z.union([
  z.literal('production'),
  z.literal('qa'),
])

const _userSchema = z.object({
  id: z.string(),
  application: z.string(),
  environment: userRoleSchema,
  roleName: z.string(),
  description: z.string(),
  source: z.string(),
  userGroup: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
