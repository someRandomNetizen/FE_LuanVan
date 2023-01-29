import React from "react";

export default function OrdersWidget() {
  return (
    <div className="kt-widget1">
      <div className="kt-widget1__item ng-star-inserted">
        <div className="kt-widget1__info">
          <h3 className="kt-widget1__title">Giao Hàng Thành Công</h3>
          <span className="kt-widget1__desc">Đơn hàng giao thành công tuần rồi</span>
        </div>

        <span className="kt-widget1__number kt-font-success">+13,4%</span>
      </div>

      <div className="kt-widget1__item ng-star-inserted">
        <div className="kt-widget1__info">
          <h3 className="kt-widget1__title">Giao Hàng Thất bại</h3>
          <span className="kt-widget1__desc">Đơn hàng giao thất bại tuần rồi</span>
        </div>
        <span className="kt-widget1__number kt-font-danger">-7,8%</span>
      </div>

      <div className="kt-widget1__item ng-star-inserted">
        <div className="kt-widget1__info">
          <h3 className="kt-widget1__title">Đánh Giá Tiêu Cực</h3>
          <span className="kt-widget1__desc">Đánh giá tiêu cực tuần rồi</span>
        </div>
        <span className="kt-widget1__number kt-font-brand">-27,9%</span>
      </div>
    </div>
  );
}
