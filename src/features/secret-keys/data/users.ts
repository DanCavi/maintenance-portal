import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Atlas',
  'Atlas API',
  'Atlas Gateway',
  'Nimbus',
  'Nimbus API',
  'Orion',
  'Orion Analytics',
  'Vertex',
  'Horizon',
]

const servers = [
  'AZURE',
  'corp-prd-app01',
  'corp-qa-app01',
  'corp-prd-api01',
]

const displayNames = [
  'Atlas - Production',
  'Atlas API - Production',
  'Atlas API - QA',
  'Atlas Gateway',
  'Nimbus - Production',
  'Nimbus - QA',
  'Nimbus API - Production',
  'Orion Analytics - Production',
  'Vertex Platform',
  'Vertex QA',
  'identity-access-prod-sp',
  'identity-access-qa-sp',
]

const owners = [
  'Alex Carter',
  'Jordan Miller',
  'Taylor Morgan',
  'Casey Parker',
  'Jamie Cooper',
  'Riley Bennett',
]

export const users = Array.from({ length: 500 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 75, value: 'healthy' },
    { weight: 20, value: 'warning' },
    { weight: 5, value: 'critical' },
  ])

  let expirationDate: Date

  switch (status) {
    case 'healthy':
      expirationDate = faker.date.future({ years: 2 })
      break

    case 'warning':
      expirationDate = faker.date.soon({ days: 90 })
      break

    case 'critical':
      expirationDate = faker.date.recent({ days: 30 })
      break
  }
  return {
    id: faker.string.uuid(),
    displayName: faker.helpers.arrayElement(displayNames),
    application: faker.helpers.arrayElement(applications),
    serverName: faker.helpers.arrayElement(servers),
    expirationDate: expirationDate.toISOString().split('T')[0],
    status,
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
    ]),
    updatedBy: faker.helpers.arrayElement(owners),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
