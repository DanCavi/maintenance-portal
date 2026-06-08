import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const storageNames = [
  'stgdev001',
  'stgqa001',
  'stgprd001',
]

const applications = [
  'Atlas',
  'Nimbus',
  'Orion',
]



const requests = [
  'REQ100001',
  'REQ100002',
  'REQ100003',
]

// const databases = ['Oracle', 'SQL Server', 'PostgreSQL']

export const servers = Array.from({ length: 5 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 80, value: 'healthy' },
    { weight: 15, value: 'warning' },
    { weight: 5, value: 'critical' },
  ])
  let expirationDate: Date
  switch (status) {
    case 'healthy':
      expirationDate = faker.date.future({ years: 2 })
      break

    case 'warning':
      expirationDate = faker.date.soon({ days: 60 })
      break

    case 'critical':
      expirationDate = faker.date.recent({ days: 30 })
      break
  }

  

  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    storageName: faker.helpers.arrayElement(storageNames),
    refReq: faker.helpers.arrayElement(requests),
    status,
    environment: faker.helpers.arrayElement(['development', 'qa', 'production']),
    endDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
