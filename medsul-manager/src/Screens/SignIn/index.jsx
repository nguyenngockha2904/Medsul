import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import bgSignin from '../../img/bgSignin.png';
import logo from '../../img/icon.svg';
import { Login } from '../../Redux/actions/LoginAction';
import swal from 'sweetalert';
class SignIn extends Component {
    state = {
        credentials: {
            userName: '',
            passWord: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.credentials);
        this.props.dispatch(Login(this.state.credentials.userName, this.state.credentials.passWord.toLowerCase(), (name, role) => {
            { role === 0 ? this.props.history.replace('/manager') : this.props.history.replace('/dieuduong') }
            swal({
                title: `Hi! ${name}`,
                text: "Chào mừng bạn đến với hệ thống quản trị của MedSul !!",
                icon: "success",
            })
        }, () => {
            swal({
                title: "Thất bại?",
                text: "Có thể Tài khoản hoặc mật khẩu của bạn đã sai!!",
                icon: "info",
            })
        }));
    }
    render() {
        return (
            <SignUpcontainer>
                <div className="wrapper row m-0">
                    <div className="div_left p-0 col-lg-6 col-0">
                        <img src={bgSignin} alt="" className="img-fluid" />
                    </div>
                    <div className=" p-0 col-lg-6 col-12 mx-auto w-50 align-self-center">
                        <div className="div_right w-50 mx-auto">
                            <p className="text-center icon-d"><img src={logo} alt="logo" className="img-fluid" /></p>
                            <p className="subtitle">Chào mừng bạn đã quay lại với hệ thống MedSul!</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Tài khoản:</label>
                                    <input type="text" className="form-contro" name="userName" value={this.state.credentials.userName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label >Mật khẩu</label>
                                    <input type="password" className="form-contro" name="passWord" value={this.state.credentials.passWord}
                                        onChange={this.handleChange}
                                    />
                                </div>


                                <div className="text-center">
                                    <button className="btn_login btn btn-success btnAccept"
                                    >Đăng nhập</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </SignUpcontainer>
        );
    }
}
const SignUpcontainer = styled.div`
    
    .wrapper{
        .div_left{
            img{
                width:100%;
            }
        }
        .div_right{
            .icon-d{
                .img-fluid{

                }
            }
            .subtitle{
                color:#646D82;
                margin: 2em 0;
                text-align: center;
                font-weight: 400;
                letter-spacing: 1px;
                font-size: 0.8em;
            }
            .form-group{
                label{
                    margin:0;
                    color:#646D82;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 0.8em;
                }
                .radGen{
                    margin:0 10px;
                }
                .form-contro{
                    display: block;
                    text-align:center;
                    width: 100%;
                    height: calc(1.5em + 0.75rem + 2px);
                    padding: 0 0.75rem;
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color:#646D82;
                    background-color: #fff;
                    border-radius: 0.25rem;
                    border:none;
                    border-bottom:1px solid #CBD1D9;
                    outline: none;
                    &.mul_text{
                        border: 1px solid #CBD1D9;
                        text-align:left;
                    }
                    &.gioitinh{
                        border:none;
                    }
                    
                }
                
                &.ac{
                    label{
                        color: #49505794;
                    }
                    .form-contro{
                    color: #49505794;
                    }
                }
                
                &.secondFormleft, &.secondFormright{
                    width: 100%;
                }
                &.secondFormleft{
                    margin-right:1em;
                }
                &.secondFormright{
                    margin-left:1em;
                }
                &.width3{
                    width:30.6%;
                }
            }  
            .service{
                margin:1em 0;
                .form-check{
                    .form-check-label{
                        color:#646D82;
                    }
                }
                a{
                    color:#646D82;
                }
            }
            .btnAccept{
                border-radius:10px;
                color: #fff ;
                background-color:#2CD889;
                border:none;
                font-size: 0.8em;
                font-weight: 700;
                letter-spacing: 1px;
                white-space: nowrap;
                transition: 0.2s all;
                &:hover {
                    color: #2CD889 ;
                background:#fff;
                box-shadow: 1px 2px 4px -0.5px #80808080;
                }
            }
        }
        @media only screen and (max-width: 993px) {
            .div_left{
                display:none;
            }
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
          }
        @media only screen and (max-width: 686px) {
            .div_right{
                width:80% !important;
            }
            
          }
    }
`;
export default connect()(SignIn);