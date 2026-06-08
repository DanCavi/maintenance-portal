import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('review'),
  z.literal('deprecated'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const _userSchema = z.object({
  id: z.string(),
  queryName: z.string(),

  category: z.string(),

  application: z.string(),

  // frequency: z.string(),

  // updatedBy: z.string(),

  // observation: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
