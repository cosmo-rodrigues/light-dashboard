export function formatDate(date: string) {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(newDate);
}

export function formatPrice(value: string) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
}
