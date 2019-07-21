import express from 'express';
import graphqlHTTP from 'express-graphql';

import { hello } from './hello/helloService';
import { numberPlusTwo, randomNumber } from './numbers/numbersService';
import { catById, catsByLegs } from './cats/catsService';

import { schema } from './common/schema';

const root = {
	hello,
	catById,
	catsByLegs,
	randomNumber,
	numberPlusTwo
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
