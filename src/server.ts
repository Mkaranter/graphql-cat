import express from 'express';
import graphqlHTTP from 'express-graphql';

import { hello } from './hello/helloService';
import { numberPlusTwo, randomNumber } from './numbers/numbersService';
import { catById, catsByLegs } from './cats/catsService';

import { schema } from './common/schema';

const PORT = process.env.PORT || 4000;

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

app.listen(PORT, () => `Running a GraphQL API at port ${PORT}`);
