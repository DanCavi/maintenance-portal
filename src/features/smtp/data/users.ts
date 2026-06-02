import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'SAR 01',
  'SAR 02',
  'CC Santiago',
  'CC Spence',
  'CC Escondida',
  'CC Cerro',
  'PMF',
]

const serverNames = [
  'scl0epsar02',
  'scl0epsar01',
  'SCL0EPCCA01',
  'SPC0EPCCA01',
  'ESC0PCCA01',
  'SCL0EPCCA02',
  'MUSW21EPMPP001',
]

const serverIps = [
  '10.120.45.12',
  '10.120.45.13',
  '10.120.46.20',
  '10.120.46.21',
  '10.121.10.15',
  '10.121.10.16',
  '10.122.30.5',
]

// const databases = ['Oracle', 'SQL Server', 'PostgreSQL']

export const servers = Array.from({ length: 500 }, () => {
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

  const index = faker.number.int({
    min: 0,
    max: serverNames.length - 1,
  })

  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    serverName: serverNames[index],
    // database: faker.helpers.arrayElement(databases),
    serverIp: serverIps[index],
    status,
    environment: faker.helpers.arrayElement(['production', 'qa']),
    expirationDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
