import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryServices from '../../Components/ServicePageComponents/categoryServices';
import ServiceComponents from '../../Components/ServicePageComponents/ServiceComponents';
import ModalCategoryService from '../../Components/ServicePageComponents/modalCategoryService';
import ModalService from '../../Components/ServicePageComponents/modalService';
import { connect } from 'react-redux';
import { layDanhSachLoaiDichVuAction, layDanhSachDichVuAction } from '../../Redux/actions/DichVuAction';
import ModalMoney from '../../Components/ServicePageComponents/modalUpdateMoney';
import { createAction } from '../../Redux/actions';
import { DROPDOWN_TABLE_DICHVU } from '../../Redux/actions/type';
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
                    </div>

                    <div className="dichVuContent">
                        {/**table CategoriesService */}
                        <CategoryServices />

                        {/**table Service */}
                        {!!this.props.dropDown_MaLDV && <ServiceComponents />}

                    </div>
                    {this.props.modalLoaiDV && <ModalCategoryService />}
                    {this.props.modalDV && <ModalService />}
                    {this.props.modalGiaDichVu && <ModalMoney />}
                </div>
            </DichVuComponentStyles>

        );
    }

    componentDidMount() {
        this.props.dispatch(createAction(DROPDOWN_TABLE_DICHVU, ''));
    };
}

const DichVuComponentStyles = styled.div`
    min-height:1000px;
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
            padding-bottom: 3rem;
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
                }
                
            }
            
        }
    }
`;

const mapStatetoProps = state => {
    return {
        modalLoaiDV: state.qlDichVu.modalLoaiDV.isShow,
        modalDV: state.qlDichVu.modalDV.isShow,
        dropDown_MaLDV: state.qlDichVu.dropDown_MaLDV,
        modalGiaDichVu: state.qlDichVu.modalGiaDichVu.isShow
    }
}
export default connect(mapStatetoProps)(DichVuComponent);
