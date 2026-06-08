import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('scheduled'), 
  z.literal('in_progress'),
  z.literal('completed'),
  z.literal('failed'),
])
export type UserStatus = z.infer<typeof userStatusSchema>




const _userSchema = z.object({
  id: z.string(),
  application: z.string(),
  operation: z.string(),
  schedule: z.string(),
  supportTeam: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
