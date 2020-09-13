import React, { Component } from 'react';
import styled from 'styled-components';
class ModalDieuDuong extends Component {
    render() {
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Thêm điều dưỡng</h4>
                            <button type="button" className="close">×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body">
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft ac">
                                    <label >Mã điều dưỡng: </label>
                                    <input type="text" className="form-contro"
                                        name="maDieuDuong"
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Mã đào tạo viên: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="maDaoTaoVien"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Tên điều dưỡng: </label>
                                <input type="text" className="form-contro"

                                    name="tenDieuDuong"
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Giới tính: </label>
                                    <div className="d-flex justify-content-center">
                                        <p className="mr-2">
                                            <input className="radGen" type="radio" name="gioiTinh" defaultChecked />Nam
                                        </p>
                                        <p className="mx-4"></p>
                                        <p>
                                            <input className="radGen" type="radio" name="gioiTinh" />Nữ
                                        </p>
                                    </div>
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Chuyên ngành: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="chuyenNganh"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Số điện thoại: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="sdt"
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Password: </label>
                                    <input type="password" className="form-contro"
                                        /*disabled={true}*/
                                        name="password"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Ngày sinh: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngaySinh"
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Email: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Tỉnh thành: </label>
                                    <select className="form-contro">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="form-group secondFormleft secondFormright">
                                    <label>Trạng thái: </label>
                                    <select className="form-contro">
                                        <option>Thử việc</option>
                                        <option>Chính thức</option>
                                        <option>Thực tập</option>
                                    </select>
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label>Là đào viên: </label>
                                    <select className="form-contro" defaultValue="khong">
                                        <option value="co">Có</option>
                                        <option value="khong">Không</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Địa chỉ: </label>
                                <input type="text" className="form-contro"
                                    name="diaChi"
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Số TK ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soTkNganHang"
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Tên ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="tenNganHang"
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Số CMND: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soCMND"
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Nơi cấp: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="noiCapCMND"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Ngày cấp: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngayCapCMND"
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Đặc điểm nhận dạng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="dacDiemNhanDang"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label >Địa chỉ thường chú: </label>
                                <input type="text" className="form-contro"
                                    name="diaChiThuongChu"
                                />
                            </div>

                            <div className="form-group">
                                <label >Quê quán: </label>
                                <input type="text" className="form-contro"
                                    name="queQuan"
                                />
                            </div>

                            <div className="d-flex justify-content-between">

                                <div className="form-group secondFormleft">
                                    <label >Ảnh CMND mặt trước: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhCmndMatTruoc"
                                        />
                                        <button type="button" className="btnChooseImage">Chọn hình</button>
                                    </div>
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Ảnh CMND mặt sau: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhCmndMatSau"
                                        />
                                        <button type="button" className="btnChooseImage">Chọn hình</button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Ảnh chân dung: </label>
                                <div className="d-flex">
                                    <input type="text" className="form-contro"
                                        name="anhChanDung"
                                    />
                                    <button type="button" className="btnChooseImage">Chọn hình</button>
                                </div>
                            </div>

                            <div className="text-right">
                                <button type="submit" className="btn btn-danger btnAccept" data-dismiss="modal">Xác nhận</button>
                            </div>
                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModel>
        );
    }
}
const StyledModel = styled.div`

position: fixed;
top: 0;
left: 0;
z-index: 1050;
display:block;
width: 100%;
height: 100%;
background: #00000047;
overflow: hidden;
overflow-y: scroll;
outline: 0;
transition: 0.5s all;
::-webkit-scrollbar{
    width: 0px; 
}
.modalService-dialog{
margin: 5% auto;
max-width:600px;
&.modal-lg{
    max-width: 1000px;
}
.modalService-content{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    .modalService-header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem 1rem;
        border-top-left-radius: calc(0.3rem - 1px);
        border-top-right-radius: calc(0.3rem - 1px);
        .modalService-title{
                color:#646D82;
                text-transform:uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                font-size: 1.6em;
        }
        border:none;
    }
    .modalService-body{
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
        border:none;
        .form-group{
            label{
                font-size: 0.8em;
                margin:0;
                color:#000;
                font-weight: 700;
                letter-spacing: 1px;
            }
            .radGen{
                margin:0 10px;
            }
            .btnChooseImage{
                font-size: 0.8em;
                margin:0;
                font-weight: 700;
                letter-spacing: 1px;
                white-space: nowrap;
                padding: 0 0.5rem;
                border-radius: 10px;
                border: none;
                outline:none;
                color: #2CD889 ;
                background:#fff;
                box-shadow: 1px 2px 4px -0.5px #80808080;
                &:hover , &:focus{
                    color:#fff;
                    background: #2CD889;
                }
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
                color: #495057;
                background-color: #fff;
                border-radius: 0.25rem;
                border:none;
                border-bottom:1px solid #CBD1D9;
                outline: none;
                &.mul_text{
                    border: 1px solid #CBD1D9;
                    text-align:left;
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
        }  
    }
    .btnAccept{
        border-radius:20px;
        background-color:#2CD889;
        border:none;
    }
    .modalService-footer{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        padding: 0.75rem;
        border-top: 1px solid #dee2e6;
        border-bottom-right-radius: calc(0.3rem - 1px);
        border-bottom-left-radius: calc(0.3rem - 1px);
        border:none;
        
    }
}
}


`;
export default ModalDieuDuong;