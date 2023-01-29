// import React from "react";
                  
// export function MyPage() {
//     return <h1>Hello!</h1>
// }   
import { ContactSupportOutlined } from "@material-ui/icons";
import axios from "axios";
import React, {useState, useEffect} from "react";

import './Driver.css';
import { get } from "../../crud/auth.crud";

import "./styles.css";
import { saveAs } from "file-saver";
import XlsxPopulate from "xlsx-populate";

// Example of a data array that
// you might receive from an API
const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},
  { name: "Subham", age: 25, gender: "Male"},
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male"},

]
  


export function DriverPage() {
  
  const [product, setProduct] = useState([])

  const getProductData = async () =>{
    try{
      const data = axios.get( 
        'http://localhost:3001/api/showDriver',
        kk
      ).then(json => setProduct(json.data))}
    catch (e){
      console.log(e);
    }
  };



  useEffect(() => {
    getProductData();
  }, []);
  // useEffect(() => {
  //   axios.get('https://365truck.fdssoft.com/server/showDriver')
  //   .then(res => {
  //     console.log(res)
  //   setPosts(res.data)  })
  // }, [])

  //return axios.post(REQUEST_PASSWORD_URL, { email });
  let kk = localStorage.getItem('accessToken3');
  let ff = [];
  ff = axios.get( 
    'http://localhost:3001/api/showDriver',
    kk
  );
  console.log('pppppppppppppppppppppppppppppppppp');
  console.log(ff);
  //console.log(ff[31]);
  console.log('pppppppppppppppppppppppppppppppppp');
  
  // axios.get( 
  //   'https://365truck.fdssoft.com/server/showDriver',
  //   kk
  // ).then(console.log).catch(console.log);
    


  // get().then(({ data: { user_name } }) => {
  //                   console.log(user_name);
  //                 })


  // Since each element has a content array, you must map over content as well.
  // {dataItems.map((item, index) => (
  //   <div key={index}>
  //     <h1>{item.title}</h1>
  //     {item.content.map((c, i) => (
  //       <div key={i}>
  //         <img src={c.imageUrl} />
  //         <h3>{c.title}</h3>
  //         <h3>{c.description}</h3>
  //         <hr />
  //       </div>
  //     ))}
  //   </div>
  // ))}

  function getSheetData(data, header) {
    var fields = Object.keys(data[0]);
    var sheetData = data.map(function (row) {
      return fields.map(function (fieldName) {
        return row[fieldName] ? row[fieldName] : "";
      });
    });
    sheetData.unshift(header);
    return sheetData;
  }

  async function saveAsExcel() {
    var data4 = [];
    var mmm = 0;
    product.map(item => {
    data4[mmm] = 
      { full_name: item.full_name,
        driver_id: item.driver_id,
        shipment_id: item.gender,
        typeOfShipment: item.birth,
        manual: item.birthPlace,
        weight: item.currentPlace,
        length: item.phone_number,
        width: item.citizenID,
        height: item.IDDate,
        fee: item.IDPlace,
        voucher: item.truck_plate,
        licenseID: item.licenseID,
        licenseType: item.licenseType,
        licenseDate: item.licenseDate,
        licensePlace: item.licensePlace,
        taxID: item.taxID,
        bankID: item.bankID,
        bankName: item.bankName,
      }
    mmm++;
    })

    console.log('data4');
    console.log(data4);
    var data = [
      { name: "John", city: "Seattle" },
      { name: "Mike", city: "Los Angeles" },
      { name: "Zach", city: "New York" }
    ];
    let header = ["Họ và tên","Mã nhân viên","Giới tính","Ngày tháng năm sinh","Nơi sinh","Địa chỉ thường trú/tạm trú","Số diện thoại","CMND/CCCD/Passport","Ngày cấp","Nơi cấp","Biển số xe tải","Số bằng lái xe","Loại giấy phép","Ngày cấp","Nơi cấp","Mã số thuế TNCN","Số tài khoản ngân hàng","Tên ngân hàng"];

    XlsxPopulate.fromBlankAsync().then(async (workbook) => {
      const sheet1 = workbook.sheet(0);
      const sheetData = getSheetData(data4, header);
      const totalColumns = sheetData[0].length;

      sheet1.column("A").width(18).hidden(false);
      sheet1.column("B").width(13).hidden(false);
      sheet1.column("C").width(9).hidden(false);
      sheet1.column("D").width(20).hidden(false);
      sheet1.column("E").width(9).hidden(false);
      sheet1.column("F").width(24).hidden(false);
      sheet1.column("G").width(13).hidden(false);
      sheet1.column("H").width(20).hidden(false);
      sheet1.column("I").width(12).hidden(false);
      sheet1.column("J").width(19).hidden(false);
      sheet1.column("K").width(12).hidden(false);
      sheet1.column("L").width(14).hidden(false);
      sheet1.column("M").width(14).hidden(false);
      sheet1.column("N").width(14).hidden(false);
      sheet1.column("O").width(14).hidden(false);
      sheet1.column("P").width(16).hidden(false);
      sheet1.column("Q").width(22).hidden(false);
      sheet1.column("R").width(18).hidden(false);
      //sheet1.column("B").width(25).hidden(false);
      sheet1.cell("A1").value(sheetData);
      const range = sheet1.usedRange();
      const endColumn = String.fromCharCode(64 + totalColumns);
      sheet1.row(1).style("bold", true);
      //sheet1.range("A1:" + endColumn + "30").style("fill", "BFBFBF");
      sheet1.range("A1:" + endColumn + "30");
      range.style("border", true,);
      //range.style({horizontalAlignment: "center", verticalAlignment: "center", })
      range.style("horizontalAlignment", "center");
      range.style("verticalAlignment", "center");
      //range.style("verticalAlignment", "center");
      return workbook.outputAsync().then((res) => {
        saveAs(res, "file.xlsx");
      });
    });
  }


  const renderTable = () => {
    return product.map(item => {
      console.log(item.bankName);
      return (
        <tr key={item.driver_id}>
          <td><div class="left">{item.full_name}</div></td>
          <td><div class="age0">{item.driver_id}</div></td>
          <td>{item.gender}</td>
          <td>{item.birth}</td>
          <td>{item.birthPlace}</td>
          <td class="body1">{item.currentPlace}</td>
          <td class="body2">{item.phone_number}</td>
          <td>{item.citizenID}</td>
          <td>{item.IDDate}</td>
          <td>{item.IDPlace}</td>
          <td>{item.truck_plate}</td>
          <td>{item.licenseID}</td>
          <td class="body1">{item.licenseType}</td>
          <td class="body2">{item.licenseDate}</td>
          <td>{item.licensePlace}</td>
          <td>{item.taxID}</td>
          <td>{item.bankID}</td>
          <td>{item.bankName}</td>
          

          {/* <td>{item.user_name}</td>
          <td>{item.user_id}</td> */}

        </tr>
      )
    })
  }


  return (
    <div className="App">

      {/* <h1 id="user_name"></h1>
      <table id="user_id">  */}
      <table id="mytable"> 
          <tr >
            <th class = "left0">Họ và tên</th>
            <th class = "body">Mã nhân viên</th>
            <th class = "body">Giới tính</th>
            <th class = "body">Ngày tháng năm sinh</th>
            <th class = "body">Nơi sinh</th>
            <th class = "body">Địa chỉ thường trú/tạm trú</th>
            <th class = "body">Số điện thoại</th>
            <th class = "body">CMND/CCCD/Passport</th>
            <th class = "body">Ngày cấp</th>
            <th class = "body">Nơi cấp</th>
            <th class = "body">Biển số xe tải</th>
            <th class = "body">Số bằng lái xe</th>
            <th class = "body">Loại giấy phép</th>
            <th class = "body">Ngày cấp</th>
            <th class = "body">Nơi cấp</th>
            <th class = "body">Mã số thuế TNCN</th>
            <th class = "body">Số tài khoản ngân hàng</th>
            <th class = "body">Tên ngân hàng</th>
          </tr>
        {renderTable()}
        {/* <tbody>{renderTable()}</tbody> */}
      </table>
      <button className = "cool">
      Import
      </button>
      <button className = "cool2" onClick={saveAsExcel}>
      Export
      </button>
    </div>
  )
}

//   console.log(kk);
//   return (
//     <div className="App">
//     <table id="mytable">
//       <tr>
//       {product.map((item) => 

//         <td>{item.user_name}</td>

//         )}
//         <th class = "left0">Name</th>
//         <th>Age</th>
//         <th>Gender</th>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Gender</th>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Gender</th>
//         <th>Name</th>
//         <th>Age</th>
//         <th>Gender</th>
//       </tr>
//       {data.map((val, key) => {
//         return (
//           <tr key={key}>

            
//             {/* <td style={{minWidth:'1000px'}}>{val.name}</td> */}
            


//           </tr>
//         )
//       })}
//     </table>
//   </div>
//   );
// }

    //{posts.map(post =>

// import React from "react";
                  
// export function MyPage() {
//     return <h1>Hello!</h1>
// }   
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { ContactSupportOutlined } from "@material-ui/icons";
// import axios from "axios";
// import React, {useState, useEffect} from "react";

// import './Driver.css';
// import { get } from "../../crud/auth.crud";
// import { useMemo} from "react"
// import { GoogleMap, useLoadScript, Marker, useJsApiLoader  } from "@react-google-maps/api";
// export function DriverPage() {
// //   const { isloaded } = useLoadScript({
// //     googleMapsApiKey: "AIzaSyBSdec1YbDtXb9kM9wkEk10nxW4CmOy6Dc",
// //   });
// //   console.log(isloaded);
// //   if(!isloaded) return <div>Loading...</div>;
// //   return <Map />;
// // }

// // function Map(){
// //   const center = useMemo(() => ({ lat: 44, lng: -80}), []);

// //   return (
// //     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
// //       <Marker position={center}/>
// //     </GoogleMap>
// //   )
//   const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };
  

//     const { isLoaded } = useJsApiLoader({
//       id: 'google-map-script',
//       googleMapsApiKey: "AIzaSyBSdec1YbDtXb9kM9wkEk10nxW4CmOy6Dc"
//     })
  
//     const [map, setMap] = React.useState(null)
  
//     const onLoad = React.useCallback(function callback(map) {
//       // This is just an example of getting and using the map instance!!! don't just blindly copy!
//       const bounds = new window.google.maps.LatLngBounds(center);
//       map.fitBounds(bounds);
  
//       setMap(map)
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
  
//     return isLoaded ? (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           { /* Child components, such as markers, info windows, etc. */ }
//           <></>
//         </GoogleMap>
//     ) : <></>
  
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////import { ContactSupportOutlined } from "@material-ui/icons";
// import axios from "axios";
// import React, {useState, useEffect} from "react";

// import './Driver.css';
// import { get } from "../../crud/auth.crud";
// import { useMemo} from "react"
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import FilterResults from 'react-filter-search';
// import { Component, SearchResults } from "react";


//  export class DriverPage extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: [],
//         value: ''
//       };
//     }
//     componentWillMount() {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => this.setState({ data: json }));
//     }
//     handleChange = event => {
//       const { value } = event.target;
//       this.setState({ value });
//     };
//     render() {
//       const { data, value } = this.state;
//       return (
//         <div>
//           <input type="text" value={value} onChange={this.handleChange} />
//           <SearchResults
//             value={value}
//             data={data}
//             renderResults={results => (
//               <div>
//                 {results.map(el => (
//                   <div>
//                     <span>{el.name}</span>
//                     <span>{el.email}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           />
//         </div>
//       );
//     }
//   }

  // export function DriverPage(props){
  //   return (
  //     <div class = "App">
  //     </div>
  //   )
  // }