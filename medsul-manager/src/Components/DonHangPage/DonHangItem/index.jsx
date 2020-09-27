import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
// import btnRePass from '../../../img/password_icon.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_DONHANG } from '../../../Redux/actions/type';
class DonHangItem extends Component {
    handleOpenModalDonHang = (value, role) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_DONHANG, { value, role }));
    }
    render() {
        const { dl_HOTEN, dichVu_Id, dl_TONGTIEN, ctd_DONGIA, dl_TINHTRANG, tenTinhThanh } = this.props.item;
        return (
            <tr className="tRow">
                {/* NO */}
                <th onClick={this.handleOpenModalDonHang(this.props.item, 2)}>{this.props.index}</th>
                {/* Tên khách hàng */}
                <td onClick={this.handleOpenModalDonHang(this.props.item, 2)}>{dl_HOTEN}</td>
                {/* Tên dịch vụ */}
                <td onClick={this.handleOpenModalDonHang(this.props.item, 2)}>{this.props.listDv.filter(dv => dv.dichVu_Id === dichVu_Id)[0].tenDichVu}</td>
                {/* trạng thái */}
                {/* //1 là Chưa nhận //2 là Đang thực hiện //3 là hoàn thành //4 là Đã hủy */}
                <td onClick={this.handleOpenModalDonHang(this.props.item, 2)}>{tenTinhThanh}</td>
                <td onClick={this.handleOpenModalDonHang(this.props.item, 2)}>{dl_TONGTIEN.toLocaleString()}</td>
                <td className='tdStatus'
                    className={dl_TINHTRANG === 1 ? 'selectStatus isThuViec' : (dl_TINHTRANG === 2 ? 'selectStatus isAnother' : (dl_TINHTRANG === 3 ? 'selectStatus isChinhThuc' : 'selectStatus isNghiViec'))}
                    onClick={this.handleOpenModalDonHang(this.props.item, 2)}
                >{dl_TINHTRANG === 1 ? 'Chưa nhận' : (dl_TINHTRANG === 2 ? 'Đang thực hiện' : (dl_TINHTRANG === 3 ? 'Hoàn thành' : 'Đã hủy'))}</td>
                <td className="d-flex justify-content-center groupBtn">

                    <button className="btnCustom" onClick={this.handleOpenModalDonHang(this.props.item, 3)}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => ({
    listDv: state.qlDichVu.mangDichVu
})
export default connect(mapStateToProps)(DonHangItem);