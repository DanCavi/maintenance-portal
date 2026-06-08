import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('planned'),
  z.literal('in_progress'),
  z.literal('completed'),
  z.literal('cancelled'),
])
export type UserStatus = z.infer<typeof userStatusSchema>

const _userSchema = z.object({
  id: z.string(),
  serviceImpacted: z.string(),
  changeId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  assignedGroup: z.string(),
  description: z.string(),
  status: userStatusSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof _userSchema>
