import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = ['DLMS', 'SMTP Relay', 'PAE', 'IAG', 'HSS', 'Snow']

const servers = [
  'it-usw2-prd-dlms-portal-aas',
  'it-usw2-prd-dlms-api',
  'it-usw2-qa-dlms-portal',
  'smtp-relay-prod',
  'smtp-relay-qa',
]

export const users = Array.from({ length: 500 }, () => {
  return {
    id: faker.string.uuid(),
    certificateName: `${faker.internet.domainWord()}.bhp.com`,
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
