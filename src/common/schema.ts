import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String,
    randomNumber: Float!,
    numberPlusTwo(number: Int): Int,
    catById(id: Int): Cat,
    catsByLegs(legs: Int): [Cat],
  }

  type Cat {
    id: Int!,
    name: String!,
    legs: Int!,
  }
`);
