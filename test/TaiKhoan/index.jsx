import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../../img/AvatarAdmin.jpg';

class TaiKhoanComponent extends Component {
    render() {
        return (
            <div>
                <TaiKhoanStyle>
                    <div className="PersonalInformation">
                        <h1 className="Title-Personal">Thông Tin Cá Nhân</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img">
                                    <img src={img} width="90%" height="100%" />
                                </div>
                            </div>
                            <div className="form-group col-md-4">
                                <p className="text-title-input">Họ Tên</p>
                                <input type="text" className="form-control" id="firstName" />
                                <p className="text-title-input">Số Điện Thoại</p>
                                <input type="tel" className="form-control" id="firstName" />
                                <p className="text-title-input">CMND</p>
                                <input type="text" className="form-control" id="firstName" /> 
                                <p className="text-title-input">Ngày Sinh</p>
                                <input type="date" id="start" name="trip-start" className="form-control" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15" />
                                <p className="text-title-input">Giới Tính: Nam</p>
                            </div>
                            <div className="form-group col-md-4">
                                <p className="text-title-input">Tài Khoản</p>
                                <input type="text" className="form-control" id="firstName" />
                                <p className="text-title-input">Mật Khẩu</p>
                                <input type="password" className="form-control" id="firstName" />
                                <p className="text-title-input">Email</p>
                                <input type="email" className="form-control" id="firstName" />
                                <p className="text-title-input">Địa Chỉ</p>
                                <textarea id="comment" name="comment" className="form-control" cols={57} rows={3} maxLength={65525} required="required" defaultValue={""} />
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-success btnEdit">Chỉnh Sửa</button>
                        </div>
                    </div>
                </TaiKhoanStyle>
            </div>
        );
    }
}
const TaiKhoanStyle = styled.div`
    padding: 2em 2.5em;
    background:#F0FAF8;

    .btnEdit{
        margin:auto;
        background: #2CD889;
        color: #fff;
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0.5em 3.5em;
        border: none;
        font-size: 0.9em;
        border-radius: 1em;
        outline: none;
       
    }
    .PersonalInformation{
        background-color:#fff;
        margin:10px 5em 5em 5em;
        padding:1em;
        border-radius:1em;
        .Title-Personal{
            font-size:60px;
            text-align:center;
            color:#2CD889;
            padding:1em;
        }
        .form-group{
            .text-title-input{
                padding:0.5em;
                font-size:18px;
                color:#6282A3;
            }
            .form-control{
                border-radius: 12px;
                padding: 0.375rem 0.2rem;
            }
        }
    }
`;
export default TaiKhoanComponent; 