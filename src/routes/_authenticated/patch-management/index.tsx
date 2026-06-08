import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
// import { Certificates } from '@/features/certificates'
// import { Servers } from '@/features/servers'
import { roles } from '@/features/certificates/data/data'
// import { Smtp } from '@/features/smtp'
import { PatchManagement } from '@/features/patch-management'

const patchManagementSearchSchema = z.object({
  page: z.number().optional().catch(1),
  pageSize: z.number().optional().catch(10),
  // Facet filters
  status: z
    .array(
      z.union([
        z.literal('active'),
        z.literal('expiring'),
        z.literal('expired'),
        z.literal('renewed'),
      ])
    )
    .optional()
    .catch([]),
  environment: z
    .array(z.enum(roles.map((r) => r.value as (typeof roles)[number]['value'])))
    .optional()
    .catch([]),
  // Per-column text filter (example for appName)
  certificateName: z.string().optional().catch(''),
})

export const Route = createFileRoute('/_authenticated/patch-management/')({
  validateSearch: patchManagementSearchSchema,
  component: PatchManagement,
})
