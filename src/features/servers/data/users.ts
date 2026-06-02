import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'Internal Driver Licence',
  'Estadístico Salud y Seguridad',
  'PMF',
  'Command Centre Santiago',
  'Command Centre SPENCE',
  'Command Centre ESCONDIDA',
  'Command Centre CERRO',
  'DLMS',
  'PDB',
  'SAR',
  'MPP',
  'SIH',
  'Power BI',
  'Barreras Mina',
  'FLY2WORK',
  'SSPT',
  'DBMS',
  'OQT',
  'RUNA',
  'RCAE',
]

const serverNames = [
  'ANF0PBAP02',
  'ANFESC-ORV03',
  'ANF0QBAP03',
  'ANFESC-ORA03QA',
  'ANFESC-SQL01QA',
  'SCL0QSP01S01\\SQL2017',
  'MUSW21EPSES001',
  'MUSW21EQSES001',
  'MUSW22EPSES002',
  'MUSW22EQSES002',
]

const databases = [
  'Oracle',
  'SQL Server',
  'PostgreSQL',
]

export const servers = Array.from({ length: 500 }, () => {
  return {
    id: faker.string.uuid(),
    application: faker.helpers.arrayElement(applications),
    serverName: faker.helpers.arrayElement(serverNames),
    database: faker.helpers.arrayElement(databases),
    status: faker.helpers.arrayElement([
      'healthy',
      'warning',
      'critical',
    ]),
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
