import React, { Component } from 'react';
import styled from 'styled-components';


class DaoTaoComponent extends Component {
    render() {
        return (
            <ListAdminStyles>
                <div className="list_manager">
                    <div className="tableTab">
                        <div className="d-flex justify-content-between groupBtnSearch">
                            <select className="selectStatus" defaultValue="all">
                                <option value="all">Tất cả</option>
                                <option value="thuviec">Thử việc</option>
                                <option value="nghiviec">Nghỉ việc</option>
                                <option value="chinhthuc">Chính thức</option>
                            </select>


                            <div className="d-flex justify-content-center groupSearch">
                                <input type="text" className="form-contro" placeholder="Mã, Họ tên ...." />
                                <div className="input-group-append">
                                    <button className="btnSearch" type="button">Tìm kiếm</button>
                                </div>
                            </div>
                            <button className="btnAdd" onClick={this.handleShowModalDieuDuong}>Thêm</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr >
                                    <th scope="col">No.</th>
                                    <th scope="col">Họ Tên</th>
                                    <th scope="col">SDT</th>
                                    <th scope="col">Giới Tính</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Trạng Thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">1</th>
                                    <th scope="col">Nguyễn Trọng Dương</th>
                                    <th scope="col">0981034840</th>
                                    <th scope="col">Nam</th>
                                    <th scope="col">trongduong101199@gmail.com</th>
                                    <th scope="col">Đang làm</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Thêm điều dưỡng</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body">
                            <div className="titleGroup">Thông tin cá nhân</div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group">
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Tên Manager: </label>
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
                                    <label>* Tài Khoản: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="sdt"
                                    />
                                </div>
                                <div className="form-group  secondFormright">
                                    <label >* Mật Khẩu: </label>
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
                                <div className="form-group secondFormright secondFormleft ">
                                    <label >Email: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email"
                                    />
                                </div>

                                <div className="form-group secondFormright secondFormleft ">
                                    <label >Số Điện Thoại: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email"
                                    />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">


                                <div className="form-group secondFormleft  width3">
                                    <label>Trạng thái: </label>
                                    <select className="form-contro">
                                        <option>Thử việc</option>
                                        <option>Chính thức</option>
                                        <option>Thực tập</option>
                                    </select>
                                </div>
                                <div className="form-group secondFormright">
                                    <label >Địa chỉ: </label>
                                    <input type="text" className="form-contro"
                                        name="diaChi"
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
            </ListAdminStyles >
        );
    }
}
const ListAdminStyles = styled.div`
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
   
   
    .list_manager{
        padding-bottom: 3rem;
        .tableTab{
            background-color:#fff;
            margin:2px 1em 1em 1em;
            padding:1em;
            border-radius:1em;
            .search{
                width:400px;
                margin:auto;
            }
            .btnSearch{
                border-radius: 10px;
                border: none;
                padding: 0 2rem;
                letter-spacing: 0.8px;
                font-size: 0.8rem;
                font-weight: 500;
                color:#fff;
                background: #2CD889;
                outline: none;
                transition: all 0.2s;
                &:hover , &:focus{
                    box-shadow: 1px 2px 4px -0.5px #80808080;
                    color: #2CD889 ;
                    background:#fff;
                }
            }
            .btnAdd{
                border-radius: 10px;
                border: none;
                padding: 0 2rem;
                letter-spacing: 0.8px;
                font-size: 0.8rem;
                font-weight: 700;
                color:#fff;
                background: #2CD889;
                outline: none;
                transition: all 0.2s;
                &:hover , &:focus{
                    box-shadow: 1px 2px 4px -0.5px #80808080;
                    color: #2CD889 ;
                    background:#fff;
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
            .form-control{
                border-radius: 12px;
                padding: 0.375rem 0.2rem;
            }
            .btn-group{
                border-radius: 15px;
                padding:1.5em;
            }
            .headtable{
                margin: 0.5em 0;
                p{
                    margin: 0;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 700;
                    color: #646D82;
                }
            }
            .table{
                thead{
                    color:#CBD1D9;
                    tr{
                        th{
                            border:none;
                        }
                    }
                }
                tbody{
                    .tRow{
                        cursor: pointer;
                        color:#646D82;
                        .groupBtn{
                            .btnCustom{
                                border: none;
                                background: none;
                                cursor: pointer;
                                outline: none;
                                margin:0 0.5em;
                                border: none;
                                border-radius: 25px;
                                padding: 13px 13px;
                                transition:all 0.2s;
                                &:hover{
                                    background: #d4f5ee;
                                }
                            }
                        }
                        &:hover{
                            background-color:#F0FAF0;
                        }
                    }
                }
                    
            }
        }
        
    }
`;


export default DaoTaoComponent;