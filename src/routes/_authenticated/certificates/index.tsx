import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { Certificates } from '@/features/certificates'
import { roles } from '@/features/certificates/data/data'

const usersSearchSchema = z.object({
  page: z.number().optional().catch(1),
  pageSize: z.number().optional().catch(10),
  // Facet filters
  status: z
    .array(
      z.union([
        z.literal('active'),
        z.literal('inactive'),
        z.literal('invited'),
        z.literal('suspended'),
      ])
    )
    .optional()
    .catch([]),
  role: z
    .array(z.enum(roles.map((r) => r.value as (typeof roles)[number]['value'])))
    .optional()
    .catch([]),
  // Per-column text filter (example for appName)
  appName: z.string().optional().catch(''),
})

export const Route = createFileRoute('/_authenticated/certificates/')({
  validateSearch: usersSearchSchema,
  component: Certificates,
})
