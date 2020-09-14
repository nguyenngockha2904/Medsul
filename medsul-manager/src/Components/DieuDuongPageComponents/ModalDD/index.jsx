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
                            <div className="titleGroup">Thông tin cá nhân</div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft ac width3">
                                    <label >Mã điều dưỡng: </label>
                                    <input type="text" className="form-contro "
                                        name="maDieuDuong"
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Tên điều dưỡng: </label>
                                    <input type="text" className="form-contro"

                                        name="tenDieuDuong"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft ">
                                    <label>Giới tính: </label>
                                    <div className="form-contro d-flex justify-content-end">
                                        <p className="mr-2">
                                            <input className="radGen" type="radio" name="gioiTinh" defaultChecked />Nam
                                    </p>
                                        <p className="mx-4"></p>
                                        <p>
                                            <input className="radGen" type="radio" name="gioiTinh" />Nữ
                                    </p>
                                    </div>
                                </div>
                                <div className="form-group secondFormleft secondFormright">
                                    <label>* Số điện thoại: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="sdt"
                                    />
                                </div>
                                <div className="form-group  secondFormright">
                                    <label >* Password: </label>
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
                                <div className="form-group secondFormright secondFormleft ac">
                                    <label >Email: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email"
                                    />
                                </div>
                                <div className="form-group secondFormleft secondFormright">
                                    <label>Trạng thái: </label>
                                    <select className="form-contro">
                                        <option>Thử việc</option>
                                        <option>Chính thức</option>
                                        <option>Thực tập</option>
                                    </select>
                                </div>
                                <div className="form-group secondFormright">
                                    <label>Tỉnh thành: </label>
                                    <select className="form-contro">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">


                                <div className="form-group secondFormleft ac width3">
                                    <label>Là đào viên: </label>
                                    <select className="form-contro" defaultValue="khong">
                                        <option value="co">Có</option>
                                        <option value="khong">Không</option>
                                    </select>
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Địa chỉ: </label>
                                    <input type="text" className="form-contro"
                                        name="diaChi"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft ac width3">
                                    <label>Số TK ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soTkNganHang"
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Tên ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="tenNganHang"
                                    />
                                </div>
                            </div>
                            <div className="titleGroup">Chứng minh nhân dân</div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label>Số CMND: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soCMND"
                                    />
                                </div>
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Nơi cấp: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="noiCapCMND"
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    <label>Ngày cấp: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngayCapCMND"
                                    />
                                </div>
                            </div>



                            <div className="form-group">
                                <label >Nơi đăng ký thường chú: </label>
                                <input type="text" className="form-contro"
                                    name="diaChiThuongChu"
                                />
                            </div>

                            <div className="form-group">
                                <label >Nguyên quán: </label>
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
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Ảnh CMND mặt sau: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhCmndMatSau"
                                        />
                                        <button type="button" className="btnChooseImage">Chọn hình</button>
                                    </div>
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Ảnh chân dung: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhChanDung"
                                        />
                                        <button type="button" className="btnChooseImage">Chọn hình</button>
                                    </div>
                                </div>
                            </div>


                            <div className="text-right" style={{ padding: '1rem 0' }}>
                                <button type="submit" className="btn btn-danger btnAccept" >Xác nhận</button>
                            </div>
                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModel>
        );
    }
}
export const StyledModel = styled.div`

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
        .modals-title{
                color:#646D82;
                text-transform:uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                font-size: 1.6em;
        }
        .close{
            outline: none;
        }
        
        border:none;
    }
    .btnNapTien{
        border: none;
        padding: 0.3rem 0.6rem;
        border-radius: 20px;
        margin:0;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1px;
        white-space: nowrap;
        outline:none;
        color: #2CD889 ;
        background:#fff;
        box-shadow: 1px 2px 4px -0.5px #80808080;
        
        &:hover , &:focus{
            color:#fff;
            background: #2CD889;
        }
    }
    .TongTien_Title{
        text-align: center;
        font-size: 0.8em;
        margin:1rem;
        color:#000;
        font-weight: 700;
        letter-spacing: 1px;
           .subtitle{
            align-self: center;
           }
           .price{
            padding: 0;
            color: #2CD889 ;
            margin-bottom: 1.5rem ;
            font-size: 2rem;
            .vnd{
                margin: 0 0.5rem;
                font-weight: 200;
                color: #000 ;
                letter-spacing: 3px;
                font-size: 1rem;
                vertical-align: middle;
            }
           }
    }
    .TongTien_history{
        
        padding: 0 1rem;
        border-top: 1px solid #0000003b !important;
        padding-bottom: 1rem;
        min-height: 300px;
        .history_title{
            font-weight: 500;
            letter-spacing: 2px;
            font-size: 1rem;
            margin: 1rem 0;
        }
        .history_item{
            padding:1rem;
            margin:0.3rem 0;
            border-bottom: 1px solid #0000003b;
            letter-spacing: 2px;
            .title_historyItem{
                font-size: 0.7rem;
            }
            .date_historyItem{
                font-size: 0.6rem;
                font-weight: 700;
            }
            .price_historyItem{
                font-size: 0.7rem;
                text-align:right;
            }
            .status_historyItem{
                text-align:right;
                font-weight: 500;
                color: #2CD889 ;
                font-size: 0.6rem;
            }
        }
    }
    .modalService-body{
        
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
        border:none;
        .titleGroup{
            font-size: 1.2em;
            margin:0;
            color:#000;
            font-weight: 700;
            letter-spacing: 1px;
            padding: 1rem 0;
            &.bb{
                border-bottom:1px solid #0000003b !important;
            }
        }
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
            &.width3{
                width:30.6%;
            }
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
        &:hover , &:focus{
            color: #2CD889 ;
        background:#fff;
        box-shadow: 1px 2px 4px -0.5px #80808080;
        }
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