import React, { Component } from 'react';
import { StylePageComponent, StyleGroupButtonSearch } from '../../Styles';
import DonHangTable from '../../Components/DonHangPage/tbDonHang';
import { connect } from 'react-redux';
import { layDanhSachDonHang } from '../../Redux/actions/DonHangAction';
import ModalDonHang from '../../Components/DonHangPage/modalDonHang';
import { createAction } from '../../Redux/actions';
import { SHOW_MODAL_DONHANG } from '../../Redux/actions/type';
class DonHangComponent extends Component {
    state = {
        statusSelect: 0,
    }
    handleShowModalDonHang = () => {
        let value = {
            ctd_DONGIA: '',
            ctd_GIOBATDAU: '',
            ctd_NGAYBATDAU: '',
            dichVu_Id: '',
            dl_DIACHI: '',
            dl_EMAIL: '',
            dl_GHICHU: '',
            dl_HOTEN: '',
            dl_NGAYDAT: '',
            dl_SDT: '',
            dl_TINHTRANG: '',
            dl_TONGTIEN: '',
            mgg_HESOGIAM: '',
            tenTinhThanh: ''
        }
        this.props.dispatch(createAction(SHOW_MODAL_DONHANG, { value, role: 1 }));
    }
    handleChangeSelectNum = (e) => {
        this.setState({
            statusSelect: parseInt(e.target.value)
        })
    }
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Danh sách đơn hàng</p>
                <div className="contentTabGroup">
                    <div className="contentTab tab_DD">
                        <StyleGroupButtonSearch >
                            <select className={this.state.statusSelect === 1 ? "selectStatus isThuViec" : (
                                this.state.statusSelect === 4 ? "selectStatus isNghiViec" : (this.state.statusSelect === 3 ? "selectStatus isChinhThuc" : this.state.statusSelect === 2 ? "selectStatus isAnother" : 'selectStatus'))}
                                value={this.state.statusSelect}
                                name="statusSelect"
                                onChange={this.handleChangeSelectNum}
                            >
                                <option value={0}>Tất cả</option>
                                <option value={1}>Chưa nhận</option>
                                <option value={2}>Đang thực hiện</option>
                                <option value={3}>Hoàn thành</option>
                                <option value={4}>Đã hủy</option>
                            </select>


                            {/* <form className="d-flex justify-content-center groupSearch" onSubmit={this.handleSearch()}>
                            <input type="text" className="form-contro" placeholder="Mã...."
                                name="valueSearch" value={this.state.valueSearch !== -1 ? this.state.valueSearch : ''}
                                onChange={this.handleChange}
                                onClick={this.handleClickInputSearch}
                            />
                            <div className="input-group-append">
                                <button className="btnSearch" type="submit">Tìm kiếm</button>
                            </div>
                        </form> */}
                            <button className="btnAdd" onClick={this.handleShowModalDonHang}>Thêm</button>
                        </StyleGroupButtonSearch>
                        <DonHangTable statusSelect={this.state.statusSelect ? this.state.statusSelect : -1} />
                    </div>
                </div>
                {this.props.isShowModalDonHang && <ModalDonHang />}
            </StylePageComponent>
        );
    }
    componentDidMount() {
        this.props.dispatch(layDanhSachDonHang());
    }
}
const mapStateToProps = state => ({
    isShowModalDonHang: state.qlDonHang.modalDonHang.isShow
})
export default connect(mapStateToProps)(DonHangComponent);