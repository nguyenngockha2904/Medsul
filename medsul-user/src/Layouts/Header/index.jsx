import React, { Component } from 'react';
import Logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import styled from 'styled-components';
import icon from '../../Assets/icon.svg';
import { SHOW_COMPONENT_SERVICE, HIRE_COMPONENT_SERVICE } from '../../Redux/action/type';
import { createAction } from '../../Redux/action';
class Headers extends Component {

  handleClickShowComponentService = (item) => () => {
    // console.log(item);
    this.props.dispatch(createAction(HIRE_COMPONENT_SERVICE, {}));
    this.props.dispatch(createAction(SHOW_COMPONENT_SERVICE, item));
  }
  renderDVbyLDVid = (idLVD) => {
    return this.props.serviceList.filter(dv => dv.loaiDichVuID === idLVD).map((item, index) => {
      return (
        <li className="dropdown-link" key={index}>
          <a onClick={this.handleClickShowComponentService(item)}>{item.tenDichVu}</a>
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
      <StyledNav>
        <header>
          <div className="container">
            <div className="logo-container">
              <img src={icon} />
            </div>
            <div className="nav-btn">
              <div className="nav-links ml-auto">
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
                    <a href="#">TRỢ GIÚP</a>
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
      </StyledNav>
    )
  }
}
const StyledNav = styled.div`

ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  header {
    position: sticky;
    top: 0px;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.6);
    background-color: white;
  }
  
  .container {
    max-width: 85rem;
    padding: 0 1rem;
    margin: 0 auto;
    display: flex;
    position: relative;
  }
  
  .logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    img{
        width:30%;
        height:auto;
    }
  }
  
  .nav-btn {
    flex: 2;
    display: flex;
  }
  .nav-links {
  }
  .nav-links > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }
  
  .nav-link {
    position: relative;
    display: block;
    padding: 0.5rem 0.2rem;
  }
  
  .nav-link > a {
    line-height: 2rem;
    color: #504f4f;
    padding: 0 0.5rem;
    letter-spacing: 1px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.5s;
    white-space: nowrap;
    font-family: "Roboto", sans-serif;
  }
  .nav-link a:hover {
    text-decoration: none;
    color: #22e38a;
  }
  
  .nav-link > a > i {
    margin-left: 0.2rem;
  }
  
  .nav-links li {
    position: relative;
  }
  
  .nav-links li::before {
    content: "";
    width: 0;
    height: 3px;
    background-image: linear-gradient(to right, #b1f8d7, #22e38a);
    position: absolute;
    bottom: -1px;
    left: 0;
    transition: all 0.5s;
  }
  
  .nav-links li.active:before,
  .nav-links li:hover:before {
    width: 100%;
  }
  
  .dropdown {
    position: absolute;
    top: 120%;
    left: 0;
    width: 15rem;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
  }
  
  .dropdown ul {
    position: relative;
  }
  
  .dropdown-link > a {
    display: flex;
    background-color: #22e38a;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    align-items: center;
    justify-content: space-between;
    transition: 0.3s;
    text-transform: uppercase;
  }
  
  .dropdown-link:hover > a {
    background-color: #e7f8f5;
    color: #22e38a;
    font-weight: 700;
    text-decoration: none;
  }
  
  .dropdown-link:not(:nth-last-child(2)) {
    border-bottom: 1px solid #efefef;
  }
  
  .dropdown-link i {
    transform: rotate(-90deg);
  }
  
  .arrow {
    position: absolute;
    width: 11px;
    height: 11px;
    top: -5.5px;
    left: 32px;
    background-color: #22e38a;
    transform: rotate(45deg);
    cursor: pointer;
    transition: 0.3s;
    z-index: -1;
  }
  
  .dropdown-link:first-child:hover ~ .arrow {
    background-color: #e7f8f5;
  }
  
  .dropdown-link {
    position: relative;
  }
  
  .dropdown.second {
    top: 0;
    left: 100%;
    padding-left: 0.8rem;
    cursor: pointer;
    transform: translateX(10px);
  }
  
  .dropdown.second .arrow {
    top: 10px;
    left: -5.5px;
  }
  
  .nav-link:hover > .dropdown,
  .dropdown-link:hover > .dropdown {
    transform: translate(0, 0);
    opacity: 1;
    pointer-events: auto;
  }
  
  .hamburger-menu-container {
    flex: 1;
    display: none;
    align-items: center;
    justify-content: flex-end;
  }
  
  .hamburger-menu {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .hamburger-menu div {
    width: 1.6rem;
    height: 3px;
    border-radius: 3px;
    background-color: rgb(97, 96, 96);
    position: relative;
    z-index: 1001;
    transition: 0.5s;
  }
  
  .hamburger-menu div:before,
  .hamburger-menu div:after {
    content: "";
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: rgb(97, 96, 96);
    border-radius: 3px;
    transition: 0.5s;
  }
  
  .hamburger-menu div:before {
    transform: translateY(-7px);
  }
  
  .hamburger-menu div:after {
    transform: translateY(7px);
  }
  
  #check {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
    z-index: 90000;
    cursor: pointer;
    opacity: 0;
    display: none;
  }
  
  #check:checked ~ .hamburger-menu-container .hamburger-menu div {
    background-color: transparent;
  }
  
  #check:checked ~ .hamburger-menu-container .hamburger-menu div:before {
    transform: translateY(0) rotate(-45deg);
  }
  
  #check:checked ~ .hamburger-menu-container .hamburger-menu div:after {
    transform: translateY(0) rotate(45deg);
  }
  
  @keyframes animation {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  @media (max-width: 1200px) {
    .nav-links {
      margin-left: 0;
    }
    .nav-link > a {
      padding: 0 0.6rem;
    }
  }
  
  @media (max-width: 1145px) {
    .nav-link > a {
      padding: 0 0.4rem;
    }
  }
  @media (max-width: 1085px) {
    .nav-link > a {
      padding: 0 0.2rem;
    }
  }
  
  @media (max-width: 1080px) {
    .hamburger-menu-container {
      display: flex;
    }
  
    #check {
      display: block;
    }
  
    .nav-btn {
      position: fixed;
      height: calc(100vh - 3rem);
      top: 2.5rem;
      left: 0;
      width: 100%;
      background-color: #22e38a;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      overflow-x: hidden;
      overflow-y: auto;
      transform: translateX(100%);
      transition: 0.65s;
    }
  
    #check:checked ~ .nav-btn {
      transform: translateX(0);
    }
  
    #check:checked ~ .nav-btn .nav-link,
    #check:checked ~ .nav-btn .log-sign {
      animation: animation 0.5s ease forwards var(--i);
    }
  
    .nav-links {
      flex: initial;
      width: 100%;
    }
  
    .nav-links > ul {
      flex-direction: column;
    }
    .nav-links > ul > li {
      display: contents;
    }
    .nav-links ul > li > a {
      width: 100%;
    }
  
    .nav-link {
      width: 100%;
      opacity: 0;
      transform: translateY(15px);
    }
  
    .nav-link > a {
      line-height: 1;
      padding: 1.6rem 2rem;
    }
  
    .nav-link:hover > a {
      transform: scale(1);
      background-color: #d2f1eb;
    }
  
    .dropdown,
    .dropdown.second {
      position: initial;
      top: initial;
      left: initial;
      transform: initial;
      opacity: 1;
      pointer-events: auto;
      width: 100%;
      padding: 0;
      background-color: #d2f1eb;
      display: none;
    }
  
    .nav-link:hover > .dropdown,
    .dropdown-link:hover > .dropdown {
      display: block;
    }
    .nav-link:focus > .dropdown,
    .dropdown-link:focus > .dropdown {
      display: block;
    }
  
    .nav-link:hover > a > i,
    .dropdown-link:hover > a > i {
      transform: rotate(360deg);
    }
  
    .dropdown-link > a {
      background-color: transparent;
      color: rgb(71, 71, 71);
      padding: 1.2rem 2rem;
      line-height: 1;
    }
  
    .dropdown.second .dropdown-link > a {
      padding: 1.2rem 2rem 1.2rem 3rem;
    }
  
    .dropdown.second .dropdown.second .dropdown-link > a {
      padding: 1.2rem 2rem 1.2rem 2 0rem;
    }
  
    .dropdown-link:not(:nth-last-child(2)) {
      border-bottom: none;
    }
  
    .arrow {
      z-index: 1;
      background-color: #22e38a;
      left: 10%;
      transform: scale(1.1) rotate(45deg);
      transition: 0.5s;
    }
  
    .nav-link:hover .arrow {
      background-color: #d2f1eb;
    }
  
    .dropdown .dropdown .arrow {
      display: none;
    }
  
    .dropdown-link:hover > a {
      background-color: #22e38a;
      color: #fff;
    }
  
    .dropdown-link:first-child:hover ~ .arrow {
      background-color: #d2f1eb;
    }
  
    .nav-link > a > i {
      font-size: 1.1rem;
      transform: rotate(-90deg);
      transition: 0.7s;
    }
  
    .dropdown i {
      font-size: 1rem;
      transition: 0.7s;
    }
  }
  
`;
const mapStateToProps = (state) => ({
  serviceListLDV: state.service.ListLDV,
  serviceList: state.service.ListDV
})

export default connect(mapStateToProps)(Headers);


