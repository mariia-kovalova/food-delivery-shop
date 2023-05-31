import { numberWithSpaces } from './formatNumbers';

export const getPrice = num => `$${numberWithSpaces(num)}.00`;
