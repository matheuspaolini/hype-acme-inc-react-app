import { generatePrice } from 'application/utils/generate-product-price';
import { generateProductImageUrl } from 'application/utils/generate-product-image-url';
import { generateProductDescription } from 'application/utils/generate-product-description';
import { generateProductTitleLength } from 'application/utils/generate-product-title-length';

export const generateProduct = (title: string) => {
  const id = title + Math.random() * 100000;

  const image = generateProductImageUrl({ seed: title, resolution: 320 });

  const description = generateProductDescription();
  const titleLength = generateProductTitleLength(title);
  const descriptionLength = description.length;
  const price = generatePrice({ titleLength, descriptionLength });

  const newProduct = { id, title, description, image, price };

  return newProduct;
}
