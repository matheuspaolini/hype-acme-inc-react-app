export const openInNewTab = (href: string) => {
  const anchorElement = document.createElement('a', {});
  const anchorElementOptions = { target: '_blank', rel: 'noopener noreferrer', href };

  Object
    .assign(anchorElement, anchorElementOptions)
    .click();
}
