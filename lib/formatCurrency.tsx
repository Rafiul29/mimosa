export const formatCurrency = (price: number) => {
  if (!price) return;

  return price.toLocaleString('en-us', {
    style: 'currency',
    currency: 'USD',
  });
};
