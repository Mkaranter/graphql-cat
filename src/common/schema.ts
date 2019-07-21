import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    hello: String
    random: Float!
    plusTwo(number: Int): Int,
    cat(id: Int): Cat
  }

  type Cat {
    id: Int
    name: String
  }
`);
