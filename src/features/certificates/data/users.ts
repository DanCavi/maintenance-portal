import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Inventory Portal',
  'Asset Tracker',
  'Operations Hub',
  'Maintenance Suite',
  'Workforce Manager',
  'Analytics Dashboard',
]

const servers = [
  'corp-prd-app01',
  'corp-prd-api01',
  'corp-qa-app01',
  'corp-dev-api01',
  'corp-tst-web01',
]

export const users = Array.from({ length: 500 }, () => {
  return {
    id: faker.string.uuid(),
    certificateName: `${faker.internet.domainWord()}.corp.com`,
    application: faker.helpers.arrayElement(applications),
    serverName: faker.helpers.arrayElement(servers),
    expiryDate: faker.date.future().toISOString().split('T')[0],
    status: faker.helpers.arrayElement([
      'active',
      'expiring',
      'expired',
      'renewed',
    ]),
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
      'development',
      'testing',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
