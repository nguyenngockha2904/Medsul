import React, { Component } from 'react';
import DieuDuongTable from '../../Components/DieuDuongPageComponents/tbDieuDuongComponent';
import ModalDieuDuong from '../../Components/DieuDuongPageComponents/ModalDD';
import ModalCN from '../../Components/DieuDuongPageComponents/ModalCN';
import ModalViTien from '../../Components/DieuDuongPageComponents/ModalViTien';
import ModalPassword from '../../Components/ModalPassword';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { SET_DIEUDUONG_BY_DAOTAOVIEN, SHOW_MODAL_DIEUDUONG } from '../../Redux/actions/type';
import { LayDanhSachDieuDuong, layListAllGPHN } from '../../Redux/actions/DieuDuongAction';
import { LayDanhSachTinhThanh } from '../../Redux/actions/TinhThanhAction';
import { StyleGroupButtonSearch, StylePageComponent } from '../../Styles';
class DieuDuongComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabDD: true,
            valueSearch: -1,
            tabDD: {
                searchMaDD: '',
            },
            statusDDSelect: '',
            tabDT: {
                searchMaDT: '',
            },
            statusDTSelect: '',
        }
    }
    handleToogleTab = (value) => () => {
        this.setState({
            isTabDD: value,
            statusDDSelect: 0,
            statusDTSelect: 0,
            valueSearch: -1,
            tabDD: { ...this.state.tabDD, searchMaDD: '' },
            tabDT: { ...this.state.tabDT, searchMaDT: '' }
        }, () => {
            console.log(this.state.isTabDD);
        });
        this.props.dispatch(createAction(SET_DIEUDUONG_BY_DAOTAOVIEN, ''));
    }
    handleShowModalDieuDuong = () => {
        let payload = {
            value: {
                anhMatSau: 'chưa có',
                anhMatTruoc: 'chưa có',
                avatar: 'chưa có',
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
                tinhThanh_Id: 1,
                tongTien: '',
                trangThai: 1,
            }, role: 1
        }
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, payload));
    }
    handleChange = e => {
        this.setState({
            valueSearch: e.target.value,
            statusDDSelect: 0,
            statusDTSelect: 0,
        });

    }
    handleSearch = (tab, name, value) => (e) => {
        e.preventDefault();
        this.setState({
            [tab]: { ...[tab], [name]: value }
        });
    }
    handleClickInputSearch = () => {
        this.setState({
            statusDDSelect: 0,
            statusDTSelect: 0,
            valueSearch: '',
        })
    }
    handleChangeSelectNum = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        });
        if (this.state.statusDDSelect === 0) {
            this.setState({
                tabDD: { ...this.state.tabDD, searchMaDD: '' },
                valueSearch: '',
            })
        }
        if (this.state.statusDTSelect === 0) {
            this.setState({
                tabDT: { ...this.state.tabDT, searchMaDT: '' },
                valueSearch: ''
            })
        }
    }
    handleClickSelect = () => {
        this.setState({
            valueSearch: ''
        })
    }
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Quản trị điều dưỡng và đào tạo viên</p>

                <div className="text-left">
                    <div className="btn-group-tab">
                        <button className={this.state.isTabDD ? "btnTab tabDD ac" : "btnTab tabDD"} onClick={this.handleToogleTab(true)}>Điều Dưỡng</button>
                        <button className={this.state.isTabDD ? "btnTab tabDT " : "btnTab tabDT ac"} onClick={this.handleToogleTab(false)}>Đào Tạo</button>
                    </div>
                </div>

                <div className="contentTabGroup pageDD">
                    {
                        this.state.isTabDD
                            ?
                            /* Tab điều dưỡng */
                            <div className="contentTab tab_DD">
                                <p className="m-0 p-0 text-center title_tab">danh sách điều dưỡng</p>
                                <StyleGroupButtonSearch >
                                    <select className={this.state.statusDDSelect === 1 ? "selectStatus isThuViec" : (
                                        this.state.statusDDSelect === 2 ? "selectStatus isNghiViec" : (this.state.statusDDSelect === 3 ? "selectStatus isChinhThuc" : "selectStatus"))}
                                        value={this.state.statusDDSelect}
                                        name="statusDDSelect"
                                        onChange={this.handleChangeSelectNum}
                                        onClick={this.handleClickSelect}
                                    >
                                        <option value={0}>Tất cả</option>
                                        <option value={1}>Thử việc</option>
                                        <option value={2}>Nghỉ việc</option>
                                        <option value={3}>Chính thức</option>
                                    </select>


                                    <form className="d-flex justify-content-center groupSearch" onSubmit={this.handleSearch('tabDD', 'searchMaDD', this.state.valueSearch)}>
                                        <input type="text" className="form-contro" placeholder="Mã...."
                                            name="valueSearch" value={this.state.valueSearch !== -1 ? this.state.valueSearch : ''}
                                            onChange={this.handleChange}
                                            onClick={this.handleClickInputSearch}
                                        />
                                        <div className="input-group-append">
                                            <button className="btnSearch" type="submit">Tìm kiếm</button>
                                        </div>
                                    </form>
                                    <button className="btnAdd" onClick={this.handleShowModalDieuDuong}>Thêm</button>
                                </StyleGroupButtonSearch>
                                <DieuDuongTable valueStatus={!!this.state.statusDDSelect ? this.state.statusDDSelect : 0} isDaoTaoVien={0} valueSearch={!!this.state.tabDD.searchMaDD ? this.state.tabDD.searchMaDD : -1} typeTable={1} />
                            </div>


                            :
                            <div className="contentTab tab_DT">
                                <p className="m-0 p-0 text-center title_tab">Đào tạo viên</p>
                                <StyleGroupButtonSearch >
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
                                    <form className="d-flex justify-content-center groupSearch" onSubmit={this.handleSearch('tabDT', 'searchMaDT', this.state.valueSearch)}>

                                        <input type="text" className="form-contro" placeholder="Mã..."
                                            name="valueSearch"
                                            value={this.state.valueSearch !== -1 ? this.state.valueSearch : ''}
                                            onChange={this.handleChange}
                                            onClick={this.handleClickInputSearch}
                                        />
                                        <div className="input-group-append">
                                            <button className="btnSearch" type="submit"
                                            >Tìm kiếm</button>
                                        </div>

                                    </form>

                                </StyleGroupButtonSearch>
                                <DieuDuongTable valueStatus={!!this.state.statusDTSelect ? this.state.statusDTSelect : 0} isDaoTaoVien={1}
                                    valueSearch={!!this.state.tabDT.searchMaDT ? this.state.tabDT.searchMaDT : -1} typeTable={2}
                                />
                                <div className="m-4"></div>
                                <div style={{ display: !!this.props.listDieuDuongByIdDaoTao ? 'block' : 'none' }}>
                                    <div className="d-flex justify-content-between">
                                        <p className="m-0 p-0 text-left align-self-center title_tab">Đã đào tạo</p>
                                        <StyleGroupButtonSearch className="mr-0">
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
                                        </StyleGroupButtonSearch>
                                    </div>
                                    <DieuDuongTable valueStatus={!!this.state.statusDDSelect ? this.state.statusDDSelect : 0} isDaoTaoVien={0} valueSearch={!!this.state.tabDD.searchMaDD ? this.state.tabDD.searchMaDD : -1} typeTable={3} />
                                </div>
                            </div>
                    }
                </div>
                {/** <ModalViTien /> <ModalCN />*/}
                {this.props.isModalDieuDuong && <ModalDieuDuong />}
                {this.props.isModalGiayPhepHanhNghe && <ModalCN />}
                {this.props.isModalViTien && <ModalViTien />}
                {this.props.isShowModalPass && <ModalPassword />}
            </StylePageComponent>
        );
    }

    componentDidMount() {
        this.props.dispatch(LayDanhSachDieuDuong());
        this.props.dispatch(layListAllGPHN());
    }
}
const mapStateToProps = state => {
    return {
        isModalDieuDuong: state.qlDieuDuong.modalDieuDuong.isShow,
        isModalGiayPhepHanhNghe: state.qlDieuDuong.modalGiayPhepHanhNghe.isShow,
        isModalViTien: state.qlDieuDuong.modalViTien.isShow,
        listDieuDuongByIdDaoTao: state.qlDieuDuong.listDieuDuongByIdDaoTao,
        isShowModalPass: state.credentials.modalRePassword.isShow,
    }
}

export default connect(mapStateToProps)(DieuDuongComponent);