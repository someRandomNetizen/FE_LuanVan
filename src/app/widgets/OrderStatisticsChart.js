import React, { useEffect, useMemo, useRef, useState } from "react";
import { Chart } from "chart.js";
import { useSelector } from "react-redux";
import { metronic } from "../../_metronic";
import axios from "axios";
import moment from "moment";


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

  let kk = localStorage.getItem('accessToken3');
  //const [date, setDate] = useState([])
  const [date, setDate] = useState([])
  const getProductData = async () =>{
    try{
      const data = axios.get( 
        'https://365truck.fdssoft.com/api/findLatestDate',
        kk,
      ).then(json => setDate(json.data))}
    catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const [timeArray, setTimeArray] = useState([])

  const getProductData3 = async () =>{
    try{
      const data = await axios.get( 
        'https://365truck.fdssoft.com/api/arrayTime',
        kk,
      ).then(json => setTimeArray(json.data))}
    catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData3();
  }, []);

  const [node1, setNode1] = useState([])

  var mmm = {"Product_id":1}
  const getProductData4 = async () =>{
    try{
      const response = await axios.get(
        'https://365truck.fdssoft.com/api/findOneTimeNode1'
      );
      setNode1(response.data);
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData4();
  }, []);

  const [node2, setNode2] = useState([])

  var mmm = {"Product_id":1}
  const getProductData5 = async () =>{
    try{
      const response2 = await axios.get(
        'https://365truck.fdssoft.com/api/findOneTimeNode2'
      );
      setNode2(response2.data);
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData5();
  }, []);

  const [node3, setNode3] = useState([])

  var mmm = {"Product_id":1}
  const getProductData6 = async () =>{
    try{
      const response3 = await axios.get(
        'https://365truck.fdssoft.com/api/findOneTimeNode3'
      );
      setNode3(response3.data);
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData6();
  }, []);

  console.log("freaky");
  console.log(node1);
  console.log("freaky");

  const [time, setTime] = useState([])

  const getProductData2 = async () =>{
    try{
      const data = await axios.get( 
        'https://365truck.fdssoft.com/api/findLatestTime',
        kk,
      ).then(json => setTime(json.data))}
    catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData2();
  }, []);



  let qqq = "abc"


  console.log(timeArray);
  var ttt = [];
  
  var uuu = time;
  // ttt = declineTimeByOneSecond(time)
  console.log("kewk2");
  console.log(node2);
  console.log("kewk2");
  console.log("kewk3");
  console.log(node3);
  console.log("kewk3");


  const moment = require('moment');

  const timeArray2 = ["11:23:31", "12:24:30", "12:25:24"
];







  //const myLabels = timeArray2.map(time => moment(time, "HH:mm").format('hh:mm:ss a'));
  const renderChart = () => {
  const data = {
      labels: timeArray,
      datasets: [
        {
          name: "abc",
          fill:false,
          borderWidth: 2,
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.6)
            .rgbString(),

          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(1)
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

          data: node1
          //data: [8, 9, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,]
        },
        
        {
          fill: false,
          borderWidth: 2,
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color("red")
            .alpha(1)
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

          // data: [1, 1, 6, 9, 16, 19, 21, 0, 0, 0, 0, 0, 0, 0, 0]
          data: node2
        },
        {
          borderWidth: 2,
          fill: false,
          
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.2)
            .rgbString(),
          borderColor: Chart.helpers
            .color("green")
            .alpha(1)
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

          // data: [99, 99, 99, 99, 99, 99, 99, 99]
          data: node3
        },
      ]
    };




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
                display: false,
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
                max: 100,
                stepSize: 10,
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
              label += '' + tooltipItem.yLabel + '% at ' + tooltipItem.xLabel;
              return label;
            },
            
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

  }, [data, brandColor, shape2Color, shape3Color];
}
  useEffect(() => {
    if (timeArray.length > 0 && node1.length > 0 && node2.length > 0 && node3.length > 0 ) {
      const cleanup = renderChart();
      return cleanup;
    }
  }, [timeArray, node1, node2, node3]);
  return (
    
    <div className="kt-widget12">
      <div className="kt-widget12__content">
        <div className="kt-widget12__item">
          <div className="kt-widget12__info">
            <span className="kt-widget12__desc">Dữ liệu được lấy vào ngày:  {date}</span>
            {/* <span className="kt-widget12__value">$400,000</span> */}
          </div>
        </div>
      </div>
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Chart } from "chart.js";
// import { useSelector } from "react-redux";
// import { metronic } from "../../_metronic";
// import axios from "axios";
// import moment from "moment";


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

//   let kk = localStorage.getItem('accessToken3');
//   //const [date, setDate] = useState([])
//   const [date, setDate] = useState([])
//   const getProductData = async () =>{
//     try{
//       const data = axios.get( 
//         'https://365truck.fdssoft.com/api/findLatestDate',
//         kk,
//       ).then(json => setDate(json.data))}
//     catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);

//   const [timeArray, setTimeArray] = useState([])

//   const getProductData3 = async () =>{
//     try{
//       const data = await axios.get( 
//         'https://365truck.fdssoft.com/api/arrayTime',
//         kk,
//       ).then(json => setTimeArray(json.data))}
//     catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData3();
//   }, []);

//   const [node1, setNode1] = useState([])

//   var mmm = {"Product_id":1}
//   const getProductData4 = async () =>{
//     try{
//       const response = await axios.get(
//         'https://365truck.fdssoft.com/api/findOneTimeNode1'
//       );
//       setNode1(response.data);
//     } catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData4();
//   }, []);

//   const [node2, setNode2] = useState([])

//   var mmm = {"Product_id":1}
//   const getProductData5 = async () =>{
//     try{
//       const response2 = await axios.get(
//         'https://365truck.fdssoft.com/api/findOneTimeNode2'
//       );
//       setNode2(response2.data);
//     } catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData5();
//   }, []);

//   const [node3, setNode3] = useState([])

//   var mmm = {"Product_id":1}
//   const getProductData6 = async () =>{
//     try{
//       const response3 = await axios.get(
//         'https://365truck.fdssoft.com/api/findOneTimeNode3'
//       );
//       setNode3(response3.data);
//     } catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData6();
//   }, []);

//   console.log("freaky");
//   console.log(node1);
//   console.log("freaky");

//   const [time, setTime] = useState([])

//   const getProductData2 = async () =>{
//     try{
//       const data = await axios.get( 
//         'https://365truck.fdssoft.com/api/findLatestTime',
//         kk,
//       ).then(json => setTime(json.data))}
//     catch (e){
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getProductData2();
//   }, []);



//   let qqq = "abc"


//   console.log(timeArray);
//   var ttt = [];
  
//   var uuu = time;
//   // ttt = declineTimeByOneSecond(time)
//   console.log("kewk2");
//   console.log(time);
//   console.log("kewk2");

//   const moment = require('moment');

//   const timeArray2 = ["11L23:31", "12:24:30", "12:25:24"
// ];
//   //const myLabels = timeArray2.map(time => moment(time, "HH:mm").format('hh:mm:ss a'));
  
//   const data = useMemo(

    
//     () => ({
//       labels: timeArray,
//       datasets: [
//         {
//           name: "abc",
//           fill:false,
//           borderWidth: 2,
//           backgroundColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0.6)
//             .rgbString(),

//           borderColor: Chart.helpers
//             .color(brandColor)
//             .alpha(1)
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

//           data: [node1]
//           //data: [8, 9, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,1, 1, 6, 9, 16, 19, 21,]
//         },
        
//         {
//           fill: false,
//           borderWidth: 2,
//           backgroundColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0.2)
//             .rgbString(),
//           borderColor: Chart.helpers
//             .color("red")
//             .alpha(1)
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

//           // data: [1, 1, 6, 9, 16, 19, 21, 0, 0, 0, 0, 0, 0, 0, 0]
//           data: [node2]
//         },
//         {
//           borderWidth: 2,
//           fill: false,
          
//           backgroundColor: Chart.helpers
//             .color(brandColor)
//             .alpha(0.2)
//             .rgbString(),
//           borderColor: Chart.helpers
//             .color("green")
//             .alpha(1)
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

//           // data: [1, 1, 7, 10, 18, 20, 22, 0, 0, 0, 0, 0, 0, 0, 0]
//           data: [node3]
//         },
       
//       ]
//     }),
//     [brandColor]
//   );

//   useEffect(() => {


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
//                 display: false,
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
//                 max: 100,
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
//           titleSpacing: 0,
//           callbacks: {
//             title: function(tooltipItem, data) {
//               return "Node " + (tooltipItem[0].datasetIndex + 1);
//             },

//             label: function(tooltipItem, data) {
//               var label = data.datasets[tooltipItem.datasetIndex].label || '';
//               label += '' + tooltipItem.yLabel + '% at ' + tooltipItem.xLabel;
//               return label;
//             },
            
//           }
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
//             <span className="kt-widget12__desc">Dữ liệu được lấy vào ngày:  {date}</span>
//             {/* <span className="kt-widget12__value">$400,000</span> */}
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

