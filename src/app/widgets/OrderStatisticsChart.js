import React, { useEffect, useMemo, useRef } from "react";
import { Chart } from "chart.js";
import { useSelector } from "react-redux";
import { metronic } from "../../_metronic";

export default function OrderStatisticsChart() {
  const ref = useRef();
  const { brandColor, shape2Color, shape3Color } = useSelector(state => ({
    brandColor: metronic.builder.selectors.getConfig(
      state,
      "colors.state.brand"
    ),
    shape2Color: metronic.builder.selectors.getConfig(
      state,
      "colors.base.shape.2"
    ),
    shape3Color: metronic.builder.selectors.getConfig(
      state,
      "colors.base.shape.3"
    )
  }));

  // const data = useMemo(
  //   () => ({
  //     labels: ["2/11 13:14", "2/11 15:03", "2/11 15:42", "2/11 16:12", "2/11 16:18", "2/11 16:20", "2/11 16:21", "2/11 16:22", "2/11 16:23", "2/11 16:24"],
  //     datasets: [
  //       {
  //         name: "abc",
  //         fill: true,
  //         // borderWidth: 0,
  //         backgroundColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0.6)
  //           .rgbString(),

  //         borderColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0)
  //           .rgbString(),

  //         pointHoverRadius: 4,
  //         pointHoverBorderWidth: 12,
  //         pointBackgroundColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointHoverBackgroundColor: brandColor,
  //         pointHoverBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0.1)
  //           .rgbString(),

  //         data: [1, 7, 1, 1, 20, 9, 10, 17, 18, 20]
  //       },
  //       {
  //         fill: true,
  //         // borderWidth: 0,
  //         backgroundColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0.2)
  //           .rgbString(),
  //         borderColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0)
  //           .rgbString(),

  //         pointHoverRadius: 4,
  //         pointHoverBorderWidth: 12,
  //         pointBackgroundColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointHoverBackgroundColor: brandColor,
  //         pointHoverBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0.1)
  //           .rgbString(),

  //         data: [0, 10, 6, 2, 19, 6, 9, 16, 19, 21]
  //       },
  //       {
  //         fill: true,
  //         // borderWidth: 0,
          
          
  //         backgroundColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0.2)
  //           .rgbString(),
  //         borderColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0)
  //           .rgbString(),

  //         pointHoverRadius: 4,
  //         pointHoverBorderWidth: 12,
  //         pointBackgroundColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointHoverBackgroundColor: brandColor,
  //         pointHoverBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0.1)
  //           .rgbString(),

  //         data: [2, 9, 3, 3, 18, 7, 10, 18, 20, 22]
  //       },
  //       {
  //         fill: true,
  //         // borderWidth: 0,
          
          
  //         backgroundColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0.2)
  //           .rgbString(),
  //         borderColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0)
  //           .rgbString(),

  //         pointHoverRadius: 4,
  //         pointHoverBorderWidth: 12,
  //         pointBackgroundColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointHoverBackgroundColor: brandColor,
  //         pointHoverBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0.1)
  //           .rgbString(),

  //         data: [5, 18, 10, 5, 16, 1, 13, 17, 21, 23]
  //       },
  //       {
  //         fill: true,
  //         // borderWidth: 0,
          
          
  //         backgroundColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0.2)
  //           .rgbString(),
  //         borderColor: Chart.helpers
  //           .color(brandColor)
  //           .alpha(0)
  //           .rgbString(),

  //         pointHoverRadius: 4,
  //         pointHoverBorderWidth: 12,
  //         pointBackgroundColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0)
  //           .rgbString(),
  //         pointHoverBackgroundColor: brandColor,
  //         pointHoverBorderColor: Chart.helpers
  //           .color("#000000")
  //           .alpha(0.1)
  //           .rgbString(),

  //         data: [3, 8, 9, 4, 17, 3, 15, 16, 18, 24]
  //       }
  //     ]
  //   }),
  //   [brandColor]
  // );

  const data = useMemo(
    () => ({
      labels: ["2/11 16:20", "2/11 16:21", "2/11 16:22", "2/11 16:23", "2/11 16:24", "2/11 16:25", "2/11 16:26", "2/11 16:27", "2/11 16:28", "2/11 16:29", "2/11 16:30", "2/11 16:31", "2/11 16:32"],
      datasets: [
        {
          name: "abc",
          fill: true,
          // borderWidth: 0,
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.6)
            .rgbString(),

          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [9, 10, 17, 18, 0 , 0, 0, 0 ,0 ,0, 0, 0, 0]
        },
        {
          fill: true,
          // borderWidth: 0,
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [6, 9, 16, 19, 21, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          fill: true,
          // borderWidth: 0,
          
          
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [7, 10, 18, 20, 22, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          fill: true,
          // borderWidth: 0,
          
          
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [1, 13, 17, 21, 23, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          fill: true,
          // borderWidth: 0,
          
          
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [3, 15, 16, 18, 24, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    }),
    [brandColor]
  );

  useEffect(() => {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(ref.current, {
      data,
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        scales: {
          xAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month"
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontColor: shape3Color,
                fontSize: 13,
                padding: 10
              }
            }
          ],
          yAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value"
              },
              gridLines: {
                color: shape2Color,
                drawBorder: false,
                offsetGridLines: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineColor: shape2Color,
                zeroLineBorderDash: [3, 4]
              },
              ticks: {
                max: 24,
                stepSize: 4,
                display: true,
                beginAtZero: true,
                fontColor: shape3Color,
                fontSize: 13,
                padding: 10
              }
            }
          ]
        },
        title: {
          display: false
        },
        hover: {
          mode: "ErrorsPage.js"
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor: brandColor,
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
          callbacks: {
            title: function(tooltipItem, data) {
              return "Node " + (tooltipItem[0].datasetIndex + 1);
            },
            label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
              label += '' + tooltipItem.yLabel + ' at ' + data.labels[tooltipItem.index];
              return label;
            }
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data, brandColor, shape2Color, shape3Color]);

  return (
    <div className="kt-widget12">
      
      <div className="kt-widget12__chart" style={{ height: "250px" }}>
        <canvas
          ref={ref}
          width={683}
          height={312}
          id="kt_chart_order_statistics"
        />
      </div>
    </div>
  );
}


// import React, { useEffect, useMemo, useRef } from "react";
// import { Chart } from "chart.js";
// import { useSelector } from "react-redux";
// import { metronic } from "../../_metronic";

// export default function OrderStatisticsChart() {
//   const ref = useRef();
//   const { brandColor, shape2Color, shape3Color } = useSelector(state => ({
//     brandColor: metronic.builder.selectors.getConfig(
//       state,
//       "colors.state.brand"
//     ),
//     shape2Color: metronic.builder.selectors.getConfig(
//       state,
//       "colors.base.shape.2"
//     ),
//     shape3Color: metronic.builder.selectors.getConfig(
//       state,
//       "colors.base.shape.3"
//     )
//   }));

//   const data = useMemo(
//     () => ({
//       labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
//                "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
//                "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
//                "31"],
//       datasets: [
//         {
//           fill: true,
//           // borderWidth: 0,
//           backgroundColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0.6)
//             .rgbString(),

//           borderColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0)
//             .rgbString(),

//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 12,
//           pointBackgroundColor: Chart.helpers
//             .color("#000000")
//             .alpha(0)
//             .rgbString(),
//           pointBorderColor: Chart.helpers
//             .color("#000000")
//             .alpha(0)
//             .rgbString(),
//           pointHoverBackgroundColor: brandColor,
//           pointHoverBorderColor: Chart.helpers
//             .color("#000000")
//             .alpha(0.1)
//             .rgbString(),

//           data: [20, 40, 50, 25, 35, 60, 30]
//         },
//         {
//           fill: true,
//           // borderWidth: 0,
//           backgroundColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0.2)
//             .rgbString(),
//           borderColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0)
//             .rgbString(),

//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 12,
//           pointBackgroundColor: Chart.helpers
//             .color("#000000")
//             .alpha(0)
//             .rgbString(),
//           pointBorderColor: Chart.helpers
//             .color("#000000")
//             .alpha(0)
//             .rgbString(),
//           pointHoverBackgroundColor: brandColor,
//           pointHoverBorderColor: Chart.helpers
//             .color("#000000")
//             .alpha(0.1)
//             .rgbString(),

//           data: [25, 45, 55, 30, 40, 65, 35]
//         }
//       ]
//     }),
//     [brandColor]
//   );

//   useEffect(() => {
//     // For more information about the chartjs, visit this link
//     // https://www.chartjs.org/docs/latest/getting-started/usage.html

//     const chart = new Chart(ref.current, {
//       data,
//       type: "line",
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         legend: false,
//         scales: {
//           xAxes: [
//             {
//               categoryPercentage: 0.35,
//               barPercentage: 0.7,
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Month"
//               },
//               gridLines: false,
//               ticks: {
//                 display: true,
//                 beginAtZero: true,
//                 fontColor: shape3Color,
//                 fontSize: 13,
//                 padding: 10
//               }
//             }
//           ],
//           yAxes: [
//             {
//               categoryPercentage: 0.35,
//               barPercentage: 0.7,
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Value"
//               },
//               gridLines: {
//                 color: shape2Color,
//                 drawBorder: false,
//                 offsetGridLines: false,
//                 drawTicks: false,
//                 borderDash: [3, 4],
//                 zeroLineWidth: 1,
//                 zeroLineColor: shape2Color,
//                 zeroLineBorderDash: [3, 4]
//               },
//               ticks: {
//                 max: 70,
//                 stepSize: 10,
//                 display: true,
//                 beginAtZero: true,
//                 fontColor: shape3Color,
//                 fontSize: 13,
//                 padding: 10
//               }
//             }
//           ]
//         },
//         title: {
//           display: false
//         },
//         hover: {
//           mode: "ErrorsPage.js"
//         },
//         tooltips: {
//           enabled: true,
//           intersect: false,
//           mode: "nearest",
//           bodySpacing: 5,
//           yPadding: 10,
//           xPadding: 10,
//           caretPadding: 0,
//           displayColors: false,
//           backgroundColor: brandColor,
//           titleFontColor: "#ffffff",
//           cornerRadius: 4,
//           footerSpacing: 0,
//           titleSpacing: 0
//         },
//         layout: {
//           padding: {
//             left: 0,
//             right: 0,
//             top: 5,
//             bottom: 5
//           }
//         }
//       }
//     });

//     return () => {
//       chart.destroy();
//     };
//   }, [data, brandColor, shape2Color, shape3Color]);

//   return (
//     <div className="kt-widget12">
//       <div className="kt-widget12__content">
//         <div className="kt-widget12__item">
//           <div className="kt-widget12__info">
//             <span className="kt-widget12__desc">Annual Taxes EMS</span>
//             <span className="kt-widget12__value">$400,000</span>
//           </div>
//           <div className="kt-widget12__info">
//             <span className="kt-widget12__desc">Finance Review Date</span>
//             <span className="kt-widget12__value">July 24,2019</span>
//           </div>
//         </div>
//         <div className="kt-widget12__item">
//           <div className="kt-widget12__info">
//             <span className="kt-widget12__desc">Avarage Revenue</span>
//             <span className="kt-widget12__value">$60M</span>
//           </div>
//           <div className="kt-widget12__info">
//             <span className="kt-widget12__desc">Revenue Margin</span>
//             <div className="kt-widget12__progress">
//               <div className="progress kt-progress--sm">
//                 <div
//                   role="progressbar"
//                   aria-valuemin={0}
//                   aria-valuenow={100}
//                   aria-valuemax={100}
//                   style={{ width: "40%" }}
//                   className="progress-bar bg-success"
//                 />
//               </div>
//               <span className="kt-widget12__stat">40%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="kt-widget12__chart" style={{ height: "250px" }}>
//         <canvas
//           ref={ref}
//           width={683}
//           height={312}
//           id="kt_chart_order_statistics"
//         />
//       </div>
//     </div>
//   );
// }
