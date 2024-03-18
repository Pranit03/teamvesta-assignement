import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import ApexCharts from 'apexcharts'

const Graph = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: [ "#247BA0"],
    series: [
      {
        name: "Series A",
        type:'line',
            //todo
                // number of requets
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
        //todo - apis data here 
            // hotel --> shortname
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
      {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false,
          color: "#fff"
        },
        labels: {
          style: {
            colors: "#808080"
          }
        },
        title: {
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  });

// const [chartOptions, setChartOptions] = useState({
//     chart: {
//     height: 350,
//     type: "line",
//     stacked: false
//   },
//   dataLabels: {
//     enabled: false
//   },
//   colors: [ '#66C7F4'],
//   series: [
    
//     {
//       name: "Line C",
//       type: 'line',
//       data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
//     },
//   ],
//   stroke: {
//     width: [4, 4, 4]
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: "20%"
//     }
//   },
//   xaxis: {
//     categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
//   },
//   yaxis: [
//     {
//       seriesName: 'Column A',
//       axisTicks: {
//         show: true
//       },
//       axisBorder: {
//         show: true,
//       },
//       title: {
//         text: "Columns"
//       }
//     },
//     {
//       seriesName: 'Column A',
//       show: false
//     }, {
//       opposite: true,
//       seriesName: 'Line C',
//       axisTicks: {
//         show: true
//       },
//       axisBorder: {
//         show: true,
//       },
//       title: {
//         text: "Line"
//       }
//     }
//   ],
//   tooltip: {
//     shared: false,
//     intersect: true,
//     x: {
//       show: false
//     }
//   },
//   legend: {
//     horizontalAlign: "left",
//     offsetX: 40
//   }
// })

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [chartOptions]);

  return (
    <div id="chart">
      <Chart options={chartOptions} series={chartOptions.series} type="line" height={350} />
    </div>
  );
};

export default Graph;
