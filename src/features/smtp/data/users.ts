import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Atlas Notifications',
  'Nimbus Alerts',
  'Orion Reports',
  'Vertex Workflow',
  'Horizon Portal',
  'Operations Hub',
  'Analytics Platform',
]

const serverNames = [
  'smtp-prd-01',
  'smtp-prd-02',
  'smtp-qa-01',
  'smtp-dev-01',
  'mail-relay-01',
  'mail-relay-02',
  'email-gateway-01',
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
    serverIp: faker.helpers.arrayElement([
      `192.0.2.${faker.number.int({ min: 10, max: 254 })}`,
      `198.51.100.${faker.number.int({ min: 10, max: 254 })}`,
      `203.0.113.${faker.number.int({ min: 10, max: 254 })}`,
    ]),
    status,
    environment: faker.helpers.arrayElement(['production', 'qa']),
    expirationDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
