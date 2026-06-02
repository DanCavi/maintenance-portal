import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'SAR',
  'SAR API',
  'SAR EXTERNAL PROXY API',
  'DLMS',
  'PMF',
  'PMF API',
  'DBMS - SPC',
  'F2W',
  'SIH',
]
const servers = ['AZURE', 'SCL0EPSAR01', 'GSIH', 'it-fna-usw2-prd-growth']

const displayNames = [
  'Site Access Request - Prod',
  'SAR API - Prod',
  'SAR API - Test',
  'SAR External Proxy API',
  'Driver License Management System (DLMS) - Prod',
  'Driver License Management System (DLMS) - Test',
  'PMF - Prod (People Maintainer Forms)',
  'PMF API - Prod',
  'Fly2Work-P',
  'Fly2Work QA-NP',
  'azure-accesscontrol-prd-sp',
  'azure-accesscontrol-npe-sp',
]

const owners = [
  'Rayzza Santos',
  'Amrut Ijeri',
  'Juan Rojas',
  'Christian Gonzalez',
  'Jay Ritesh',
  'Edgar Cortez',
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
