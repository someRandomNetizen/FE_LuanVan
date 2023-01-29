// import React from "react";
                  
// export function MyPage() {
//     return <h1>Hello!</h1>
// }   
import { ContactSupportOutlined, ViewArray } from "@material-ui/icons";
import axios from "axios";
import React, {useState, useEffect, useRef} from "react";

import './Shipment.css';
import { get } from "../../crud/auth.crud";
import { TableRow } from "@material-ui/core";
import './ShipmentDetail'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import { saveAs } from "file-saver";
import XlsxPopulate from "xlsx-populate";
import * as XLSX from 'xlsx';

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
  


export function ShipmentPage(props) {

  //const navigate = useNavigate();


 
  const handleRowClick = (abc) => {
    props.history.push({pathname: "/ShipmentDetail",
    state: abc
    });
  };
  
  const [product, setProduct] = useState([])

  const getProductData = async () =>{
    try{
      const data = axios.get( 
        'http://localhost:3001/api/showShipment',
        //'http://localhost:3001/api/showShipment',
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
  console.log(kk);
  let ff = [];
  ff = axios.get( 
     'http://localhost:3001/api/showShipment',
    
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

  // async function saveAsExcel() {
  //   var data4 = [];
  //   var mmm = 0;
  //   product.map(item => {
  //   data4[mmm] = 
  //     { full_name: item.senderName,
  //       user_id: item.senderPhone,
  //       shipment_id: item.shipment_id,
  //       typeOfShipment: item.typeOfShipment,
  //       manual: item.manual,
  //       weight: item.size.weight,
  //       length: item.size.length,
  //       width: item.size.width,
  //       height: item.size.height,
  //       fee: item.fee,
  //       voucher: item.voucher,
  //       truck_plate: item.truck_plate,
  //     }
  //   mmm++;
  //   })

  //   console.log('data4');
  //   console.log(data4);
  //   var data = [
  //     { name: "John", city: "Seattle" },
  //     { name: "Mike", city: "Los Angeles" },
  //     { name: "Zach", city: "New York" }
  //   ];
  //   let header = ["Tên người gửi", "Số điện thoại người gửi", "Mã đơn hàng", "Loại hình vận chuyển", "Chú thích", "Cân nặng", "Chiều dài", "Chiều rộng", "Chiều cao", "Loại hình thanh toán", "Chi phí", "Mã voucher"];

  //   XlsxPopulate.fromBlankAsync().then(async (workbook) => {
  //     const sheet1 = workbook.sheet(0);
  //     const sheetData = getSheetData(data4, header);
  //     const totalColumns = sheetData[0].length;

  //     sheet1.column("A").width(18).hidden(false);
  //     sheet1.column("B").width(22).hidden(false);
  //     sheet1.column("C").width(14).hidden(false);
  //     sheet1.column("D").width(22).hidden(false);
  //     sheet1.column("E").width(14).hidden(false);
  //     sheet1.column("H").width(8).hidden(false);
  //     sheet1.column("J").width(19).hidden(false);
  //     sheet1.column("L").width(12).hidden(false);
  //     //sheet1.column("B").width(25).hidden(false);
  //     sheet1.cell("A1").value(sheetData);
  //     const range = sheet1.usedRange();
  //     const endColumn = String.fromCharCode(64 + totalColumns);
  //     sheet1.row(1).style("bold", true);
  //     //sheet1.range("A1:" + endColumn + "30").style("fill", "BFBFBF");
  //     sheet1.range("A1:" + endColumn + "30");
  //     range.style("border", true,);
  //     //range.style({horizontalAlignment: "center", verticalAlignment: "center", })
  //     range.style("horizontalAlignment", "center");
  //     range.style("verticalAlignment", "center");
  //     //range.style("verticalAlignment", "center");
  //     return workbook.outputAsync().then((res) => {
  //       saveAs(res, "file.xlsx");
  //     });
  //   });
  // }

  // async function importExcel(data, header) {
  //   let kk = localStorage.getItem('accessToken3');
  //   console.log(kk);
  //   var love = [];
  //   love = {
  //     senderName: "Nguyễn Quốc Huy",
  //     senderPhone: "0778555485",
  //     recAddress: [
  //         {
  //             coord: {
  //                 latitude: 99,
  //                 longtitude: 14
  //             },
  //             shortAddress: "Lake View 2",
  //             detailAddress: "Đường N5, Lakeview 2, Quận 2",
  //             apartmentFloor: "2",
  //             noteAddress: "no",
  //             name: "Nguyễn Trí Cường",
  //             phone: "077839443",
  //             noteForDriver: "careful",
  //             role: "Recipient"
  //         },
  //         {
  //             coord: {
  //                 latitude: 12,
  //                 longtitude: 14
  //             },
  //             shortAddress: "Chung cư Sadora",
  //             detailAddress: "2 Đường 13, An Lợi Đông, Quận 2",
  //             apartmentFloor: "2",
  //             noteAddress: "no",
  //             name: "Trần Trúc Nhi",
  //             phone: "077839443",
  //             noteForDriver: "careful",
  //             role: "Recipient"
  //         }
  //     ],
  //     senderAddress: [
  //         {
  //             coord: {
  //                 "latitude": 19,
  //                 "longtitude": 84
  //             },
  //             shortAddress: "Sarina Tháp A",
  //             detailAddress: "Đ. B2, An Lợi Đông, Quận 2",
  //             apartmentFloor: "2",
  //             noteAddress: "no",
  //             name: "Võ Tuyết Hùng",
  //             phone: "077839443",
  //             noteForDriver: "careful",
  //             role: "Sender"
  //         },
  //         {
  //             coord: {
  //                 latitude: 72,
  //                 longtitude: 14
  //             },
  //             shortAddress: "Eco Smart City",
  //             detailAddress: "An Khánh, Quận 2",
  //             apartmentFloor: "2",
  //             noteAddress: "no",
  //             name: "Nguyễn Thị Cười",
  //             phone: "077839443",
  //             noteForDriver: "careful",
  //             role: "Sender"
  //         }
  //     ],
  //     time: "2012-04-23T18:25:43.511Z",
  //     typeOfShipment: "Vật Liệu Gia Đình",
  //     manual: "Hàng Dễ Vỡ",
  //     size: {
  //         weight: 2,
  //         length: 3,
  //         width: 23,
  //         height: 14
  //     },
  //     trucks: [
  //         {
  //             truck_types: "Xe Van 500 kg",
  //             quantity: 1
  //         },
  //         {
  //             truck_types: "Xe Bán Tải 500 kg",
  //             quantity: 1
  //         }
  //     ],
  //     payment: "Banking",
  //     fee: "300,000,000",
  //     voucher: 1,
  //   };
  //   var loveAdd = love.senderAddress.push({
  //     coord: {
  //       latitude: 2,
  //       longtitude: 54
  //     },
  //     shortAddress: "Sarina Tháp A",
  //     detailAddress: "Đ. B2, An Lợi Đông, Quận 2",
  //     apartmentFloor: "2",
  //     noteAddress: "no",
  //     name: "Võ Tuyết Hùng",
  //     phone: "077839443",
  //     noteForDriver: "careful",
  //     role: "Sender"
  //   })
  //   // var kkkk = loveAdd.coord.push({
  //   //   latitude: 2,
  //   //   longtitude: 5,
  //   // })
  //   console.log(loveAdd);
  //   //console.log(kkkk);
  //     let ff = [];
  //     ff = axios.post( 
  //       'https://365truck.fdssoft.com/api/createShipment',
  //       love,
  //       kk
  //     );

  

    
  // }

  async function saveAsExcel() {
    //var data4 = [];
    var mmm = 0;
    // var data = [
    //   { name: "John", city: "Seattle" },
    //   { name: "Mike", city: "Los Angeles" },
    //   { name: "Zach", city: "New York" }
    // ];
    var data67 = [
      { name: "John"},
      { name: "Mike"},
      { name: "Zach"}
    ];

    // product.map(item => {

    // data4[mmm] = 
    //   { full_name: item.senderName,
    //     user_id: item.senderPhone,
    //     shipment_id: item.shipment_id,
    //     typeOfShipment: item.typeOfShipment,
    //     manual: item.manual,
    //     weight: item.size.weight,
    //     length: item.size.length,
    //     width: item.size.width,
    //     height: item.size.height,
    //     fee: item.fee,
    //     voucher: item.voucher,
    //     truck_plate: item.truck_plate,
    //     lovely: item.recAddress.map
    //   }
    // mmm++;
    // })

    function item1() {

    }
    const data4 = product.map(item => ({

       full_name: item.senderName,
       user_id: item.senderPhone,
       shipment_id: item.shipment_id,
       typeOfShipment: item.typeOfShipment,
       manual: item.manual,
       weight: item.size.weight,
       length: item.size.length,
       width: item.size.width,
       height: item.size.height,
       payment: item.payment,
       fee: item.fee,
       voucher: item.voucher,
       //truck_plate: item.truck_plate,
       
     
   }))

    console.log('data4');
    console.log(data4);

    let header = ["Tên người gửi", "Số điện thoại người gửi", "Mã đơn hàng", "Loại hình vận chuyển", "Chú thích", "Cân nặng", "Chiều dài", "Chiều rộng", "Chiều cao", "Loại hình thanh toán", "Chi phí", "Mã voucher"];

    XlsxPopulate.fromBlankAsync().then(async (workbook) => {
      const sheet1 = workbook.sheet(0);
      const sheetData = getSheetData(data4, header);
      const totalColumns = sheetData[0].length;
      // const r = workbook.sheet(0).range("N1:N5");
      // r.value(5);

      sheet1.column("A").width(18).hidden(false);
      sheet1.column("B").width(22).hidden(false);
      sheet1.column("C").width(14).hidden(false);
      sheet1.column("D").width(22).hidden(false);
      sheet1.column("E").width(14).hidden(false);
      sheet1.column("H").width(8).hidden(false);
      sheet1.column("J").width(19).hidden(false);
      sheet1.column("L").width(12).hidden(false);
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

  async function saveDetailAsExcel() {
    //var data4 = [];
    var mmm = 0;


  var data5 = []
  product.forEach(item => {
    data5.push({ 
      full_name: item.senderName,                       
      user_id: item.senderPhone,
      shipment_id: item.shipment_id,                     
      typeOfShipment: item.typeOfShipment,
      manual: item.manual,                              
      weight: item.size.weight,
      length: item.size.length,                         
      width: item.size.width,
      height: item.size.height,                         
      payment: item.payment,
      fee: item.fee,                                    
      voucher: item.voucher,
      name: item.recAddress[0].name,                              
      phone: item.recAddress[0].phone,
      shortAddress: item.recAddress[0].shortAddress,              
      detailAddress: item.recAddress[0].detailAddress,
      apartmentFloor: item.recAddress[0].apartmentFloor,          
      noteAddress: item.recAddress[0].noteAddress,
      noteForDriver: item.recAddress[0].noteForDriver,            

      name2: item.senderAddress[0].name,                          
      phone2: item.senderAddress[0].phone,                        
      shortAddress2: item.senderAddress[0].shortAddress,          
      detailAddress2: item.senderAddress[0].detailAddress,        
      apartmentFloor2: item.senderAddress[0].apartmentFloor,      
      noteAddress2: item.senderAddress[0].noteAddress,            
      noteForDriver2: item.senderAddress[0].noteForDriver,        
       
      //  fee: item.fee,
      //  fee: item.fee,
      //  fee: item.fee,
      //  fee: item.fee,
      //  fee: item.fee,
      //  fee: item.fee,
    });
    // const max = [];
    // max = [item.senderAddress.length, item.recAddress.length]
    var sendLength = item.senderAddress.length;
    var recLength = item.recAddress.length
    
    if(sendLength < recLength){
      for(var i = 1; i < sendLength; i++){
        const kewk2 = item.recAddress[i];
        const kewk3 = item.senderAddress[i];
        data5.push({
          name: kewk2.name,
          phone: kewk2.phone,
          shortAddress: kewk2.shortAddress,
          detailAddress: kewk2.detailAddress,
          apartmentFloor: kewk2.apartmentFloor,
          noteAddress: kewk2.noteAddress,
          noteForDriver: kewk2.noteForDriver,
          name2: kewk3.name,
          phone2: kewk3.phone,
          shortAddress2: kewk3.shortAddress,
          detailAddress2: kewk3.detailAddress,
          apartmentFloor2: kewk3.apartmentFloor,
          noteAddress2: kewk3.noteAddress,
          noteForDriver2: kewk3.noteForDriver,
        })
      }
      for(var y = sendLength ; y < recLength; y++){
        const kewk2 = item.recAddress[y];
        data5.push({
          name: kewk2.name,
          phone: kewk2.phone,
          shortAddress: kewk2.shortAddress,
          detailAddress: kewk2.detailAddress,
          apartmentFloor: kewk2.apartmentFloor,
          noteAddress: kewk2.noteAddress,
          noteForDriver: kewk2.noteForDriver,
        })
      }
      console.log(data5);
      console.log(data5.length);
    }
    else if(recLength < sendLength){
      for(var i = 1; i < recLength; i++){
        const kewk2 = item.recAddress[i];
        const kewk3 = item.senderAddress[i];
        data5.push({
          name: kewk2.name,
          phone: kewk2.phone,
          shortAddress: kewk2.shortAddress,
          detailAddress: kewk2.detailAddress,
          apartmentFloor: kewk2.apartmentFloor,
          noteAddress: kewk2.noteAddress,
          noteForDriver: kewk2.noteForDriver,
          name2: kewk3.name,
          phone2: kewk3.phone,
          shortAddress2: kewk3.shortAddress,
          detailAddress2: kewk3.detailAddress,
          apartmentFloor2: kewk3.apartmentFloor,
          noteAddress2: kewk3.noteAddress,
          noteForDriver2: kewk3.noteForDriver,
        })
      }
      //
      for(var y = recLength ; y < sendLength; y++){
        const kewk3 = item.senderAddress[y];
        data5.push({
          name2: kewk3.name,
          phone2: kewk3.phone,
          shortAddress2: kewk3.shortAddress,
          detailAddress2: kewk3.detailAddress,
          apartmentFloor2: kewk3.apartmentFloor,
          noteAddress2: kewk3.noteAddress,
          noteForDriver2: kewk3.noteForDriver,
        })
      }
      //
      console.log(data5);
      console.log(data5.length);
    }
    else{
      for(var i = 1; i < recLength; i++){
        const kewk2 = item.recAddress[i];
        const kewk3 = item.senderAddress[i];
        data5.push({
          name: kewk2.name,
          phone: kewk2.phone,
          shortAddress: kewk2.shortAddress,
          detailAddress: kewk2.detailAddress,
          apartmentFloor: kewk2.apartmentFloor,
          noteAddress: kewk2.noteAddress,
          noteForDriver: kewk2.noteForDriver,
          name2: kewk3.name,
          phone2: kewk3.phone,
          shortAddress2: kewk3.shortAddress,
          detailAddress2: kewk3.detailAddress,
          apartmentFloor2: kewk3.apartmentFloor,
          noteAddress2: kewk3.noteAddress,
          noteForDriver2: kewk3.noteForDriver,
        })
      }
      console.log(data5);
      console.log(data5.length);
    }

      // for(let i2 = 1; i2 < item.senderAddress.length; i2++){
      //   const kewk2 = item.senderAddress[i2];
      //   data5.push({
      //     name2: kewk2.name,
      //     phone2: kewk2.phone,
      //     shortAddress2: kewk2.shortAddress,
      //     detailAddress2: kewk2.detailAddress,
      //     apartmentFloor2: kewk2.apartmentFloor,
      //     noteAddress2: kewk2.noteAddress,
      //     noteForDriver2: kewk2.noteForDriver,
      //   })
      // }
    
  })
////////////////////////////////////////////////////////////////////////////
  //   //addToInput;
  //   // papa () = e => {
  //   //   return addToInput;
  //   // }
  //   // papa;

  //  })

  // async function saveDetailAsExcel() {
  //   //var data4 = [];
  //   var mmm = 0;


  //  var data5 = []
  //  product.map(item => {
  //   item.recAddress.map(lol => {
  //   data5.push({ 
  //      full_name: item.senderName,
  //      user_id: item.senderPhone,
  //      shipment_id: item.shipment_id,
  //      typeOfShipment: item.typeOfShipment,
  //      manual: item.manual,
  //      weight: item.size.weight,
  //      length: item.size.length,
  //      width: item.size.width,
  //      height: item.size.height,
  //      payment: item.payment,
  //      fee: item.fee,
  //      voucher: item.voucher,
  //      name: item.recAddress[0].name,

       
       
  //      name2: item.senderAddress[0].name,

       
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     })
  //     item.recAddress.map(lol => {
  //       data5.push({ 
  //         name: lol.name,

  //       })
  //     })
  //     item.senderAddress.map(lol => {
  //       data5.push({ 
  //         name2: lol.name,

  //       })
  //     })
  //   });
  //   console.log(data5);
  //   var data6 = [];
  //   data6 = product.flat(2);
  //   console.log(data6);
  //   // product.map(item => {
  //   //   item.recAddress.map(lol => {
  //   //     data5.push({ 
  //   //       name: lol.name,

  //   //     })
  //   //   })
  //   // })
  //   // const max = [];
  //   // max = [item.senderAddress.length, item.recAddress.length]



  //   //addToInput;
  //   // papa () = e => {
  //   //   return addToInput;
  //   // }
  //   // papa;

  //  })

   //addToInput;

  // async function saveDetailAsExcel() {
  //   //var data4 = [];
  //   var mmm = 0;


  //  //var data5 = []
  //  const data5 = product.map(item => ({
   
  //      full_name: item.senderName,
  //      user_id: item.senderPhone,
  //      shipment_id: item.shipment_id,
  //      typeOfShipment: item.typeOfShipment,
  //      manual: item.manual,
  //      weight: item.size.weight,
  //      length: item.size.length,
  //      width: item.size.width,
  //      height: item.size.height,
  //      payment: item.payment,
  //      fee: item.fee,
  //      voucher: item.voucher,
  //      name: item.recAddress.map(role => role.name),
  //      phone: item.recAddress[0].phone,
  //      shortAddress: item.recAddress[0].shortAddress,
  //      detailAddress: item.recAddress[0].detailAddress,
  //      apartmentFloor: item.recAddress[0].apartmentFloor,
  //      noteAddress: item.recAddress[0].noteAddress,
  //      noteForDriver: item.recAddress[0].noteForDriver,
  //      name2: item.senderAddress[0].name,
  //      phone2: item.senderAddress[0].phone,
  //      shortAddress2: item.senderAddress[0].shortAddress,
  //      detailAddress2: item.senderAddress[0].detailAddress,
  //      apartmentFloor2: item.senderAddress[0].apartmentFloor,
  //      noteAddress2: item.senderAddress[0].noteAddress,
  //      noteForDriver2: item.senderAddress[0].noteForDriver,
  //  }))
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
  //     //  fee: item.fee,
    
  //   // const max = [];
  //   // max = [item.senderAddress.length, item.recAddress.length]

  //   // for(let i2 = 1; i2 < item.senderAddress.length; i2++){
  //   //   const kewk2 = item.senderAddress[i2];
  //   //   data5.push({
  //   //     name2: kewk2.name,
  //   //     phone2: kewk2.phone,
  //   //     shortAddress2: kewk2.shortAddress,
  //   //     detailAddress2: kewk2.detailAddress,
  //   //     apartmentFloor2: kewk2.apartmentFloor,
  //   //     noteAddress2: kewk2.noteAddress,
  //   //     noteForDriver2: kewk2.noteForDriver,
  //   //   })
  //   // }

  //   // for(let i = 1; i < item.recAddress.length; i++){
  //   //   const kewk2 = item.recAddress[i];
  //   //   const kewk3 = item.senderAddress[i];
  //   //   data5.push({

  //   //     phone: kewk2.phone,
  //   //     shortAddress: kewk2.shortAddress,
  //   //     detailAddress: kewk2.detailAddress,
  //   //     apartmentFloor: kewk2.apartmentFloor,
  //   //     noteAddress: kewk2.noteAddress,
  //   //     noteForDriver: kewk2.noteForDriver,
  //   //     // name2: kewk3.name,
  //   //     // phone2: kewk3.phone,
  //   //     // shortAddress2: kewk3.shortAddress,
  //   //     // detailAddress2: kewk3.detailAddress,
  //   //     // apartmentFloor2: kewk3.apartmentFloor,
  //   //     // noteAddress2: kewk3.noteAddress,
  //   //     // noteForDriver2: kewk3.noteForDriver,
  //   //   })
  //   // }

   

    console.log('data4'); 

    let header = ["Tên chủ đơn", "Số điện thoại chủ đơn", "Mã đơn hàng", "Loại hình vận chuyển", "Chú thích", "Cân nặng", "Chiều dài", "Chiều rộng", "Chiều cao", "Loại hình thanh toán", "Chi phí", "Mã voucher",
                  "Tên người nhận", "Số điện thoại người nhận", "Địa chỉ người nhận", "Địa chỉ người nhận chi tiết", "Số tầng căn hộ người nhận", "Ghi chú tại địa chỉ người nhận", "Ghi chú cho tài xế người nhận",
                  "Tên người gửi", "Số điện thoại người gửi", "Địa chỉ người gửi", "Địa chỉ người gửi chi tiết", "Số tầng căn hộ người gửi", "Ghi chú tại địa chỉ người gửi", "Ghi chú cho tài xế người gửi",
                  //"Tên tài xế", "Mã tài xế", "Giới tính", "Ngày tháng năm sinh", "Địa chỉ thường trú", "CMND/CCCD/Passport",
                ];

    XlsxPopulate.fromBlankAsync().then(async (workbook) => {
      const sheet1 = workbook.sheet(0);
      const sheetData = getSheetData(data5, header);
      const totalColumns = sheetData[0].length;
      // const r = workbook.sheet(0).range("N1:N5");
      // r.value(5);

      sheet1.column("A").width(18).hidden(false);
      sheet1.column("B").width(22).hidden(false);
      sheet1.column("C").width(14).hidden(false);
      sheet1.column("D").width(22).hidden(false);
      sheet1.column("E").width(14).hidden(false);
      sheet1.column("H").width(8).hidden(false);
      sheet1.column("J").width(19).hidden(false);
      sheet1.column("L").width(12).hidden(false);
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


  const data = [
    {
        "State": "Uttar Pradesh",
        "Capital": "Lucknow"
    },
    {
        "State": "Gujarat",
        "Capital": "Gandhinagar"
    },
    {
        "State": "Karnataka",
        "Capital": "Bengaluru"
    },
    {
        "State": "Punjab",
        "Capital": "Chandigarh"
    },
    {
        "State": "Maharashtra",
        "Capital": "Mumbai"
    }
]



const _handleFile = async (e) => {
  console.log('reading input file:');
  const file = e.target.files[0];
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
  });

  //console.log(e.target.files[0]);
  //console.log(workbook);
  console.log("the buffalo should be here");
  console.log(jsonData);
  //console.log(worksheet);
  console.log("the dumnb buffalo");
  // console.log(jsonData[1][0]);
  // console.log(jsonData[2][0]);
  // console.log(jsonData[3][0]);
  console.log(jsonData.length);

  // var length = 0;
  // var i = 2;
  // while(jsonData[i][0] != ""){
  //   console.log('abcxyz')
  //   console.log(jsonData[2].length)
  //   length++;
  //   i++;
  // }

  // console.log(length);
  

  var i = 1;
  var y = 0;
  var a = [];

  var trueLength =  jsonData.length + 1;
  console.log(trueLength);
  //console.log(jsonData[146][0]);
  while(i <= jsonData.length){
    console.log(trueLength);
    if(i == jsonData.length){
      console.log("third")
      console.log(a)
      console.log(a);
      var print = {};
      print = a[0];
      y = 0;
      i--;
      console.log(trueLength);
      var ff = axios.post( 
        'http://localhost:3001/api/createShipment',
       print,
       kk
     );
     console.log("here the moron");
     console.log(print);
     print = "";
     a = [];
     break;
    }
    else if((jsonData[i][0] != "") && (y == 0)){
      console.log("first")
      console.log(a)
      console.log(jsonData[i][0])
      console.log(i)
        a.push({
          "senderName": jsonData[i][0],
          "senderPhone":jsonData[i][1],
          recAddress: [
            {
                "shortAddress": jsonData[i][14],
                "detailAddress": jsonData[i][15],
                "apartmentFloor": jsonData[i][16],
                "noteAddress": jsonData[i][17],
                "name": jsonData[i][12],
                "phone": jsonData[i][13],
                "noteForDriver": jsonData[i][18],
            },
          ],
          senderAddress: [
              {
                  "shortAddress": jsonData[i][21],
                  "detailAddress": jsonData[i][22],
                  "apartmentFloor": jsonData[i][23],
                  "noteAddress": jsonData[i][24],
                  "name": jsonData[i][19],
                  "phone": jsonData[i][20],
                  "noteForDriver": jsonData[i][25],
              },
          ],
          "typeOfShipment": jsonData[i][3],
          "manual": jsonData[i][4],
          "size": {
              "weight": jsonData[i][5],
              "length": jsonData[i][6],
              "width": jsonData[i][7],
              "height": jsonData[i][8],
          },
          "payment": jsonData[i][9],
          "fee": jsonData[i][10],
          "voucher": jsonData[i][11],
      })
      y++;
    }

    else if(jsonData[i][0] == ""){
      console.log("second")
      console.log(a)
      console.log(jsonData[i][0])
      console.log(i)
      console.log(trueLength);
      if(jsonData[i][12] != ""){
        var ff = a[0].recAddress.push({
          "shortAddress": jsonData[i][14],
          "detailAddress": jsonData[i][15],
          "apartmentFloor": jsonData[i][16],
          "noteAddress": jsonData[i][17],
          "name": jsonData[i][12],
          "phone": jsonData[i][13],
          "noteForDriver": jsonData[i][18],
        })
      }
      if(jsonData[i][19] != ""){
        var mm = a[0].senderAddress.push({
          "shortAddress": jsonData[i][21],
          "detailAddress": jsonData[i][22],
          "apartmentFloor": jsonData[i][23],
          "noteAddress": jsonData[i][24],
          "name": jsonData[i][19],
          "phone": jsonData[i][20],
          "noteForDriver": jsonData[i][25],
        })
      }
    }
    
    else if((jsonData[i][0] != "") && (y != 0)){
      console.log("third")
      console.log(a)
      console.log(a);
      var print = {};
      print = a[0];
      y = 0;
      i--;
      console.log(trueLength);
      var ff = 0;
      ff = await axios.post( 
        'http://localhost:3001/api/createShipment',
       print,
       kk
     );
     console.log("here the moron");
     console.log(print);
     print = "";
     a = [];
    }

    i++;
    
  }
}
  const renderTable = () => {
    return product.map(item => {
      var listItems = 'abc';
      // let k = item.recAddress;
      // const pp = data.find(tywin => {
      //   return tywin.Capital === "Mumbai";
      // }); 

      //let yyy = item.recAdress
      //const a = [];
      // a = item;
      console.log('kappa');
      //const shortAddresses = item.recAddress.map(item => item.shortAddress);
      //let ff = item.trucks[0];
      //let listItems2 = ff.map(x => x.quantity);
      console.log(item?.trucks[0]?.quantity);
      console.log(item.shipment_id);
      // try{
      
      //let listItems2 = item.trucks[0].map();
      // }
      // catch(err){
      //   console.log(err);
      // }
      //const arr = [];
      // item.forEach(item => {
      //   const shortAddresses = item.recAddress.map(item => item.shortAddress);
      //   shortAddresses.forEach(item => {
      //     arr.push(item);
      //   });
      // });
      //onClick={() => sayHello('James')}
      return (
        //<tr key={item.shipment_id} onClick={ handleRowClick }>
        <tr key={item.shipment_id} onClick= {() => handleRowClick(item.shipment_id)}>

          <td><div class="left">{item.senderName}</div></td>
          <td><div class="age0">{item.senderPhone}</div></td>
          <td>{item.shipment_id}</td>
          <td>{item.typeOfShipment}</td>
          <td>{item.manual}</td>
          <td class="body1">{item?.size?.weight}</td>
          <td class="body2">{item?.size?.length} x {item?.size?.width} x {item?.size?.height}</td>
          <td>{item.payment}</td>
          <td>{item.fee}</td>
          <td>{item.voucher}</td>
          <td>{item.truck_plate}</td>
          {/* <td>{item.licenseID}</td>
          <td class="body1">{item.licenseType}</td>
          <td class="body2">{item.licenseDate}</td>
          <td>{item.licensePlace}</td>
          <td>{item.taxID}</td>
          <td>{item.bankID}</td>
          <td>{item.bankName}</td>
          <td>{item.bankName}</td> */}

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
          <tr>
            <th class = "left0">Tên người gửi</th>
            <th class = "body">Số điện thoại người gửi</th>
            <th class = "body">Mã đơn hàng</th>
            {/* <th class = "body">Địa chỉ nhận hàng</th>
            <th class = "body">Địa chỉ giao hàng hàng</th>
            <th class = "body">Tài xế giao hàng</th> */}
            <th class = "body">Loại hình vận chuyển</th>
            <th class = "body">Chú thích</th>
            <th class = "body">Cân nặng</th>
            <th class = "body">Kích thước</th>
            <th class = "body">Loại hình thanh toán</th>
            <th class = "body">Chi phí</th>
            <th class = "body">Mã voucher</th>
          </tr>
          

        {renderTable()}

        {/* <tbody>{renderTable()}</tbody> */}
      </table>
      
      <input
      type="file"
      onInput={(e) => _handleFile(e)}
      />
      {/* <button className = "cool1" onClick={importExcel}>
      Import
      </button> */}
      <button className = "cool1" onClick={saveAsExcel}>
      Export Simple
      </button>
      <button className = "cool2" onClick={saveDetailAsExcel}>
      Export Detail
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

