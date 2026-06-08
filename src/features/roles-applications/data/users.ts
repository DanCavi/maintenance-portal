import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = ['Atlas', 'Nimbus', 'Orion']

const roleNames = [
  'APPA-USER',
  'APPA-SUPERVISOR',
  'APPA-ADMIN',
  'APPB-USER',
  'APPB-ADMIN',
  'APPC-USER',
  'APPC-ADMIN',
]

const descriptions = [
  'Standard Employee Access',
  'Supervisor Access',
  'Contractor Access',
  'Contract Administrator',
  'Business Owner',
  'Request Manager',
  'License Manager',
  'Control Manager',
  'Auditor',
  'System Administrator',
]

const sources = [
  'DEFAULT',
  'Identity Provider',
  'POSITION_SOURCE',
  'CONTRACT_SOURCE',
]

const userGroups = [
  'EMPLOYEE',
  'SUPERVISOR',
  'CONTRACTOR',
  'REQUEST_MANAGER',
  'LICENSE_MANAGER',
  'CONTROL_MANAGER',
  'AUDITOR',
  'FULL_ACCESS',
  'ADMIN',
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

  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    roleName: faker.helpers.arrayElement(roleNames),
    description: faker.helpers.arrayElement(descriptions),
    source: faker.helpers.arrayElement(sources),
    userGroup: faker.helpers.arrayElement(userGroups),
    // database: faker.helpers.arrayElement(databases),
    status,
    environment: faker.helpers.arrayElement(['production', 'qa']),
    expirationDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
