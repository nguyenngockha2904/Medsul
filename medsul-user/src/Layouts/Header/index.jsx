import React, { Component } from 'react';
import Logo from '../../Assets/logo.png';
import './styles.css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'


class Headers extends Component {
    renderDVbyLDVid = (idLVD) => {
        return this.props.serviceList.filter(dv => dv.loaiDichVuID === idLVD).map((item, index) => {
            return (
                <li className="dropdown-link" key={index}>
                    <Link to={`/service/${item.dichVu_Id}`}>{item.tenDichVu}</Link>
                </li>
            )
        })
    }
    renderLDV = () => {
        return this.props.serviceListLDV.map((item, index) => {
            return (
                <li className="dropdown-link" key={index}>
                    <a >{item.tenLoaiDichVu}<i className="fas fa-caret-down" style={{ transform: 'rotate(-90deg)' }} /></a>
                    <div className="dropdown second">
                        <ul>
                            {this.renderDVbyLDVid(item.loaiDichVu_Id)}
                            <div className="arrow" />
                        </ul>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <header>

                    <div className="container">
                        <input type="checkbox" id="check" />
                        <div className="logo-container">
                            <img src={Logo} />
                        </div>
                        <div className="nav-btn">
                            <div className="nav-links">
                                <ul>
                                    <li className="nav-link" >
                                        <Link to="/">GIỚI THIỆU</Link>
                                    </li>
                                    <li className="nav-link" >
                                        <Link to='#'>DỊCH VỤ<i className="fas fa-caret-down" /></Link>
                                        <div className="dropdown">
                                            <ul>
                                                {this.renderLDV()}
                                                <div className="arrow" />
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-link" >
                                        <Link to="/recruitment">TUYỂN DỤNG</Link>
                                    </li>
                                    <li className="nav-link" >
                                        <Link to="/introduction">TRỞ THÀNH MEDSULER</Link>
                                    </li>
                                    <li className="nav-link" >
                                        <Link to="/recruitment">HỢP TÁC</Link>
                                    </li>
                                    <li className="nav-link" >
                                        <a href="#">TRỢ GIÚP<i className="fas fa-caret-down" /></a>
                                        <div className="dropdown">
                                            <ul>
                                                <li className="dropdown-link">
                                                    <a href="#">Hỏi đáp </a>
                                                </li>
                                                <li className="dropdown-link">
                                                    <a href="#">Liên hệ</a>
                                                </li>
                                                <div className="arrow" />
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hamburger-menu-container">
                            <div className="hamburger-menu">
                                <div />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    serviceListLDV: state.service.ListLDV,
    serviceList: state.service.ListDV
})

export default connect(mapStateToProps)(Headers);


