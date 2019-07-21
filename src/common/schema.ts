import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
    random: Float!
	plusTwo(number: Int): Int
  }
`);
