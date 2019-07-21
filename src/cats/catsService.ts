import * as data from './mocks/data.json';
import { Cat } from '../common/models';

export const getCat = ({ id }: Cat) => data.cats.find(cat => cat.id === id);
