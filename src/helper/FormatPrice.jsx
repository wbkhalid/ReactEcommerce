const FormatPrice = ({ price }) => {
  return Intl.NumberFormat('ur-PK', {
    style: 'currency',
    currency: 'PKR',
  }).format(price / 100);
};

export default FormatPrice;
