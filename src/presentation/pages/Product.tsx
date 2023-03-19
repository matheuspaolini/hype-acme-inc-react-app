import { Box } from 'presentation/components/Box';
import { Navigator } from 'presentation/components/Navigator';
import { Spacer } from 'presentation/components/Spacer';
import { ProductInformation } from 'presentation/features/ProductInformation';

export function ProductPage() {
  return (
    <main>
      <Spacer yAxis={40} />

      <Navigator
        pageTitle="Produto"
        rootCss={{
          width: '100%',
          maxWidth: 1080,
          margin: '0 auto',
          paddingLeft: 24,
        }}
      />

      <ProductInformation />
    </main>
  );
}
