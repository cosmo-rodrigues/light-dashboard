import { Chart } from 'react-google-charts';

const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7], // CSS-style declaration
];

const options = {
  title: 'My Daily Activities',
  pieHole: 0.4,
  is3D: false,
};

export function DonutChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
      style={{
        padding: 0,
      }}
    />
  );
}
