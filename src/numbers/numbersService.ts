export interface PlusTwo {
	number: number;
}

export const numbers = {
	random: () => Math.random(),
	plusTwo: ({ number }: PlusTwo): number => number + 2
};
