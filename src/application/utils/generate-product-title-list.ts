import { productVerbList } from 'data/product-verb-list';
import { productAdjectiveList } from 'data/product-adjective-list';

const availableAdjectives = [...productAdjectiveList];

export const generateProductTitleList = () => productVerbList.map((verb) => {
  const availableAdjectivesLength = availableAdjectives.length;
  const adjectiveRandomIndex = Math.floor(Math.random() * availableAdjectivesLength);
  const chosenAdjective = availableAdjectives[adjectiveRandomIndex];

  const title = `${verb} ${chosenAdjective}`;

  availableAdjectives.splice(adjectiveRandomIndex, 1);

  return title;
});
