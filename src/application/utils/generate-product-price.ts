export type GeneratePriceParams = {
  titleLength: number;
  descriptionLength: number;
}

export const generatePrice = ({ titleLength, descriptionLength }: GeneratePriceParams) =>
  Math.abs(10 + titleLength * ((500 - descriptionLength) / (3 - titleLength)));
