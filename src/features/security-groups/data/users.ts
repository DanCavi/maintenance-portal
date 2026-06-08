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
  'Asset Tracker',
  'Analytics Portal',
]

const serviceAccounts = [
  'SA_ATLAS_PROD_01',
  'SA_ATLAS_QA_01',
  'SA_NIMBUS_PROD_01',
  'SA_NIMBUS_QA_01',
  'SA_ORION_BATCH_01',
  'SA_VERTEX_API_01',
  'SA_HORIZON_APP_01',
  'SA_MONITORING_01',
]

const usedIn = [
  'Monitoring',
  'Database Access',
  'Application Pool',
  'Windows Service',
  'API Authentication',
  'Batch Processing',
  'Scheduled Jobs',
  'Background Worker',
]

// const actionReqs = ['CHG100001', 'CHG100002', 'REQ100001', 'REQ100002']
// const databases = ['Oracle', 'SQL Server', 'PostgreSQL']

export const servers = Array.from({ length: 0 }, () => {
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
    serviceAccount: faker.helpers.arrayElement(serviceAccounts),
    usedIn: faker.helpers.arrayElement(usedIn),
    actionReq: faker.helpers.arrayElement([
      `CHG${faker.number.int({ min: 100000, max: 999999 })}`,
      `REQ${faker.number.int({ min: 100000, max: 999999 })}`,
    ]), // database: faker.helpers.arrayElement(databases),
    status,
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
      'development',
      'testing',
    ]),
    expirationDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
