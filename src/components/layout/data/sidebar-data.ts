import {
  Construction,
  LayoutDashboard,
  FileX,
  HelpCircle,
  Lock,
  Package,
  ServerOff,
  Wrench,
  UserCog,
  Users,
  MessagesSquare,
  ShieldCheck,
  Command,
  Key,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Maintenance Portal',
      logo: Command,
      plan: 'Enterprise',
    },
  ],
  navGroups: [
    {
      title: 'Overview',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
      ],
    },

    {
      title: 'Infrastructure',
      items: [
        {
          title: 'Servers & Databases',
          url: '/servers',
          icon: ServerOff,
        },
        {
          title: 'SMTP Relay',
          url: '/smtp',
          icon: MessagesSquare,
        },
      ],
    },

    {
      title: 'Security',
      items: [
        {
          title: 'Certificates',
          url: '/certificates',
          icon: ShieldCheck,
        },
        {
          title: 'Secret Keys',
          url: '/secret-keys',
          icon: Key,
        },
        {
          title: 'SAS Tokens',
          url: '/sas-tokens',
          icon: Lock,
        },
      ],
    },

    {
      title: 'Identity & Access',
      items: [
        {
          title: 'User Status',
          url: '/user-status',
          icon: Users,
        },
        {
          title: 'Service Accounts',
          url: '/service-accounts',
          icon: UserCog,
        },
        {
          title: 'Security Groups',
          url: '/security-groups',
          icon: ShieldCheck,
        },
        {
          title: 'Roles & Applications',
          url: '/roles-applications',
          icon: Package,
        },
      ],
    },

    {
      title: 'Operations',
      items: [
        {
          title: 'Patch Management',
          url: '/patch-management',
          icon: Wrench,
        },
        {
          title: 'Impact Changes',
          url: '/impact-changes',
          icon: Construction,
        },
        {
          title: 'Queries',
          url: '/queries',
          icon: HelpCircle,
        },
      ],
    },

    {
      title: 'Reports',
      items: [
        {
          title: 'Compliance',
          url: '/compliance',
          icon: FileX,
        },
      ],
    },
  ],
}
