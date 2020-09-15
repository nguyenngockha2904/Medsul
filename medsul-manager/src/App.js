
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
import { connect } from 'react-redux';
import { LayDanhSachTinhThanh } from './Redux/actions/TinhThanhAction';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/dieuduong" component={DieuDuongComponent} />
          <Route path="/dichvu" component={DichVuComponent} />
          <Route path='/khachhang' component={KhachHangComponent} />
          <Route path='/khuyenmai' component={KhuyenMaiComponent} />
          <Route path='/daotao' component={DaoTaoComponent} />
          <Route path='/donhang' component={DonHangComponent} />
          <Route path="/" component={ThongKeComponent} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    this.props.dispatch(LayDanhSachTinhThanh());
  }
}

export default connect()(App);
