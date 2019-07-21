import { PlusTwo } from '../common/models';

export const numbers = {
	random: () => Math.random(),
	plusTwo: ({ number }: PlusTwo): number => number + 2
};
