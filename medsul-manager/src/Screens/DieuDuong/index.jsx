import React, { Component } from 'react';
import styled from 'styled-components';
class DieuDuongComponent extends Component {
    render() {
        return (
            <DieuDuongStyled>
                <p className="text-center title">Danh sách điều dưỡng</p>
                <div className="text-left">
                    <div className="btn-group">
                        <button className="btnTab tabDD ac">Điều Dưỡng</button>
                        <button className="btnTab tabDT">Đào Tạo</button>
                    </div>
                </div>

                <div className="contentTabGroup">
                    <div className="contentTab tab_DD">
                        <div className="d-flex justify-content-between groupBtnSearch">
                            <select className="selectStatus">
                                <option value="all" selected>Tất cả</option>
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
                            <button className="btnAdd">Thêm</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        No.
                                        </th>
                                    <th scope="col">
                                        Mã điều dưỡng
                                        </th>
                                    <th scope="col">
                                        Họ tên
                                        </th>
                                    <th scope="col">
                                        Sdt
                                        </th>
                                    <th scope="col">
                                        Giới tính
                                        </th>
                                    <th scope="col">
                                        Chuyên ngành
                                        </th>
                                    <th scope="col">
                                        Tỉnh thành
                                        </th>
                                    <th scope="col">
                                        Đào tạo viên
                                        </th>
                                    <th scope="col">
                                        Trạng thái
                                        </th>
                                    <th scope="col">
                                        Tùy chỉnh
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="tRow">
                                    {/**No. */}
                                    <th>1</th>
                                    {/**Mã điều dưỡng. */}
                                    <td>MD001</td>
                                    {/**Họ tên */}
                                    <td>Nguyễn Ngọc Kha</td>
                                    {/**sdt */}
                                    <td>0329457486</td>
                                    {/**giới tính. */}
                                    <td>Nam</td>
                                    {/**Chuyên ngành. */}
                                    <td>Điều dưỡng</td>
                                    {/**Tỉnh thành. */}
                                    <td>TP.HCM</td>
                                    {/**Đào tạo viên */}
                                    <td>có</td>
                                    {/**Trạng thái */}
                                    <td>Chính thức</td>
                                    {/**Tùy chỉnh */}
                                    <td className="d-flex justify-content-center groupBtn">
                                        <button className="btnCustom">
                                            <img src="" alt="btnViTien" />
                                        </button>
                                        <button className="btnCustom">
                                            <img src="" alt="btnEdit" />
                                        </button>
                                        <button className="btnCustom">
                                            <img src="" alt="btnChuyenNganh" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="contentTab tab_DT">


                    </div>
                </div>

            </DieuDuongStyled>
        );
    }
}

const DieuDuongStyled = styled.div`
    background: #F0FAF8;
    max-height: 1000px;
    height: 617px;
    padding: 1.5rem 1rem;
    .title{
        color: #2CD889;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0.5rem 0;
    }
    .btn-group{
        .btnTab{
            padding: 0.3rem 0.8rem;
            border: 0;
            font-size: 1rem;
            font-weight: 500;
            letter-spacing: 1.5px;
            background: #fff;
            outline:none;
            position: relative;
            transition: all 0.5s;
            &.tabDD{
                border-top-left-radius: 10px;
            }
            &.tabDT{
                border-top-right-radius: 10px;
            }
            &::after{
                content: '';
                position: absolute;
                height: 3px;
                background: #2CD889;
                width: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transition: all 0.5s;
            }
            &:hover{
                &::after{
                    width:100%;
                }
            }
            &:focus{
                &::after{
                    width:100%;
                }
            }
            
            &.ac{
                color:#2CD889;
                &::after{
                    width:100%;
                }
            }
        }
    }
    .contentTabGroup{
        background: #fff;
        padding: 1rem 0.8rem;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        .contentTab{
            .groupBtnSearch{
                margin: 1rem 0.5rem;
                .selectStatus{
                    border: none;
                    padding: 0.3rem;
                    border-radius: 5px;
                    outline: none;
                    letter-spacing: 0.8px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    color:#fff;
                    background: #2CD889;
                    transition: all 0.2s;
                    &:hover , &:focus{
                        box-shadow: 1px 2px 4px -0.5px #80808080;
                        color: #2CD889 ;
                        background:#fff;
                    }
                    
                }
                .groupSearch{
                    box-shadow: 1px 2px 4px -0.5px #80808080;
                    letter-spacing: 0.8px;
                    font-size: 0.8rem;
                    border-radius:10px;
                    .form-contro , .btnSearch{
                        outline: none;
                        border: none;
                        font-weight: 500;
                    }
                    .form-contro{
                        border-radius: 10px;
                        padding: 0 1rem;
                    }
                    .btnSearch{
                        color:#fff;
                        background: #2CD889;
                        padding: 0 1rem;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                        border-radius:10px;
                        transition: all 0.2s;
                        &:hover, &:focus{
                            background: #fff;
                            color: #2CD889;
                        }
                    }
                }
                .btnAdd{
                    border-radius: 10px;
                    border: none;
                    padding: 0 1rem;
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
            }
            .table{
                thead{
                    tr{
                        th{
                            border: none;
                            white-space: nowrap;
                            text-align: center;
                            color: #CBD1D9;
                        }
                    }
                }
                tbody{
                    tr{
                        th{
                            text-align: center;
                        }
                        td{
                            font-size: 0.8rem;
                            white-space: nowrap;
                            text-align: center;
                            
                            
                            
                            &.groupBtn{
                                .btnCustom{

                                }
                            }
                        }
                    }
                    
                }
            }



            &.tab_DD{

            }
            &.tab_DT{

            }
        }
    }

`;


export default DieuDuongComponent;