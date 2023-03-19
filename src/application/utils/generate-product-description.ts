import { productRandomDescription } from 'data/product-random-description';

const minLength = 20;
const maxLength = 500;

const getLength = () => Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

export const generateProductDescription = () =>
  productRandomDescription.substring(0, getLength());
