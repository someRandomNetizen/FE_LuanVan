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
    axios.post('https://365truck.fdssoft.com/api/getShipment',
    
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
            title="Th???ng K?? Chi Ti???t"

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
          title="Th??ng Tin Chi Ti???t ????n H??ng"

        />

        <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">T??n Ng?????i G???i</span>
                <span className="kt-widget12__value">{post.senderName}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? ??i???n Tho???i Ng?????i G???i</span>
                <span className="kt-widget12__value">{post.senderPhone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">M?? ????n H??ng</span>
                <span className="kt-widget12__value">{post.shipment_id}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Lo???i H??nh Thanh To??n	</span>
                <span className="kt-widget12__value">{post.payment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chi Ph??</span>
                <span className="kt-widget12__value">{post.fee}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Lo???i H??nh V???n Chuy???n</span>
                <span className="kt-widget12__value">{post.typeOfShipment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ch?? Th??ch</span>
                <span className="kt-widget12__value">{post.manual}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">C??n N???ng</span>
                <span className="kt-widget12__value">{post.size.weight}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">K??ch Th?????c</span>
                <span className="kt-widget12__value">{post.size.length} x {post.size.width} x {post.size.height}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">M?? Voucher</span>
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
                <span className="kt-widget12__desc">T??n Ng?????i G???i</span>
                <span className="kt-widget12__value">{c.name}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? ??i???n Tho???i</span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? T???ng C??n H??? </span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Ch?? Cho ?????a Ch???	</span>
                <span className="kt-widget12__value">{c.noteAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Ch?? Cho T??i X???</span>
                <span className="kt-widget12__value">{c.noteForDriver}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">?????a Ch???</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">?????a Ch??? Chi Ti???t</span>
                <span className="kt-widget12__value">{c.detailAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? T???ng C??n H???</span>
                <span className="kt-widget12__value">{c.apartmentFloor}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kinh ?????</span>
                <span className="kt-widget12__value">{c?.coord?.latitude}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">V?? ?????</span>
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
                <span className="kt-widget12__desc">T??n Ng?????i G???i</span>
                <span className="kt-widget12__value">{c.name}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? ??i???n Tho???i</span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? T???ng C??n H??? </span>
                <span className="kt-widget12__value">{c.phone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Ch?? Cho ?????a Ch???	</span>
                <span className="kt-widget12__value">{c.noteAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ghi Ch?? Cho T??i X???</span>
                <span className="kt-widget12__value">{c.noteForDriver}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">?????a Ch???</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">?????a Ch??? Chi Ti???t</span>
                <span className="kt-widget12__value">{c.detailAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? T???ng C??n H???</span>
                <span className="kt-widget12__value">{c.apartmentFloor}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Kinh ?????</span>
                <span className="kt-widget12__value">{c?.coord?.latitude}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">V?? ?????</span>
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
                <span className="kt-widget12__desc">T??n ng?????i g???i</span>
                <span className="kt-widget12__value">{c.shortAddress}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">S??? ??i???n tho???i ng?????i g???i</span>
                <span className="kt-widget12__value">{post.senderPhone}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">M?? ????n h??ng</span>
                <span className="kt-widget12__value">{post.shipment_id}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Lo???i h??nh thanh to??n	</span>
                <span className="kt-widget12__value">{post.payment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Chi ph??</span>
                <span className="kt-widget12__value">{post.fee}</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Lo???i h??nh v???n chuy???n</span>
                <span className="kt-widget12__value">{post.typeOfShipment}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Ch?? th??ch</span>
                <span className="kt-widget12__value">{post.manual}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">C??n n???ng</span>
                <span className="kt-widget12__value">{post.size.weight}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">K??ch th?????c</span>
                <span className="kt-widget12__value">{post.size.length} x {post.size.width} x {post.size.height}</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">M?? voucher</span>
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
          title="Th??ng Tin Chi Ti???t Ng?????i G???i"

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
          title="Th??ng Tin Chi Ti???t Ng?????i Nh???n"

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
          title="Th??ng Tin Chi Ti???t T??i X???"

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
      <div>T??n ng?????i th???c hi???n giao d???ch: </div>
      <div>{post.senderName}</div>
      <div>S??? ??i???n tho???i ng?????i g???i:</div>
      <div>{post.senderPhone}</div>
      <div>M?? ????n h??ng:</div>
      <div>{post.shipment_id}</div>
      <div>Lo???i h??nh v???n chuy???n:</div>
      <div>{post.typeOfShipment}</div>
      <div>Ch?? th??ch:</div>
      <div>{post.manual}</div>
      <div>C??n n???ng:</div>
      <div>{post.size.weight}</div>
      <div>K??ch th?????c:</div>
      <div>{post.size.length} x {post.size.width} x {post.size.height}</div>
      <div>Lo???i h??nh thanh to??n:</div>
      <div>{post.payment}</div>
      <div>Chi ph??:</div>
      <div>{post.fee}</div>
      <div>M?? voucher:</div>
      <div>{post.voucher}</div>
      <div>{post.truck_plate}</div>
      <br></br>
      <div>Th??ng tin chi ti???t ng?????i nh???n ????n:</div>
      <div>{
           post.recAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>T??n ng?????i nh???n: </div>
              <div>{c.name}</div>
              <div>S??? ??i???n tho???i: </div>
              <div>{c.phone}</div>
              <div>?????a ch???: </div>
              <div>{c.shortAddress}</div>
              <div>?????a ch??? chi ti???t: </div>
              <div>{c.detailAddress}</div>
              <div>S??? t???ng c??n h???: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi ch?? t???i ?????a ch???: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi ch?? cho t??i x???</div>
              <div>{c.noteForDriver}</div>
              </div>)
            })
      }</div>
      <br></br>
      <div>Th??ng tin chi ti???t ng?????i g???i ????n:</div>
      <div>{
           post.senderAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>T??n ng?????i g???i: </div>
              <div>{c.name}</div>
              <div>S??? ??i???n tho???i: </div>
              <div>{c.phone}</div>
              <div>?????a ch???: </div>
              <div>{c.shortAddress}</div>
              <div>?????a ch??? chi ti???t: </div>
              <div>{c.detailAddress}</div>
              <div>S??? t???ng c??n h???: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi ch?? t???i ?????a ch???: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi ch?? cho t??i x???</div>
              <div>{c.noteForDriver}</div>
              </div>)
            })
      }</div>
      <br></br>
      <div>Th??ng tin chi ti???t T??i X??? nh???n ????n:</div>
      <div>{
           post.senderAddress.map((c, p) => {
            return(
              <div>
              <br></br>
              <div>T??n ng?????i g???i: </div>
              <div>{c.name}</div>
              <div>S??? ??i???n tho???i: </div>
              <div>{c.phone}</div>
              <div>?????a ch???: </div>
              <div>{c.shortAddress}</div>
              <div>?????a ch??? chi ti???t: </div>
              <div>{c.detailAddress}</div>
              <div>S??? t???ng c??n h???: </div>
              <div>{c.apartmentFloor}</div>
              <div>Ghi ch?? t???i ?????a ch???: </div>
              <div>{c.noteAddress}</div>
              <div>Ghi ch?? cho t??i x???</div>
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




