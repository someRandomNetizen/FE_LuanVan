import { ContactSupportOutlined } from "@material-ui/icons";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { toAbsoluteUrl } from "../../../_metronic";
import './Driver.css';
import { get } from "../../crud/auth.crud";
import { useMemo} from "react"
import { GoogleMap, useLoadScript, Marker, useJsApiLoader  } from "@react-google-maps/api";
export function Map() {
//   const { isloaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU",
//   });
//   console.log(isloaded);
//   if(!isloaded) return <div>Loading...</div>;
//   return <Map2 />;
// }

// function Map2(){
//   const center = useMemo(() => ({ lat: 44, lng: -80}), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center}/>
//     </GoogleMap>
//   )}


    //let key = "AIzaSyBSdec1YbDtXb9kM9wkEk10nxW4CmOy6Dc";
    let key = "AIzaSyA759T_2b8Vd9KPputmQ8AslLcuGwARXMU";

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: key
    })
    
    const containerStyle = {
        width: '1557px',
        height: '800px'
      };
      
      const center = {
        lat: 10.78022,
        lng: 106.7253063
        // lat: -3.745,
        // lng: -38.523
      };
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
  //toAbsoluteUrl("/media/logos/truck.png")
      setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
    console.log(isLoaded);

    const marker1 = useMemo(() => ({ lat:10.781402, lng:106.726018 }), []);
    const marker2 = useMemo(() => ({ lat:10.782429, lng:106.721607 }), []);
    const marker3 = useMemo(() => ({ lat:10.775124,  lng:106.722263 }), []);
    const marker4 = useMemo(() => ({ lat:10.774486,  lng:106.729560 }), []);

    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
            <Marker position={marker1} icon={toAbsoluteUrl("/media/logos/truck3.png")}/>
            <Marker position={marker2} icon={toAbsoluteUrl("/media/logos/truck3.png")}/>
            <Marker position={marker3} icon={toAbsoluteUrl("/media/logos/truck3.png")}/>
            <Marker position={marker4} icon={toAbsoluteUrl("/media/logos/truck3.png")}/>
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////
// import { ContactSupportOutlined } from "@material-ui/icons";
// import axios from "axios";
// import React, {useState, useEffect} from "react";
// import { toAbsoluteUrl } from "../../../_metronic";
// import './Driver.css';
// import { get } from "../../crud/auth.crud";
// import { useMemo} from "react"
// import { GoogleMap, useLoadScript, Marker, useJsApiLoader  } from "@react-google-maps/api";
// import "./styles.css";
// import { saveAs } from "file-saver";
// import XlsxPopulate from "xlsx-populate";

// export function Map() {
//   function getSheetData(data, header) {
//     var fields = Object.keys(data[0]);
//     var sheetData = data.map(function (row) {
//       return fields.map(function (fieldName) {
//         return row[fieldName] ? row[fieldName] : "";
//       });
//     });
//     sheetData.unshift(header);
//     return sheetData;
//   }

  
//   async function saveAsExcel() {
//     var data = [
//       { name: "John", city: "Seattle" },
//       { name: "Mike", city: "Los Angeles" },
//       { name: "Zach", city: "New York" }
//     ];
//     let header = ["Name", "City"];

//     XlsxPopulate.fromBlankAsync().then(async (workbook) => {
//       const sheet1 = workbook.sheet(0);
//       const sheetData = getSheetData(data, header);
//       const totalColumns = sheetData[0].length;

//       sheet1.cell("A1").value(sheetData);
//       const range = sheet1.usedRange();
//       const endColumn = String.fromCharCode(64 + totalColumns);
//       sheet1.row(1).style("bold", true);
//       sheet1.range("A1:" + endColumn + "1").style("fill", "BFBFBF");
//       range.style("border", true);
//       return workbook.outputAsync().then((res) => {
//         saveAs(res, "file.xlsx");
//       });
//     });
//   }

//   return (
//     <button type="button" onClick={saveAsExcel}>
//       Download
//     </button>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// import { ContactSupportOutlined } from "@material-ui/icons";
// import axios from "axios";
// import React, {useState, useEffect} from "react";
// import { toAbsoluteUrl } from "../../../_metronic";
// import './Driver.css';
// import { get } from "../../crud/auth.crud";
// import { useMemo} from "react"
// import { GoogleMap, useLoadScript, Marker, useJsApiLoader  } from "@react-google-maps/api";
// import "./styles.css";
// import { saveAs } from "file-saver";
// import XlsxPopulate from "xlsx-populate";

// export function Map() {
//   function getSheetData(data, header) {
//     var fields = Object.keys(data[0]);
//     var sheetData = data.map(function (row) {
//       return fields.map(function (fieldName) {
//         return row[fieldName] ? row[fieldName] : "";
//       });
//     });
//     sheetData.unshift(header);
//     return sheetData;
//   }

//   let kk = localStorage.getItem('accessToken3');

//   const [product, setProduct] = useState([])

//   const getProductData = async () =>{
//     try{
//       const data = axios.get( 
//         'https://365truck.fdssoft.com/api/showShipment',
//         kk
//       ).then(json => setProduct(json.data))}
//     catch (e){
//       console.log(e);
//     }
//   };

//   var ff = axios.get( 
//     'https://365truck.fdssoft.com/api/showShipment',
//     kk
//   );

//   useEffect(() => {
//     getProductData();
//   }, []);

//   async function saveAsExcel() {
//     var data4 = [];
//     var mmm = 0;
//     product.map(item => {
//     data4[mmm] = 
//       { full_name: item.senderName,
//         user_id: item.senderPhone,
//         shipment_id: item.shipment_id,
//         typeOfShipment: item.typeOfShipment,
//         manual: item.manual,
//         weight: item.size.weight,
//         length: item.size.length,
//         width: item.size.width,
//         height: item.size.height,
//         fee: item.fee,
//         voucher: item.voucher,
//         truck_plate: item.truck_plate,
//       }
//     mmm++;
//     })

//     console.log('data4');
//     console.log(data4);
//     var data = [
//       { name: "John", city: "Seattle" },
//       { name: "Mike", city: "Los Angeles" },
//       { name: "Zach", city: "New York" }
//     ];
//     let header = ["Tên người gửi", "Số điện thoại người gửi", "Mã đơn hàng", "Loại hình vận chuyển", "Chú thích", "Cân nặng", "Chiều dài", "Chiều rộng", "Chiều cao", "Loại hình thanh toán", "Chi phí", "Mã voucher"];

//     XlsxPopulate.fromBlankAsync().then(async (workbook) => {
//       const sheet1 = workbook.sheet(0);
//       const sheetData = getSheetData(data4, header);
//       const totalColumns = sheetData[0].length;

//       sheet1.column("A").width(18).hidden(false);
//       sheet1.column("B").width(22).hidden(false);
//       sheet1.column("C").width(14).hidden(false);
//       sheet1.column("D").width(22).hidden(false);
//       sheet1.column("E").width(14).hidden(false);
//       sheet1.column("H").width(8).hidden(false);
//       sheet1.column("J").width(19).hidden(false);
//       sheet1.column("L").width(12).hidden(false);
//       //sheet1.column("B").width(25).hidden(false);
//       sheet1.cell("A1").value(sheetData);
//       const range = sheet1.usedRange();
//       const endColumn = String.fromCharCode(64 + totalColumns);
//       sheet1.row(1).style("bold", true);
//       //sheet1.range("A1:" + endColumn + "30").style("fill", "BFBFBF");
//       sheet1.range("A1:" + endColumn + "30");
//       range.style("border", true,);
//       //range.style({horizontalAlignment: "center", verticalAlignment: "center", })
//       range.style("horizontalAlignment", "center");
//       range.style("verticalAlignment", "center");
//       //range.style("verticalAlignment", "center");
//       return workbook.outputAsync().then((res) => {
//         saveAs(res, "file.xlsx");
//       });
//     });
//   }

//   return (
//     <button type="button" onClick={saveAsExcel}>
//       Download
//     </button>
//   );
// }
