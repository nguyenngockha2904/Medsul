
import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/dieuduong" component={DieuDuongComponent} />
          <Route exact path="/dichvu" component={DichVuComponent} />
          <Route exact path='/khachhang' component={KhachHangComponent} />
          <Route exact path='/khuyenmai' component={KhuyenMaiComponent} />
          <Route exact path='/daotao' component={DaoTaoComponent} />
          <Route exact path='/donhang' component={DonHangComponent} />
          <Route exact path='/manager' component={ManagerComponent} />
          <Route path="/" component={ThongKeComponent} />
        </Switch>
        {this.props.isModalThongTin && <TaiKhoanModal />}
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(LayDanhSachTinhThanh());
    this.props.dispatch(layDanhSachLoaiDichVuAction());
    this.props.dispatch(layDanhSachDichVuAction());
  }
}
const mapStateToProps = state => {
  return {
    isModalThongTin: state.credentials.modalThongTinCaNhan.isShow
  }
}
export default connect(mapStateToProps)(App);
