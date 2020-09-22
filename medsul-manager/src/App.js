
import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Layouts/NavBar';
import SignIn from './Screens/SignIn';
import ThongKeComponent from './Screens/ThongKe';
import DieuDuongComponent from './Screens/DieuDuong';
import DichVuComponent from './Screens/DichVu';
import KhachHangComponent from './Screens/KhachHang';
import KhuyenMaiComponent from './Screens/KhuyenMai';
import DonHangComponent from './Screens/DonHang';
import DaoTaoComponent from './Screens/DaoTao';
import ManagerComponent from './Screens/Manager';
import TaiKhoanModal from './Components/ModalTaiKhoan';
import { connect } from 'react-redux';
import { LayDanhSachTinhThanh } from './Redux/actions/TinhThanhAction';
import { layDanhSachDichVuAction, layDanhSachLoaiDichVuAction } from './Redux/actions/DichVuAction';
import TinhThanhComponent from './Screens/TinhThanh';

class App extends Component {
  render() {
    { this.props.isLoginPage && this.props.dispatch(LayDanhSachTinhThanh()); }
    { this.props.isLoginPage && this.props.dispatch(layDanhSachLoaiDichVuAction()); }
    { this.props.isLoginPage && this.props.dispatch(layDanhSachDichVuAction()); }
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          {!this.props.isLoginPage ?
            <Fragment>
              < Route path="/" component={SignIn} />
            </Fragment>
            :
            <Fragment>
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/dichvu" component={DichVuComponent} />
              <Route exact path='/khachhang' component={KhachHangComponent} />
              <Route exact path='/khuyenmai' component={KhuyenMaiComponent} />
              <Route exact path='/daotao' component={DaoTaoComponent} />
              <Route exact path='/donhang' component={DonHangComponent} />
              <Route exact path='/manager' component={ManagerComponent} />
              <Route exact path="/dieuduong" component={DieuDuongComponent} />
              <Route exact path="/tinhthanh" component={TinhThanhComponent} />
              <Route exact path="/thongke" component={ThongKeComponent} />

            </Fragment>}

        </Switch>
        {this.props.isModalThongTin && <TaiKhoanModal />}
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
    isModalThongTin: state.credentials.modalThongTinCaNhan.isShow,
    isLoginPage: state.credentials.credentials.isLogin
  }
}
export default connect(mapStateToProps)(App);
