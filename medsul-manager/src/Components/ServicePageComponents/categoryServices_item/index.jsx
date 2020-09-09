import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnDelete from '../../../img/btnDelete.svg';
import { connect } from 'react-redux';
import { XoaLoaiDichVu } from '../../../Redux/actions/DichVuAction';
import swal from 'sweetalert';
import { SHOW_MODAL_LOAIDICHVU, DROPDOWN_TABLE_DICHVU } from '../../../Redux/actions/type';
class CategoriesItem extends Component {

    handleDeleteItem = (id) => () => {
        swal({
            title: "Bạn Chắc Chứ?",
            text: "Nếu xóa loại dịch vụ này thì các dịch vụ của nó sẽ bị xóa !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Loại dịch vụ này đã được xóa", {
                        icon: "success",
                    });
                    this.props.dispatch(XoaLoaiDichVu(id));
                } else {
                    swal("An toàn!");
                }
            });

    }
    handleEdit = (value) => () => {
        this.props.dispatch({
            type: SHOW_MODAL_LOAIDICHVU,
            payload: value
        })
    }
    handleDropDownTableDichVu = (value) => () => {
        console.log(value.loaiDichVu_Id);
        this.props.dispatch({
            type: DROPDOWN_TABLE_DICHVU,
            payload: value.loaiDichVu_Id
        });
    }
    render() {
        const { loaiDichVu_Id, maLoaiDichVu, tenLoaiDichVu } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow" >
                <th scope="row" onClick={this.handleDropDownTableDichVu(this.props.item)}>{index}</th>
                <td onClick={this.handleDropDownTableDichVu(this.props.item)}>{maLoaiDichVu.toLocaleLowerCase()}</td>
                <td onClick={this.handleDropDownTableDichVu(this.props.item)}>{tenLoaiDichVu}</td>
                <td><div className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.handleEdit(this.props.item)}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className=" btnCustom"
                        onClick={this.handleDeleteItem(loaiDichVu_Id)}
                    >
                        <img src={btnDelete} alt="btnDelete" />
                    </button>
                </div></td>
            </tr >
        );
    }
}
const mapStateToProps = state => {
    return {
        modalLoaiDV: state.qlDichVu.modalLoaiDV
    }
}

export default connect()(CategoriesItem);