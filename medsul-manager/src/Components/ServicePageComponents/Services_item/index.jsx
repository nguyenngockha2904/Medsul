import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnDelete from '../../../img/btnDelete.svg';
import { connect } from 'react-redux';
import { SHOW_MODAL_DICHVU, DELETE_DICHVU } from '../../../Redux/actions/type';
import { XoaDichVu } from '../../../Redux/actions/DichVuAction';
import swal from 'sweetalert';
class ServiceItem extends Component {
    handleEdit = (value) => () => {
        this.props.dispatch({
            type: SHOW_MODAL_DICHVU,
            payload: value
        })
    }
    handleDelete = (id) => () => {
        swal({
            title: "Bạn Chắc Chứ?",
            text: "Nếu dịch vụ này sẽ không được khôi phục lại!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("dịch vụ này đã được xóa", {
                        icon: "success",
                    });
                    this.props.dispatch(XoaDichVu(id));
                } else {
                    swal("An toàn!");
                }
            });
    }
    render() {
        const { dichVu_Id, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec, khongBaoGom } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow">
                <th scope="row" onClick={this.handleEdit(this.props.item)}>{index}</th>
                <td onClick={this.handleEdit(this.props.item)}>{maDichVu}</td>
                <td onClick={this.handleEdit(this.props.item)}>{tenDichVu}</td>
                <td onClick={this.handleEdit(this.props.item)}>{moTaDichVu.slice(0, 50)}...</td>
                <td onClick={this.handleEdit(this.props.item)}>{yeuCauCongViec.slice(0, 50)}...</td>
                <td onClick={this.handleEdit(this.props.item)}>{khongBaoGom.slice(0, 50)}</td>
                <td onClick={this.handleEdit(this.props.item)}>{thoiGianUocTinh} giờ</td>
                <td><div className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.handleEdit(this.props.item)}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className=" btnCustom"
                        onClick={this.handleDelete(dichVu_Id)}
                    >
                        <img src={btnDelete} alt="btnDelete" />
                    </button>
                </div></td>
            </tr>
        );
    }
}

export default connect()(ServiceItem);