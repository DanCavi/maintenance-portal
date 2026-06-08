import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const services = [
  'Customer Portal',
  'Identity Service',
  'Reporting Hub',
  'Operations Dashboard',
  'Inventory API',
  'Billing Service',
]

const groups = [
  'Platform Team',
  'Infrastructure Team',
  'Operations Team',
  'Cloud Team',
  'Application Team',
]

const descriptions = [
  'Operating system upgrade',
  'Database maintenance',
  'Security patch deployment',
  'Infrastructure refresh',
  'Network configuration update',
  'Middleware upgrade',
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

// const databases = ['Oracle', 'SQL Server', 'PostgreSQL']

export const servers = Array.from({ length: 20 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 50, value: 'completed' },
    { weight: 25, value: 'planned' },
    { weight: 15, value: 'in_progress' },
    { weight: 10, value: 'cancelled' },
  ])

  const startDate = faker.date.soon({ days: 90 })
  const endDate = faker.date.soon({ days: 120, refDate: startDate })

  return {
    id: faker.string.uuid(),
    serviceImpacted: faker.helpers.arrayElement(services),

    changeId: `CHG${faker.number.int({
      min: 1000000,
      max: 9999999,
    })}`,

    startDate: startDate.toISOString().split('T')[0],

    endDate: endDate.toISOString().split('T')[0],

    assignedGroup: faker.helpers.arrayElement(groups),

    description: faker.helpers.arrayElement(descriptions),
    status,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
