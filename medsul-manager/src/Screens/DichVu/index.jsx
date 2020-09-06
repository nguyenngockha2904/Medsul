import React, { Component } from 'react';
import styled from 'styled-components';
import ServiceItem from '../../Components/ServicePageComponents/Services_item';
import CategoryServices from '../../Components/ServicePageComponents/categoryServices';
import ServiceComponents from '../../Components/ServicePageComponents/ServiceComponents';
import ModalCategoryService from '../../Components/ServicePageComponents/modalCategoryService';
import ModalService from '../../Components/ServicePageComponents/modalService';
class DichVuComponent extends Component {
    render() {
        return (
            <DichVuComponentStyles>
                {/**<div className="tab">
                    <p className="h6">Dịch Vụ</p>
                    <p className="subtab">Chào mừng đến với MedSul</p>
                </div> */}

                <div className="dichvu">
                    <div className="GroupTitle">
                        <p className="title ">
                            Danh sách tất cả dịch vụ
                        </p>
                        <p className="datecurrent">Dịch vụ 8/20</p>
                    </div>

                    <div className="dichVuContent">
                        {/**table CategoriesService */}
                        <CategoryServices />

                        {/**table Service */}
                        <ServiceComponents />

                    </div>
                    <ModalCategoryService />
                    <ModalService />
                </div>
            </DichVuComponentStyles>

        );
    }
}

const DichVuComponentStyles = styled.div`
    background: #F0FAF8;
    .tab{
        padding: 10px 2%;
        .h6{
            margin:0;
            color:#4E4E4E;
            font-size:15px;
            letter-spacing:1px;
        }
        .subtab{
            margin:0;
            color:#22CE8B;
            font-size:13px;
            letter-spacing:1px;
        }
    }
    
    .dichvu{
        .GroupTitle{
            text-align:center;
            padding:10px;
            .title{
                margin:0;
                color:#2CD889;
                letter-spacing:1px;
                text-transform: uppercase;
                font-weight: 600;
            }
            .datecurrent{
                margin:0;
                color:#646D82;
                letter-spacing:1px;
                font-size:13px;
                font-weight:600;
            }
        }
        .dichVuContent{
            .tableTab{
                background-color:#fff;
                margin:2px 1em 1em 1em;
                padding:1em;
                border-radius:1em;
                .headtable{
                    margin: 0.5em 0;
                    p{
                        margin: 0;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-weight: 700;
                        color: #646D82;
                    }
                    .btnAdd{
                        background: #2CD889;
                        color: #fff;
                        font-weight: 600;
                        letter-spacing: 1px;
                        padding: 0.5em 1em;
                        border: none;
                        font-size: 0.9em;
                        border-radius: 1em;
                        outline: none;
                    }
                }
                .table{
                    height: 200px;
                    overflow-y: scroll;
                    overflow-x: unset;
                    scroll-behavior: smooth;
                    height: 12em;
                    thead{
                        color:#CBD1D9;
                        text-align:center;
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
                            text-align:center;
                            .groupBtn{
                                .btnCustom{
                                    border: none;
                                    background: none;
                                    cursor: pointer;
                                    outline: none;
                                    margin:0 0.5em;
                                }
                            }
                            &:hover{
                                background-color:#F0FAF;
                            }
                        }
                    }
                        
                }
            }
            
        }
    }
`;


export default DichVuComponent;
