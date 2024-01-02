import { Chart } from 'react-google-charts';
import { IFatura } from '../../../dtos/faturas';
import { aggregateFaturaValues } from '../../../helpers/fortamatters';

const options = {
  title: 'Energia Elétrica R$',
  pieHole: 0.3,
  is3D: true,
  colors: ['#9f4717', '#023b21'],
};

export function DonutChart({ fatura }: { fatura: IFatura }) {
  const valores = aggregateFaturaValues(fatura);

  const data = [
    ['Tipo', 'valores R$'],
    ['Custo Total', valores.custoTotal],
    ['Economia', valores.economia],
  ];

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
      style={{
        padding: 0,
        margin: 0,
      }}
    />
  );
}
