const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value);
};

export default formatValue;
