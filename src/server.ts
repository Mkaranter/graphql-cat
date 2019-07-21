import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import { PlusTwo } from './common/models';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
	random: Float!
	plusTwo(number: Int): Int
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
	hello: () => 'Hello world!',
	random: () => Math.random(),
	plusTwo: ({ number }: PlusTwo) => number + 2
};

const app = express();
app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true
	})
);
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
