import { faker } from '@faker-js/faker'

faker.seed(67890)

const queryNames = [
  'Expired Certificates',
  'Certificates Expiring in 30 Days',
  'Inactive Users',
  'SMTP Relay Health',
  'Secret Keys Near Expiration',
  'Expired SAS Tokens',
  'Service Accounts Review',
  'Security Groups Without Owner',
  'Patch Compliance',
  'Pending Impact Changes',
]

const applications = [
  'Atlas',
  'Atlas Mobile',
  'Nimbus',
  'Orion',
  'Vertex',
  
]

const categories = [
  'Certificates',
  'Identity',
  'SMTP',
  'Security',
  'Infrastructure',
  'Operations',
]


export const users = Array.from({ length: 20 }, () => {
  const status = faker.helpers.weightedArrayElement([
    { weight: 70, value: 'active' },
    { weight: 20, value: 'review' },
    { weight: 10, value: 'deprecated' },
  ])


  return {
    id: faker.string.uuid(),

    queryName: faker.helpers.arrayElement(queryNames),
    category: faker.helpers.arrayElement(categories),
    application: faker.helpers.arrayElement(applications),



    status,

    createdAt: faker.date.past(),

    updatedAt: faker.date.recent(),
  }
})