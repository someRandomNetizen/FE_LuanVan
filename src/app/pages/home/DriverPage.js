
// import React from "react";
                  
// export function MyPage() {
//     return <h1>Hello!</h1>
// }   
import { toAbsoluteUrl } from "../../../_metronic";
import { ContactSupportOutlined, Search } from "@material-ui/icons";
import axios from "axios";
import React, {useState, useEffect, useRef} from "react";

import './styles.css'
import './Driver.css'

import { get } from "../../crud/auth.crud";

import { saveAs } from "file-saver";
import XlsxPopulate from "xlsx-populate";
import * as XLSX from 'xlsx';
import { Link } from "react-router-dom";

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
        'https://365truck.fdssoft.com/api/showProduct',
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
    'https://365truck.fdssoft.com/api/showProduct',
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
      { Manufacturer: item.Manufacturer,
        Product_Category: item.Product_Category,
        Series: item.Series,
        Product: item.Product,
        Core: item.Core,
        RF_Frequency: item.RF_Frequency,
        Brand: item.Brand,
        Data_Bus_Width: item.Data_Bus_Width,
        Interface_Type: item.Interface_Type,
        Operating_Supply_Voltage: item.Operating_Supply_Voltage,
        Unit_Weight: item.Unit_Weight,
        Product_id: item.Product_id,
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
    let header = ["Manufacturer","Product Category","Series","Product","Core","RF Frequency","Brand","Data Bus Width","Interface Type","Operating Supply Voltage","Unit Weight","Product id"];

    XlsxPopulate.fromBlankAsync().then(async (workbook) => {
      const sheet1 = workbook.sheet(0);
      const sheetData = getSheetData(data4, header);
      const totalColumns = sheetData[0].length;

      sheet1.column("A").width(18).hidden(false);
      sheet1.column("B").width(35).hidden(false);
      sheet1.column("C").width(9).hidden(false);
      sheet1.column("D").width(20).hidden(false);
      sheet1.column("E").width(18).hidden(false);
      sheet1.column("F").width(25).hidden(false);
      sheet1.column("G").width(18).hidden(false);
      sheet1.column("H").width(25).hidden(false);
      sheet1.column("I").width(23).hidden(false);
      sheet1.column("J").width(25).hidden(false);
      sheet1.column("K").width(18).hidden(false);
      sheet1.column("L").width(25).hidden(false);


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
        <tr key={item.user_id}>
          <td><div class="left">{item.full_name}</div></td>
          <td><div class="age0">{item.user_id}</div></td>
          <td>{item.gender}</td>
          <td>{item.birth}</td>

          <td class="body2">{item.phone_number}</td>
          

          {/* <td>{item.user_name}</td>
          <td>{item.user_id}</td> */}

        </tr>
      )
    })
  }

  const Table = ({ data }) => {
    console.log("love")
    console.log(data);
    return (
      <table id="mytable">
        <tbody>
          <tr>
            <th class = "body">Product id</th>
            <th class = "body">Manufacturer</th>
            <th class = "body">Series</th>
            <th class = "body">Product</th>
            <th class = "body">Core</th>
            <th class = "body">RF Frequency</th>
            <th class = "body">Data Bus Width</th>
            <th class = "body">Interface Type</th>
          </tr>
          {data.map((item) => (
            <tr>
            <td>{item.Product_id}</td>
            <td>{item.Manufacturer}</td>
            <td>{item.Series}</td>
            <td class="body9">{item.Product}</td>
            <td class="body9">{item.Core}</td>
            <td class="body12">{item.RF_Frequency}</td>
            <td>{item.Data_Bus_Width}</td>
            <td>{item.Interface_Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


  let ppp = [];
  ppp = product;
  console.log(product);

//   console.log(product.filter(user=>user.full_name.includes("am")));
  

//excel import here
//{



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


  console.log("the buffalo should be here");
  console.log(jsonData);

  console.log("the dumnb buffalo");

  console.log(jsonData.length);

  

  var i = 1;
  var y = 0;
  var a = [];


  while(i < jsonData.length){
    a.push({
      "Manufacturer":jsonData[i][0],
      "Product_Category":jsonData[i][1],
      "Series":jsonData[i][2],
      "Product":jsonData[i][3],
      "Core":jsonData[i][4],
      "RF_Frequency":jsonData[i][5],
      "Brand":jsonData[i][6],                      
      "Data_Bus_Width":jsonData[i][7],
      "Interface_Type":jsonData[i][8],
      "Operating_Supply_Voltage":jsonData[i][9],
      "Unit_Weight":jsonData[i][10],
    })
    y = a[0];
    var ff = await axios.post( 
      'https://365truck.fdssoft.com/api/createProduct',
     y,
     kk
    );
    console.log(a);
    console.log("here y: ");
    console.log(y);
    y = 0;
    a = [];
    i++;

    

    
  }
}
  
//}



 
  const inputFile = useRef(null) 

  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };


  //search{
  const [query, setQuery] = useState("");
  // const keys = ["Manufacturer","Product_Category","Series","Product","RF_Frequency","Brand","Data_Bus_Width","Interface_Type","Operating_Supply_Voltage","Unit_Weight","Product_id"];
  const keys = ["Product_id"];
  const search = (data) => {
    console.log("love2")
    console.log(data)
        return data.filter((item) =>
      keys.some((key) => item[key]?.toString().toLowerCase().includes(query))
    );
  };
  //}
  return (
    <div className="app">
      <input type='file' id='file' ref={inputFile} onInput={(e) => _handleFile(e)} style={{display: 'none'}}/>
      <a style={{
                backgroundImage: `url(${toAbsoluteUrl("/media/logos/import2.png")})`
              }}
            onClick={onButtonClick}
            class="round-button" >
            
    
      </a>


  
    
      <a style={{
                backgroundImage: `url(${toAbsoluteUrl("/media/logos/excel1.png")})`
              }}
              onClick={saveAsExcel}
              class="round-button2"
               >           
      </a> 
      <input
        className="search2"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toString().toLowerCase())}
      />

    {<Table data={search(product)}/>}
        
    </div>
  );
}
