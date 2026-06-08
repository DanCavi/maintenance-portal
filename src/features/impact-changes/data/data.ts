import { CheckCircle2, Wrench, Calendar } from 'lucide-react'
import { type UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
  ['planned', 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300'],
  [
    'in_progress',
    'bg-yellow-100/40 text-yellow-900 dark:text-yellow-200 border-yellow-300',
  ],
  [
    'completed',
    'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200',
  ],
  [
    'cancelled',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive border-destructive/20',
  ],
])

export const roles = [
  {
    label: 'Monthly',
    value: 'monthly',
    icon: Calendar,
  },
  {
    label: 'Quarterly',
    value: 'quarterly',
    icon: Calendar,
  },
  {
    label: 'Platform Team',
    value: 'platform',
    icon: Wrench,
  },
  {
    label: 'Application Team',
    value: 'application',
    icon: CheckCircle2,
  },
] as const
