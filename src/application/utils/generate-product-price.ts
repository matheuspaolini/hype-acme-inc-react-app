export type GeneratePriceParams = {
  titleLength: number;
  descriptionLength: number;
}

export const generatePrice = ({ titleLength, descriptionLength }: GeneratePriceParams) => {
  const price = Math.abs(10 + titleLength * ((500 - descriptionLength) / (3 - titleLength)));

  if ([Infinity, 0].includes(price))
    return Math.abs(10 + titleLength * ((800 - descriptionLength) / (6 - titleLength)));

  return price;
}

