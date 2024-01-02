import { Chart } from 'react-google-charts';
import { IFatura } from '../../../dtos/faturas';
import {
  aggregateFaturaValues,
  formatDate,
} from '../../../helpers/fortamatters';

export function BarChart({ fatura }: { fatura: IFatura }) {
  const valores = aggregateFaturaValues(fatura);
  console.log(valores);
  const data = [
    ['Mês', 'Consumido', 'Gerado'],
    [formatDate(fatura.faturaReferenteA), valores.consumo, valores.compensada],
  ];

  const options = {
    chart: {
      title: 'Energia Elétrica',
      subtitle: 'Consumido e Gerado',
    },
    colors: ['#9f4717', '#023b21'],
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
