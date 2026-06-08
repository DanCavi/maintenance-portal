import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Customer Portal',
  'Billing Service',
  'Inventory API',
  'Reporting Hub',
  'Operations Dashboard',
  'Identity Service',
]

const operations = [
  'Windows Security Patch',
  'Linux Kernel Update',
  'Database Patch',
  'Middleware Upgrade',
  'Application Patch',
]


const schedules = [
  'Monthly',
  'Quarterly',
  'Emergency',
]

// const serverIps = [
//   '10.120.45.12',
//   '10.120.45.13',
//   '10.120.46.20',
//   '10.120.46.21',
//   '10.121.10.15',
//   '10.121.10.16',
//   '10.122.30.5',
// ]

const supportTeams = [
  'Platform Team',
  'Application Team',
  'Infrastructure Team',
  'Operations Team',
]

// const databases = ['Oracle', 'SQL Server', 'PostgreSQL']

export const servers = Array.from({ length: 20 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 65, value: 'completed' },
    { weight: 20, value: 'scheduled' },
    { weight: 10, value: 'in_progress' },
    { weight: 5, value: 'failed' },
  ])



  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    operation: faker.helpers.arrayElement(operations),
    // database: faker.helpers.arrayElement(databases),
    schedule: faker.helpers.arrayElement(schedules),
    status,
    supportTeam: faker.helpers.arrayElement(supportTeams),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
