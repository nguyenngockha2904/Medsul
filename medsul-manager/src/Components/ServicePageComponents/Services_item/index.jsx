import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { SHOW_MODAL_DICHVU, } from '../../../Redux/actions/type';
class ServiceItem extends Component {
    handleEdit = (value) => () => {
        this.props.dispatch({
            type: SHOW_MODAL_DICHVU,
            payload: value
        })
    }
    // handleDelete = (id) => () => {
    //     swal({
    //         title: "Bạn Chắc Chứ?",
    //         text: "Nếu dịch vụ này sẽ không được khôi phục lại!",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //     })
    //         .then((willDelete) => {
    //             if (willDelete) {
    //                 swal("dịch vụ này đã được xóa", {
    //                     icon: "success",
    //                 });
    //                 this.props.dispatch(XoaDichVu(id));
    //             } else {
    //                 swal("An toàn!");
    //             }
    //         });
    // }
    render() {
        const {
            giaDichVu,
            maDichVu,
            tenDichVu,
            thoiGianUocTinh,
            tinhTrangDichVu
        } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow">
                <th scope="row" onClick={this.handleEdit(this.props.item)}>{index}</th>
                <td onClick={this.handleEdit(this.props.item)}>{maDichVu}</td>
                <td className="wrap text-center" onClick={this.handleEdit(this.props.item)}>{tenDichVu}</td>
                <td onClick={this.handleEdit(this.props.item)}>{thoiGianUocTinh} giờ</td>
                <td onClick={this.handleEdit(this.props.item)}>{giaDichVu.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                <td
                    className={tinhTrangDichVu === 1 ? 'tdStatus isThuViec' : (tinhTrangDichVu === 2 ? 'tdStatus isNghiViec' : 'tdStatus isChinhThuc')}
                    onClick={this.handleEdit(this.props.item)}>{tinhTrangDichVu === 1 ? 'Kinh doanh' : (tinhTrangDichVu === 2 ? 'Ngừng kinh doanh' : 'tạm ngừng kinh doanh')}</td>
                <td className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.handleEdit(this.props.item)}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect()(ServiceItem);