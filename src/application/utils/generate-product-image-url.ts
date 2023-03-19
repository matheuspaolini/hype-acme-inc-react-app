export type GenerateProductImageFn = {
  seed: string;
  resolution: number;
}

const baseUrl = 'https://picsum.photos/seed';

export const generateProductImageUrl = ({ seed, resolution }: GenerateProductImageFn) =>
  `${baseUrl}/${seed}/${resolution}`;
