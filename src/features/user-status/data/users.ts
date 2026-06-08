import { faker } from '@faker-js/faker'

faker.seed(67890)

const applications = [
  'Customer Portal',
  'Identity Service',
  'Reporting Hub',
  'Inventory API',
  'Operations Dashboard',
]

const environments = [
  'production',
  'qa',
]

const frequencies = [
  'Monthly',
  'Quarterly',
  'Yearly',
]

const observations = [
  'No issues reported',
  'Pending review',
  'Access validation required',
  'Awaiting approval',
]

const updaters = [
  'System Administrator',
  'Platform Team',
  'Operations Team',
  'Application Owner',
]

export const users = Array.from({ length: 20 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 70, value: 'active' },
    { weight: 20, value: 'expiring' },
    { weight: 10, value: 'expired' },
  ])

  let expirationDate: Date

  switch (status) {
    case 'active':
      expirationDate = faker.date.future({ years: 2 })
      break

    case 'expiring':
      expirationDate = faker.date.soon({ days: 60 })
      break

    case 'expired':
      expirationDate = faker.date.recent({ days: 30 })
      break
  }

  return {
    id: faker.string.uuid(),

    userName: faker.internet.username(),

    displayName: faker.person.fullName(),

    application: faker.helpers.arrayElement(applications),

    environment: faker.helpers.arrayElement(environments),

    expirationDate: expirationDate.toISOString().split('T')[0],

    updatedBy: faker.helpers.arrayElement(updaters),

    observation: faker.helpers.arrayElement(observations),

    frequency: faker.helpers.arrayElement(frequencies),

    requestId: `RITM${faker.number.int({
      min: 1000000,
      max: 9999999,
    })}`,

    status,

    createdAt: faker.date.past(),

    updatedAt: faker.date.recent(),
  }
})