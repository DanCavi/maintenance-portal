import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

const applications = [
  'DLMS',
  'PMF',
  'SAR',
]

const roleNames = [
  'AADP-DLMS-EMPLOYEE-PROD',
  'AADP-DLMS-EMPLOYEE-SUP-PROD',
  'AADP-DLMS-CONTRACTOR-PROD',
  'AADP-DLMS-CONTRACTOR-AC-PROD',
  'AADP-DLMS-EMPLOYEE-CO-PROD',
  'AADP-DLMS-SOL-MINA-MEL-PROD',
  'AADP-DLMS-SOL-MINA-SPC-PROD',
  'AADP-DLMS-INFRA-MEL-PROD',
  'AADP-DLMS-OWNER-MEL-PROD',
  'AADP-DLMS-ADMIN-MEL-PROD',
]

const descriptions = [
  'Empleado BHP Solicitante',
  'Supervisor Solicitante',
  'Contratista Solicitante',
  'Administrador de Contrato',
  'Contract Owner',
  'Gestor de Solicitud',
  'Gestor de Licencia',
  'Gestor de Infracciones',
  'Fiscalizador',
  'Administrador de Sistema',
]

const sources = [
  'DEFAULT',
  'Azure AD',
  'PERSONNEL.POSITION',
  'CONTRACT_DETAILS',
]

const userGroups = [
  'EMPLOYEE',
  'SUPERVISOR',
  'CONTRACTOR',
  'GESTOR_SOLICITUD',
  'GESTOR_LICENCIA',
  'GESTOR_INFRACCION',
  'FISCALIZADOR',
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
    environment: faker.helpers.arrayElement([
      'production',
      'qa',
    ]),
    expirationDate: expirationDate.toISOString().split('T')[0],
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
