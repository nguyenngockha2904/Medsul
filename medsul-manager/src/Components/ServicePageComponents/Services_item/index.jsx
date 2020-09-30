import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnMoney from '../../../img/moneyBag_img.svg';
import { connect } from 'react-redux';
import { SHOW_MODAL_DICHVU, SHOW_MODAL_GIA_DICH_VU, } from '../../../Redux/actions/type';
import { LayDanhSachQuyTrinhDichVuByIdDichVu } from '../../../Redux/actions/DichVuAction';
import { createAction } from '../../../Redux/actions';
class ServiceItem extends Component {
    handleEdit = (id, value) => () => {
        this.props.dispatch({
            type: SHOW_MODAL_DICHVU,
            payload: value
        })
        this.props.dispatch(LayDanhSachQuyTrinhDichVuByIdDichVu(id));
    }
    // handleDelete = (id) => () => {
    // swal({
    //     title: "Bạn Chắc Chứ?",
    //     text: "Nếu dịch vụ này sẽ không được khôi phục lại!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    // })
    //     .then((willDelete) => {
    //         if (willDelete) {
    //             swal("dịch vụ này đã được xóa", {
    //                 icon: "success",
    //             });
    //             this.props.dispatch(XoaDichVu(id));
    //         } else {
    //             swal("An toàn!");
    //         }
    //     });
    // }
    handleOpenModalMoney = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_GIA_DICH_VU, value));
    }
    render() {
        const {
            dichVu_Id,
            giaDichVu,
            maDichVu,
            tenDichVu,
            thoiGianUocTinh,
            tinhTrangDichVu
        } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow">
                <th scope="row" onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{index}</th>
                <td onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{maDichVu}</td>
                <td className="wrap text-center" onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{tenDichVu}</td>
                <td onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{thoiGianUocTinh} giờ</td>
                <td onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{giaDichVu.toLocaleString()}</td>
                <td
                    className={tinhTrangDichVu === 1 ? 'tdStatus  isChinhThuc' : (tinhTrangDichVu === 2 ? 'tdStatus  isThuViec' : 'tdStatus isNghiViec')}
                    onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 2 })}>{tinhTrangDichVu === 1 ? 'Kinh doanh' : (tinhTrangDichVu === 2 ? 'Tạm ngừng kinh doanh ' : 'Ngừng kinh doanh')}</td>
                <td className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.handleEdit(dichVu_Id, { value: this.props.item, role: 3 })}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className=" btnCustom" onClick={this.handleOpenModalMoney(this.props.item)}>
                        <img src={btnMoney} alt="btnEdit" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect()(ServiceItem);