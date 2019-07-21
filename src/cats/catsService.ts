import * as data from './mocks/data.json';
import { Cat } from '../common/models';

export const catById = ({ id }: Cat) => data.cats.find(cat => cat.id === id);

export const catsByLegs = ({ legs }: Cat) =>
	data.cats.filter(cat => cat.legs === legs);
