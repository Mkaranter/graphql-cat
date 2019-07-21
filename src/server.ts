import express from 'express';
import graphqlHTTP from 'express-graphql';

import { hello } from './hello/helloService';
import { numbers } from './numbers/numbersService';
import { getCat } from './cats/catsService';

import { schema } from './common/schema';
import { Cat, PlusTwo } from './common/models';

// The root provides a resolver function for each API endpoint
const root = {
	hello,
	cat: (id: Cat) => getCat(id),
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
