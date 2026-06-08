import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Atlas',
  'Nimbus',
  'Orion',
  'Vertex',
  'Horizon',
  'Operations Hub',
  'Analytics Portal',
  'Asset Tracker',
  'Inventory Manager',
  'Workforce Suite',
  'Customer Gateway',
  'Data Warehouse',
  'Reporting Hub',
  'Insights Platform',
  'Service Portal',
  'Monitoring Center',
  'Identity Manager',
  'Compliance Tracker',
  'Workflow Engine',
  'Integration Hub',
]

const serverNames = [
  'corp-prd-app01',
  'corp-prd-app02',
  'corp-prd-db01',
  'corp-prd-db02',
  'corp-qa-app01',
  'corp-qa-db01',
  'corp-dev-app01',
  'corp-dev-db01',
  'corp-tst-app01',
  'corp-tst-db01',
]

const databases = [
  'Oracle',
  'SQL Server',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
]

export const servers = Array.from({ length: 500 }, () => {
  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    serverName: faker.helpers.arrayElement(serverNames),
    database: faker.helpers.arrayElement(databases),
    status: faker.helpers.arrayElement([
      'healthy',
      'warning',
      'critical',
    ]),
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
