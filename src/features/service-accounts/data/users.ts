import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'PMF',
  'Command Centre Santiago',
  'Command Centre SPENCE',
  'Command Centre ESCONDIDA',
  'Command Centre CERRO',
  'DLMS',
  'SIH',
  'SAR',
]

const serviceAccounts = [
  'SA_PMF-PROD-01',
  'SA_PMF-QA-01',
  'SA_PMF_DEV',
  'SA_MON_NR_PMF',
  'SA_CCSCL-SQL-PROD-01',
  'SA_CCSPC-SQL-PROD-01',
  'SA_CCESC-SQL-PROD-01',
  'SA_DLMS-PROD',
]

const usedIn = [
  'Monitoreo New Relic',
  'SQL Server',
  'Application Pool',
  'Windows Service',
  'API Authentication',
  'Batch Process',
]

const actionReqs = ['CHG0351748', 'CHG0352874', 'RITM4166060', 'RITM4210045']

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

  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    serviceAccount: faker.helpers.arrayElement(serviceAccounts),
    usedIn: faker.helpers.arrayElement(usedIn),
    actionReq: faker.helpers.arrayElement(actionReqs),
    // database: faker.helpers.arrayElement(databases),
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
