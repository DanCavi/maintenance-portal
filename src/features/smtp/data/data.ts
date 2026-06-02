import { ShieldCheck, FlaskConical, Server, TestTube } from 'lucide-react'
import { type UserStatus } from './schema'

export const callTypes = new Map<UserStatus, string>([
   [
    'healthy',
    'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200',
  ],
  [
    'warning',
    'bg-yellow-100/40 text-yellow-900 dark:text-yellow-200 border-yellow-300',
  ],
  [
    'critical',
    'bg-destructive/10 dark:bg-destructive/50 text-destructive border-destructive/20',
  ],
])

export const roles = [
  {
    label: 'Production',
    value: 'production',
    icon: ShieldCheck,
  },
  {
    label: 'Quality Assurance',
    value: 'qa',
    icon: FlaskConical,
  },
  {
    label: 'Development',
    value: 'development',
    icon: Server,
  },
  {
    label: 'Testing',
    value: 'testing',
    icon: TestTube,
  },
] as const
