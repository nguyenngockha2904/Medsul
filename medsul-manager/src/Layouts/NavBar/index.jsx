import React, { Component } from 'react';
import icon from '../../img/icon.svg';
import { NavLink, Link } from 'react-router-dom';
import styled, { ThemeConsumer } from 'styled-components';
import icon_toggle from '../../img/toggle_navIcon.svg';
import icon_close from '../../img/closeSideIcon.svg';
class NavBar extends Component {
    state = {
        sidepanel: false,
    }
    handleOpensidepanel = (value) => () => {
        this.setState({
            sidepanel: value,
        }, console.log(value));
    }
    render() {
        return (
            <NavbarContainer>
                <nav className="navbar navbar-expand-lg navbar-light py-2">
                    <a className="navbar-brand" href="#"><img src={icon} alt="icon.svg" className='img-fluid' /></a>
                    <button className="navbar-toggler" type="button" onClick={this.handleOpensidepanel(true)}>
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="d-flex w-100 justify-content-between">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/" exact className="nav-link" href="#">THỐNG KÊ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/dieuduong" exact className="nav-link" href="#">ĐIỀU DƯỠNG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/dichvu" exact className="nav-link" href="#">DỊCH VỤ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/khachhang" exact className="nav-link" href="#">KHÁCH HÀNG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/khuyenmai" exact className="nav-link" href="#">KHUYẾN MÃI</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/donhang" exact className="nav-link" href="#">ĐƠN HÀNG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ color: '#2CD889' }} to="/daotao" exact className="nav-link" href="#">ĐÀO TẠO</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    ADMIN
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown"

                                >
                                    <a className="dropdown-item" href="#">TÀI KHOẢN</a>
                                    <a className="dropdown-item" href="#">CÀI ĐẶT</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">THOÁT</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={this.state.sidepanel ? 'sidepanel w30' : 'sidepanel w-0'}>
                        <div className="d-flex justify-content-end px-3 pt-3">
                            <a className="closebtn" onClick={this.handleOpensidepanel(false)}><span className="closeImg"></span></a>
                        </div>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/" exact className="nav-link" href="#" onClick={this.handleOpensidepanel(false)}>THỐNG KÊ</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/dieuduong" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>ĐIỀU DƯỠNG</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/dichvu" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>DỊCH VỤ</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/khachhang" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>KHÁCH HÀNG</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/khuyenmai" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>KHUYẾN MÃI</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/donhang" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>ĐƠN HÀNG</NavLink>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/daotao" exact className="nav-link" onClick={this.handleOpensidepanel(false)}>ĐÀO TẠO</NavLink>
                        <div className="hrtag"></div>
                        <NavLink activeStyle={{ color: '#2CD889' }} to="/taikhoan" exact className="nav-link custom" href="#" onClick={this.handleOpensidepanel(false)}>TÀI KHOẢN</NavLink>
                        <Link activeStyle={{ color: '#2CD889' }} to="/caidat" exact className="nav-link custom" onClick={this.handleOpensidepanel(false)}>CÀI ĐẶT</Link>
                        <Link to="/thoat" exact className="nav-link custom" onClick={this.handleOpensidepanel(false)}>THOÁT</Link>
                    </div>
                </nav>
            </NavbarContainer >
        );
    }
}
export default NavBar;

const NavbarContainer = styled.div`
    .navbar{
        box-shadow: 0 -1px 2px 2px #646d8275;
        padding: 0 1em !important;
        .navbar-brand{
            .img-fluid{
                width:6.2em;
            }
        }
        .navbar-toggler{
            border:none;
            .navbar-toggler-icon{
                background-image: url(${icon_toggle});
                width: 1.2em;
                height: 1.3em;
            }
        }
        .navbar-collapse{
            
        }
        .navbar-nav{
            .nav-item{
                margin: 0 15px;
                .nav-link{
                    position: relative;
                    margin-top: 7px;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    word-spacing: 1px;
                    color: rgba(0, 0, 0, 0.5);
                    padding: 1em;
                    &::before{
                        content: '';
                        position: absolute;
                        height: 3px;
                        width: 0%;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        transition:all 0.5s;
                    }
                    &:hover {
                        &::before{
                            background: #646D82;
                            width:100%;
                        }
                        
                    }
                    &.active{
                        &::before{
                            background: #2CD889;
                            width:100%;
                        }
                    }
                }
                &.dropdown{
                    .dropdown-toggle{
                        
                    }
                    .dropdown-menu{
                        left: -105%;
                        .dropdown-item{
                            font-size: 13px;
                            font-weight: 400;
                            letter-spacing: 0.5px;
                            word-spacing: 1px;
                            color:#646D82;
                            text-align:right;
                            &:active{
                                background-color: #2CD889;
                            }
                        }
                    }
                }
            }   
        }
        .sidepanel{
            width: 0;
            position: fixed;
            z-index: 1;
            height: 100%;
            top: 0;
            right: 0;
            background-color: #fff;
            overflow-x: hidden;
            transition: 0.5s;
            box-shadow: 1px 0px 21px 1px #03030336;
            .nav-link, .taikhoan{
                font-size: 13px;
                font-weight: 600;
                letter-spacing: 0.5px;
                word-spacing: 1px;
                color: #646D82;
                white-space: nowrap;
                &.custom{
                    text-align:center;
                }
            }
              .closebtn {
                right: 25px;
                .closeImg{
                    display: inline-block;
                    width: 1.1em;
                    height: 1.1em;
                    vertical-align: middle;
                    content: "";
                    margin-bottom: 11px;
                    background: no-repeat center center;
                    background-size: 100% 100%;
                    background-image: url(${icon_close});
                }
              }
              .hrtag{
                content: '';
                height: 1px;
                background: #2CD889;
                margin: 10px 17px;
              }
        }
        .w30{
            width:30% !important;
        }
        @media only screen and (max-width: 1201px) {
           
            .navbar-nav{
                .nav-item{
                    .nav-link{
                        font-size:13px;
                    }
                }
            }
          }
        @media only screen and (max-width: 992px) {
            .navbar-brand{
                .img-fluid{
                    width:5em;
                }
            }
            .navbar-nav{
                display:none;
            }
          }
          @media only screen and (max-width: 600px) {
            .w30{
                width:45% !important;
            }
           
          }
    }
    
`;

