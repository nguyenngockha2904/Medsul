import React, { Component } from 'react';
import styled from 'styled-components';
import DieuDuongTable from '../../Components/DieuDuongPageComponents/tbDieuDuongComponent';
import ModalDieuDuong from '../../Components/DieuDuongPageComponents/ModalDD';
import ModalCN from '../../Components/DieuDuongPageComponents/ModalCN';
import ModalViTien from '../../Components/DieuDuongPageComponents/ModalViTien';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { SHOW_MODAL_DIEUDUONG } from '../../Redux/actions/type';
import { LayDanhSachDieuDuong } from '../../Redux/actions/DieuDuongAction';
class DieuDuongComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabDD: true,
            tabDD: {

            },
            tabDT: {

            },
        }
    }
    handleToogleTab = (value) => () => {
        this.setState({
            isTabDD: value
        }, () => {
            console.log(this.state.isTabDD);
        });
    }
    handleShowModalDieuDuong = () => {
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, {}));
    }
    render() {
        return (
            <DieuDuongStyled>
                <p className="text-center title">Quản trị điều dưỡng và đào tạo viên</p>

                <div className="text-left">
                    <div className="btn-group">
                        <button className={this.state.isTabDD ? "btnTab tabDD ac" : "btnTab tabDD"} onClick={this.handleToogleTab(true)}>Điều Dưỡng</button>
                        <button className={this.state.isTabDD ? "btnTab tabDT " : "btnTab tabDT ac"} onClick={this.handleToogleTab(false)}>Đào Tạo</button>
                    </div>
                </div>

                <div className="contentTabGroup">
                    {
                        this.state.isTabDD
                            ?
                            /* Tab điều dưỡng */
                            <div className="contentTab tab_DD">
                                <p className="m-0 p-0 text-center title_tab">danh sách điều dưỡng</p>
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
                                <DieuDuongTable valueStatus="" valueRender="" />
                            </div>


                            :
                            <div className="contentTab tab_DT">
                                <p className="m-0 p-0 text-center title_tab">Đào tạo viên</p>
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

                                </div>
                                <DieuDuongTable valueStatus="" valueRender="" />
                                <div className="m-4"></div>
                                <div className="d-flex justify-content-between">
                                    <p className="m-0 p-0 text-left align-self-center title_tab">Đã đào tạo</p>
                                    <div className="d-flex justify-content-between groupBtnSearch mr-0">
                                        <select className="selectStatus" defaultValue="all">
                                            <option value="all">Tất cả</option>
                                            <option value="thuviec">Thử việc</option>
                                            <option value="nghiviec">Nghỉ việc</option>
                                            <option value="chinhthuc">Chính thức</option>
                                        </select>
                                    </div>
                                </div>
                                <DieuDuongTable valueStatus="" valueRender="" />
                            </div>
                    }
                </div>
                {/** <ModalViTien /> <ModalCN />*/}
                {this.props.isModalDieuDuong && <ModalDieuDuong />}
                {this.props.isModalGiayPhepHanhNghe && <ModalCN />}
                {this.props.isModalViTien && <ModalViTien />}
            </DieuDuongStyled>
        );
    }

    componentDidMount() {
        this.props.dispatch(LayDanhSachDieuDuong());
    }
}

const DieuDuongStyled = styled.div`
    background: #F0FAF8;
    min-height: 1000px;
    height: auto;
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
        transition: all 1s;
        .contentTab{
            .title_tab{
                letter-spacing: 0.8px;
                font-size: 0.8rem;
                font-weight: 500;
                text-transform: uppercase;
            }
            .groupBtnSearch{
                margin: 1rem 0;
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
            



            &.tab_DD{
            }
            &.tab_DT{
                
            }
        }
    }

`;
const mapStateToProps = state => {
    return {
        isModalDieuDuong: state.qlDieuDuong.modalDieuDuong.isShow,
        isModalGiayPhepHanhNghe: state.qlDieuDuong.modalGiayPhepHanhNghe.isShow,
        isModalViTien: state.qlDieuDuong.modalViTien.isShow
    }
}

export default connect(mapStateToProps)(DieuDuongComponent);