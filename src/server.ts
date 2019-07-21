import express from 'express';
import graphqlHTTP from 'express-graphql';

import { hello } from './hello/helloService';
import { numbers, PlusTwo } from './numbers/numbersService';

import { schema } from './common/schema';

// The root provides a resolver function for each API endpoint
const root = {
	hello,
	random: numbers.random,
	plusTwo: (number: PlusTwo) => numbers.plusTwo(number)
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
