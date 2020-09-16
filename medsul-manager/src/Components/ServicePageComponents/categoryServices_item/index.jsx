import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { SHOW_MODAL_LOAIDICHVU, DROPDOWN_TABLE_DICHVU } from '../../../Redux/actions/type';
class CategoriesItem extends Component {
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
        const { loaiDichVu_Id, maLoaiDichVu, tenLoaiDichVu, tinhTrangLoaiDichVu } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow" >
                <th scope="row" onClick={this.handleDropDownTableDichVu(this.props.item)}>{index}</th>
                <td onClick={this.handleDropDownTableDichVu(this.props.item)}>{maLoaiDichVu.toLocaleLowerCase()}</td>
                <td onClick={this.handleDropDownTableDichVu(this.props.item)}>{tenLoaiDichVu}</td>

                <td className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.handleEdit(this.props.item)}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                </td>
            </tr >
        );
    }

    componentDidMount() {

    }
}
const mapStateToProps = state => {
    return {
        modalLoaiDV: state.qlDichVu.modalLoaiDV,
        SoLuong: state.qlDichVu.SoLuong,
    }
}

export default connect(mapStateToProps)(CategoriesItem);