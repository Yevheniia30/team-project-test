import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartTest = () => {
  const [chartData, setChartData] = useState({});
  //   const [actually, setActually] = useState({});

  const chart = () => {
    setChartData({
      labels: ['22 Jul', '23 Jul', '24 Jul', '25 Jul', '26 Jul', '27 Jul'],
      datasets: [
        {
          data: [0, 0],
        },
        {
          data: [0, 1],
        },
        {
          data: [1, 0],
          showLine: true, // overrides the `line` dataset default
        },
        {
          type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
          data: [1, 1],
        },
      ],
    });
  };

  //   const actuallyData = () => {
  //     setActually({
  //       labels: ['22 Jul', '23 Jul', '24 Jul', '25 Jul', '26 Jul', '27 Jul'],
  //       datasets: [
  //         {
  //           label:
  //             'Актуальные оставшиеся трудозатраты в часах Запланированные оставшиеся трудозатраты',
  //           // запланированные часы
  //           datadata: [55, 41, 28, 22, 6],

  //           fill: false,
  //           backgroundColor: 'rgb(255, 99, 132)',
  //           borderColor: 'rgba(255, 99, 132, 0.2)',
  //         },
  //       ],
  //     });
  //   };

  useEffect(() => {
    chart();
  }, []);

  //   useEffect(() => {
  //     actuallyData();
  //   }, []);

  return (
    <div style={{ width: '1000px', height: '400px', padding: '20px' }}>
      <h1>BurnDown Chart (Calendar Team)</h1>

      <Line
        data={chartData}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default ChartTest;
