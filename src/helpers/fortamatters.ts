import { IFatura } from '../dtos/faturas';

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

function sumNumbers(...numbers: string[]) {
  const sum = numbers
    .map((value) => parseFloat(value))
    .reduce((acc, num) => acc + num, 0)
    .toFixed(2);
  return Math.abs(Number(sum));
}
export function aggregateFaturaValues(fatura: IFatura) {
  const consumo = sumNumbers(
    fatura.energiaEletricaQuantidade,
    fatura.energiaSCEEQuantidade
  );
  const compensada = sumNumbers(fatura.energiaCompensadaQuantidade || '0');
  const custoTotal = sumNumbers(
    fatura.energiaEletricaValorTotal,
    fatura.energiaSCEEValorTotal,
    `${fatura.contribuicaoIlumicaoPublica}`
  );
  const economia = sumNumbers(fatura.energiaCompensadaValorTotal || '0');

  return { consumo, compensada, custoTotal, economia };
}
