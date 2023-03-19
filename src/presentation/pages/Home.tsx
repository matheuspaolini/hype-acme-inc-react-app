import { useCallback, useRef } from 'react';

import { HomeWelcome } from 'presentation/features/HomeWelcome';
import { HomeProductList } from 'presentation/features/HomeProductList';

export function HomePage() {
  const productListRef = useRef(null as HTMLDivElement | null);

  const handleScrollToProductList = useCallback(() => {
    const productListElement = productListRef.current;

    if (!productListElement) return;

    productListElement.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main>
      <HomeWelcome productListScrollTrigger={handleScrollToProductList} />
      <HomeProductList ref={productListRef} />
    </main>
  );
}
