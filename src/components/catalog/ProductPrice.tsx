export const ProductPrice = ({ product, className }) => {
  const { price } = product;

  return (
    <div className={className}>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price)}
    </div>
  );
};
