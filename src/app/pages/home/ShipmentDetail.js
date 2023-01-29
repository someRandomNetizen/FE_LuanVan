// import React from "react";
                  
// export function MyPage() {
//     return <h1>Hello!</h1>
// }   
import  { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  Portlet,
  PortletBody,
  PortletHeader,
  PortletHeaderToolbar
} from "../../partials/content/Portlet";
import { metronic } from "../../../_metronic";
import QuickStatsChart from "../../widgets/QuickStatsChart";
import CustomOrderStatisticsChart from "../../widgets/CustomOrderStatisticsChart";
import OrderStatisticsChart from "../../widgets/OrderStatisticsChart";
import OrdersWidget from "../../widgets/OrdersWidget";
import SalesBarChart from "../../widgets/SalesBarChart";
import SalesBarChart2 from "../../widgets/SalesBarChart2";
import DownloadFiles from "../../widgets/DownloadFiles";
import NewUsers from "../../widgets/NewUsers";
import LatestUpdates from "../../widgets/LatestUpdates";
import BestSellers from "../../widgets/BestSellers";
import RecentActivities from "../../widgets/RecentActivities";
import PortletHeaderDropdown from "../../partials/content/CustomDropdowns/PortletHeaderDropdown";
import { ContactSupportOutlined } from "@material-ui/icons";
import axios from "axios";
import React, {useState, useEffect} from "react";

import './ShipmentDetail.css';
import { get } from "../../crud/auth.crud";
import { TableRow } from "@material-ui/core";
import { useNavigate, useLocation } from 'react-router-dom';


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
  


export function ShipmentDetail(props) {

  const chartOptions = useMemo(
    () => ({
      chart1: {
        data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
        color: brandColor,
        border: 3
      },

      chart2: {
        data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
        color: dangerColor,
        border: 3
      },

      chart3: {
        data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
        color: successColor,
        border: 3
      },

      chart4: {
        data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
        color: primaryColor,
        border: 3
      }
    }),
    [brandColor, dangerColor, primaryColor, successColor]
  );

  const { brandColor, dangerColor, successColor, primaryColor } = useSelector(
    state => ({
      brandColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.brand"
      ),
      dangerColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.danger"
      ),
      successColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.success"
      ),
      primaryColor: metronic.builder.selectors.getConfig(
        state,
        "colors.state.primary"
      )
    })
  );
  

  let kk = localStorage.getItem('accessToken3');

  const {state} = useLocation();

  console.log(state) // here you get your post data
  


  //const { state } = this.props.location
  console.log('son goku');
  
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.post('localhost:3001/api/getShipment',
    
    {id: state },
    kk).then((response) => {
      setPost(response.data);
    });
  }, []);
  let i = 1;
  // let aaa = 0;
  // if(post?.senderAdress[aaa]?.shortAddress){
  //   console.log('piss off');
  // }
  // console.log(post?.senderAdress[0]?.shortAddress);
  let kkk = [];
  kkk = post?.senderAdress;

  /////////////////////////
  // function createPost() {
  //   axios
  //     .post('https://365truck.fdssoft.com/server/getShipment',
  //       {id: 2 },
  //       kk)
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  if (!post) return "No post!"


  const renderTable2 = () => {
    return post.senderAddress.map((c, p) => {
      return(
        <div>
      <div>{c?.coord?.latitude}</div>
      <div>{c.shortAddress}</div>
      </div>
      )
      
    })
    
  }

  


  const renderTable3 = () => {

      return(
      
      <div>
          <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
              <PortletBody fluid={true}>
                {renderTable()}
              </PortletBody>
          </Portlet>

          <Portlet className="kt-portlet--height-fluid-half kt-portlet--border-bottom-brand">
              <PortletBody fluid={true}>
                  
              </PortletBody>
           </Portlet>
      </div>

    )
    
  }
  const renderTable4 = () => {

    return(
    
    <div>
        <div>
        <Portlet fluidHeight={true}>
          <PortletHeader
            title="Thống Kê Chi Tiết"

          />

          <PortletBody>
            <CustomOrderStatisticsChart />
            
          </PortletBody>
        </Portlet>
      </div>
    </div>

  )
  
}

const renderMainDetail = () => {

  return(
  
  <div>
      <div>
      <Portlet fluidHeight={true}>
        <PortletHeader
          title="Thông Tin Chi Tiết Đơn Hàng"

        />

        <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Tên Người Gửi</span>
                <span className="kt-widget12__value">{post.senderName}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Điện Thoại Người Gửi</span>
                <span className="kt-widget12__value">{post.senderPhone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Mã Đơn Hàng</span>
                <span className="kt-widget12__value">{post.shipment_id}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Loại Hình Thanh Toán	</span>
                <span className="kt-widget12__value">{post.payment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chi Phí</span>
                <span className="kt-widget12__value">{post.fee}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Loại Hình Vận Chuyển</span>
                <span className="kt-widget12__value">{post.typeOfShipment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chú Thích</span>
                <span className="kt-widget12__value">{post.manual}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Cân Nặng</span>
                <span className="kt-widget12__value">{post.size.weight}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kích Thước</span>
                <span className="kt-widget12__value">{post.size.length} x {post.size.width} x {post.size.height}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Mã Voucher</span>
                <span className="kt-widget12__value">{post.voucher}</span>
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
      </Portlet>
    </div>
  </div>
)
}

const bodySender = () => {

  return post.senderAddress.map((c, p) => {
    return(
  
      <PortletBody>

        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Tên Người Gửi</span>
                <span className="kt-widget12__value">{c.name}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Điện Thoại</span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Tầng Căn Hộ </span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Chú Cho Địa Chỉ	</span>
                <span className="kt-widget12__value">{c.noteAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Chú Cho Tài Xế</span>
                <span className="kt-widget12__value">{c.noteForDriver}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Địa Chỉ</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Địa Chỉ Chi Tiết</span>
                <span className="kt-widget12__value">{c.detailAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Tầng Căn Hộ</span>
                <span className="kt-widget12__value">{c.apartmentFloor}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kinh Độ</span>
                <span className="kt-widget12__value">{c?.coord?.latitude}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Vĩ Độ</span>
                <span className="kt-widget12__value">{c?.coord?.longtitude}</span>
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
    )}
)

}

const bodyRec = () => {

  return post.recAddress.map((c, p) => {
    return(
  
      <PortletBody>

        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Tên Người Gửi</span>
                <span className="kt-widget12__value">{c.name}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Điện Thoại</span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Tầng Căn Hộ </span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Chú Cho Địa Chỉ	</span>
                <span className="kt-widget12__value">{c.noteAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Chú Cho Tài Xế</span>
                <span className="kt-widget12__value">{c.noteForDriver}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Địa Chỉ</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Địa Chỉ Chi Tiết</span>
                <span className="kt-widget12__value">{c.detailAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số Tầng Căn Hộ</span>
                <span className="kt-widget12__value">{c.apartmentFloor}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kinh Độ</span>
                <span className="kt-widget12__value">{c?.coord?.latitude}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Vĩ Độ</span>
                <span className="kt-widget12__value">{c?.coord?.longtitude}</span>
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
    )}
)

}

const bodyDriver = () => {

  if(post.driver != null){
  return post.driver.map((c, p) => {
    return(
  
      <PortletBody>

        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Tên người gửi</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Số điện thoại người gửi</span>
                <span className="kt-widget12__value">{post.senderPhone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Mã đơn hàng</span>
                <span className="kt-widget12__value">{post.shipment_id}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Loại hình thanh toán	</span>
                <span className="kt-widget12__value">{post.payment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chi phí</span>
                <span className="kt-widget12__value">{post.fee}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Loại hình vận chuyển</span>
                <span className="kt-widget12__value">{post.typeOfShipment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chú thích</span>
                <span className="kt-widget12__value">{post.manual}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Cân nặng</span>
                <span className="kt-widget12__value">{post.size.weight}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kích thước</span>
                <span className="kt-widget12__value">{post.size.length} x {post.size.width} x {post.size.height}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Mã voucher</span>
                <span className="kt-widget12__value">{post.voucher}</span>
              </div>
            </div>
          </div>
        </div>
        </PortletBody>
    )}
)

}
}



const renderSender = () => {

return(
  
  <div>
      <div>
      <Portlet fluidHeight={true}>
        <PortletHeader
          title="Thông Tin Chi Tiết Người Gửi"

        />

        {bodySender()}


      </Portlet>
    </div>
  </div>
  )

  
}

const renderRec = () => {


  return(
  
  <div>
      <div>
      <Portlet fluidHeight={true}>
        <PortletHeader
          title="Thông Tin Chi Tiết Người Nhận"

        />

        {bodyRec()}


      </Portlet>
    </div>
  </div>
  )

  
}

const renderDriver = () => {

  return(
  <div>
      <div>
      <Portlet fluidHeight={true}>
        <PortletHeader
          title="Thông Tin Chi Tiết Tài Xế"

        />

        {bodyDriver()}


      </Portlet>
    </div>
  </div>
  )

  
}
  
  const renderTable = () => {


      return(


      <tr key={post.shipment_id}>
      <div>Tên người thực hiện giao dịch: </div>
      <div>{post.senderName}</div>
      <div>Số điện thoại người gửi:</div>
      <div>{post.senderPhone}</div>
      <div>Mã đơn hàng:</div>
      <div>{post.shipment_id}</div>
      <div>Loại hình vận chuyển:</div>
      <div>{post.typeOfShipment}</div>
      <div>Chú thích:</div>
      <div>{post.manual}</div>
      <div>Cân nặng:</div>
      <div>{post.size.weight}</div>
      <div>Kích thước:</div>
      <div>{post.size.length} x {post.size.width} x {post.size.height}</div>
      <div>Loại hình thanh toán:</div>
      <div>{post.payment}</div>
      <div>Chi phí:</div>
      <div>{post.fee}</div>
      <div>Mã voucher:</div>
      <div>{post.voucher}</div>
      <div>{post.truck_plate}</div>
      <br></br>
      <div>Thông tin chi tiết người nhận đơn:</div>
      <div>{
           post.recAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>Tên người nhận: </div>
              <div>{c.name}</div>
              <div>Số điện thoại: </div>
              <div>{c.phone}</div>
              <div>Địa chỉ: </div>
              <div>{c.shortAddress}</div>
              <div>Địa chỉ chi tiết: </div>
              <div>{c.detailAddress}</div>
              <div>Số tầng căn hộ: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi chú tại địa chỉ: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi chú cho tài xế</div>
              <div>{c.noteForDriver}</div>
              </div>)
            })
      }</div>
      <br></br>
      <div>Thông tin chi tiết người gửi đơn:</div>
      <div>{
           post.senderAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>Tên người gửi: </div>
              <div>{c.name}</div>
              <div>Số điện thoại: </div>
              <div>{c.phone}</div>
              <div>Địa chỉ: </div>
              <div>{c.shortAddress}</div>
              <div>Địa chỉ chi tiết: </div>
              <div>{c.detailAddress}</div>
              <div>Số tầng căn hộ: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi chú tại địa chỉ: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi chú cho tài xế</div>
              <div>{c.noteForDriver}</div>
              </div>)
            })
      }</div>
      <br></br>
      <div>Thông tin chi tiết Tài Xế nhận đơn:</div>
      <div>{
           post.senderAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>Tên người gửi: </div>
              <div>{c.name}</div>
              <div>Số điện thoại: </div>
              <div>{c.phone}</div>
              <div>Địa chỉ: </div>
              <div>{c.shortAddress}</div>
              <div>Địa chỉ chi tiết: </div>
              <div>{c.detailAddress}</div>
              <div>Số tầng căn hộ: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi chú tại địa chỉ: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi chú cho tài xế</div>
              <div>{c.noteForDriver}</div>
              </div>)
            })
      }</div>
      </tr>
      )



  }


  return (
    <div className="App">
      {/* <h1 id="user_name"></h1>
      <table id="user_id">  */}

      
      {renderMainDetail()}
      {renderSender()}
      {renderRec()}
      {renderDriver()}
    </div>
  )

}




