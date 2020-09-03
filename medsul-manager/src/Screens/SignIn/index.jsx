import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_LOGIN } from '../../Redux/actions/type';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bgSignin from '../../img/bgSignin.png';
import logo from '../../img/icon.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
class SignIn extends Component {
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
                            <Formik
                                initialValues={{
                                    taiKhoan: '',
                                    matKhau: '',
                                }}
                                onSubmit={() => { console.log('đăng nhập') }}
                                render={
                                    (formikProps) => (
                                        <Form>
                                            <div className="form-group">
                                                <Field type="text" className="form-control1" name="taikhoan" onChange={formikProps.handleChange} placeholder="Tài khoản" ></Field>
                                            </div>
                                            <div className="form-group">
                                                <Field type="password" className="form-control1" name="password" onChange={formikProps.handleChange} placeholder="Mật khẩu"></Field>
                                            </div>
                                            <div className=" d-flex justify-content-between service">
                                                <div className="form-check">
                                                    <Field type="checkbox" className="form-check-input" id="txtrememberM" />
                                                    <label className="form-check-label" htmlFor="txtrememberM">Remember me</label>
                                                </div>
                                                <a href='#'>Forgot Password</a>
                                            </div>
                                            <div className="text-center">
                                                <Link className="btn_login btn btn-success"
                                                    onClick={() => {
                                                        this.props.dispatch({
                                                            type: SET_LOGIN,
                                                            payload: false
                                                        })
                                                    }}
                                                    to='/'
                                                >Đăng nhập</Link>
                                            </div>
                                        </Form>
                                    )
                                }

                            >

                            </Formik>
                        </div>

                    </div>
                </div>






                {/** test signin
                    <Link className="btn btn-primary" onClick={() => {
                    this.props.dispatch({
                        type: SET_LOGIN,
                        payload: false
                    })
                }}
                    to='/'
                >Login</Link>
                */}
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
            }
            .form-group{
                .form-control1{
                    font-size: 13px;
                    border: none;
                    border-bottom: 1px solid #E9E9F0;
                    outline: none !important;
                    width: 100%;
                    border-radius: 0.25rem;
                    margin: 10px 0;
                    padding:10px 0 ;
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
            .btn_login{
                margin: 0.5em 0;
                background-color: #2CD889;
                border: none;
                padding: 0.6em 2em;
                font-size: 1em;
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