// import s from './Chart.module.scss';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  //   const [actually, setActually] = useState({});

  function datesRange() {
    let startDate = new Date(2021, 7, 22);
    let endDate = new Date(2021, 8, 7);
    let dates = [];
    while (startDate <= endDate) {
      dates.push(startDate.toISOString().substr(0, 10));
      startDate = new Date(
        // Date.UTC(
        startDate.getUTCFullYear(),
        startDate.getUTCMonth(),
        startDate.getUTCDay(),
      );
      //   );
    }
    console.log(dates);
  }

  //   datesRange('2021-07-22', '2021-08-07');
  datesRange();

  //   datesRange('2019-02-23', '2019-03-26').forEach(function (i) {
  //     document.write('<div>' + i + '</div>');
  //   });

  const chart = () => {
    setChartData({
      labels: ['22 Jul', '23 Jul', '24 Jul', '25 Jul', '26 Jul', '27 Jul'],
      datasets: [
        {
          label: 'Актуальные оставшиеся трудозатраты в часах ',
          // запланированные часы
          data: [50, 40, 30, 20, 10, 6],
          fill: false,
          backgroundColor: '#1988EE',
          borderColor: '#1988EE',
        },
        {
          label: 'Запланированные оставшиеся трудозатраты',
          // фактические  часы
          data: [52, 36, 30, 21, 8, 6],
          fill: false,
          backgroundColor: '#FA3B3F',
          borderColor: '#FA3B3F',
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

export default Chart;
