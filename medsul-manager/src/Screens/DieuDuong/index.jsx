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
            statusDDSelect: '',
            tabDT: {

            },
            statusDTSelect: '',
        }
    }
    handleToogleTab = (value) => () => {
        this.setState({
            isTabDD: value,
            statusDDSelect: 0,
            statusDTSelect: 0,
        }, () => {
            console.log(this.state.isTabDD);
        });
    }
    handleShowModalDieuDuong = () => {
        let payload = {
            value: {
                anhMatSau: '',
                anhMatTruoc: '',
                avatar: '',
                diaChi: '',
                diaChiThuongTruCMND: '',
                dieuDuong_Id: '',
                email: '',
                gioiTinh: 'Nam',
                hoTen: '',
                laDaoTaoVien: 0,
                maDieuDuong: '',
                nganHangLienKet: '',
                ngayCapCMND: '',
                ngaySinh: '',
                noiCap: '',
                password: '',
                queQuanCMND: '',
                soCMND: '',
                soDienThoai: '',
                soTaiKhoanNganHang: '',
                tinhThanh_ID: 1,
                tongTien: '',
                trangThai: 1,
            }, role: 1
        }
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, payload));
    }
    handleChangeSelectNum = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        });
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
                                    <select className={this.state.statusDDSelect === 1 ? "selectStatus isThuViec" : (
                                        this.state.statusDDSelect === 2 ? "selectStatus isNghiViec" : (this.state.statusDDSelect === 3 ? "selectStatus isChinhThuc" : "selectStatus"))}
                                        value={this.state.statusDDSelect}
                                        name="statusDDSelect"
                                        onChange={this.handleChangeSelectNum}
                                    >
                                        <option value={0}>Tất cả</option>
                                        <option value={1}>Thử việc</option>
                                        <option value={2}>Nghỉ việc</option>
                                        <option value={3}>Chính thức</option>
                                    </select>


                                    <div className="d-flex justify-content-center groupSearch">
                                        <input type="text" className="form-contro" placeholder="Mã, Họ tên ...." />
                                        <div className="input-group-append">
                                            <button className="btnSearch" type="button">Tìm kiếm</button>
                                        </div>
                                    </div>
                                    <button className="btnAdd" onClick={this.handleShowModalDieuDuong}>Thêm</button>
                                </div>
                                <DieuDuongTable valueStatus={!!this.state.statusDDSelect ? this.state.statusDDSelect : 0} isDaoTaoVien={0} />
                            </div>


                            :
                            <div className="contentTab tab_DT">
                                <p className="m-0 p-0 text-center title_tab">Đào tạo viên</p>
                                <div className="d-flex justify-content-between groupBtnSearch">
                                    <select className={this.state.statusDTSelect === 1 ? "selectStatus isThuViec" : (
                                        this.state.statusDTSelect === 2 ? "selectStatus isNghiViec" : (this.state.statusDTSelect === 3 ? "selectStatus isChinhThuc" : "selectStatus"))}
                                        value={this.state.statusDTSelect}
                                        name="statusDTSelect"
                                        onChange={this.handleChangeSelectNum}
                                    >
                                        <option value={0}>Tất cả</option>
                                        <option value={2}>Nghỉ việc</option>
                                        <option value={3}>Chính thức</option>
                                    </select>
                                    <div className="d-flex justify-content-center groupSearch">
                                        <input type="text" className="form-contro" placeholder="Mã, Họ tên ...." />
                                        <div className="input-group-append">
                                            <button className="btnSearch" type="button">Tìm kiếm</button>
                                        </div>
                                    </div>

                                </div>
                                <DieuDuongTable valueStatus={!!this.state.statusDTSelect ? this.state.statusDTSelect : 0} isDaoTaoVien={1} />
                                <div className="m-4"></div>
                                <div className="d-flex justify-content-between">
                                    <p className="m-0 p-0 text-left align-self-center title_tab">Đã đào tạo</p>
                                    <div className="d-flex justify-content-between groupBtnSearch mr-0">
                                        <select className={this.state.statusDDSelect === 1 ? "selectStatus isThuViec" : (
                                            this.state.statusDDSelect === 2 ? "selectStatus isNghiViec" : (this.state.statusDDSelect === 3 ? "selectStatus isChinhThuc" : "selectStatus"))}
                                            value={this.state.statusDDSelect}
                                            name="statusDDSelect"
                                            onChange={this.handleChangeSelectNum}
                                        >
                                            <option value={0}>Tất cả</option>
                                            <option value={1}>Thử việc</option>
                                            <option value={2}>Nghỉ việc</option>
                                            <option value={3}>Chính thức</option>
                                        </select>
                                    </div>
                                </div>
                                <DieuDuongTable valueStatus={!!this.state.statusDDSelect ? this.state.statusDDSelect : 0} isDaoTaoVien={0} />
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
                    &:hover {
                        box-shadow: 1px 2px 4px -0.5px #80808080;
                        color: #2CD889 ;
                        background:#fff;
                    }
                    &.isThuViec{
                        color: #fff ;
                            background:#FFEF00;
                        &:hover{
                            box-shadow: 1px 2px 4px -0.5px #80808080;
                            color:#FFEF00;
                            background:#fff;
                        }
                    }
                    &.isNghiViec{
                        color: #fff ;
                        background:#FF0000;
                        &:hover{
                            box-shadow: 1px 2px 4px -0.5px #80808080;    
                            color:#FF0000;
                            background:#fff;
                        }
                    }
                    &.isChinhThuc{
                        box-shadow: 1px 2px 4px -0.5px #80808080;
                        color:#2CD889;
                        background:#fff;
                        &:hover{
                            color: #fff ;
                            background:#2CD889;    
                        }
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