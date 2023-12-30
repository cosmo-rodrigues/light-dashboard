import { Chart } from 'react-google-charts';

const data = [
  ['Year', 'Consumido', 'Gerado', 'Outros'],
  ['2014', 1000, 400, 200],
  ['2015', 1170, 460, 250],
  ['2016', 660, 1120, 300],
  ['2017', 1030, 540, 350],
];

const options = {
  chart: {
    title: 'Company Performance',
    subtitle: 'Consumido, Gerado e Outros: 2014-2017',
  },
  colors: ['#9f4717', '#023b21', '#facd05'],
};

export function BarChart() {
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
