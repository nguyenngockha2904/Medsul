import React, { PureComponent } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnVitien from '../../../img/btnViTien.svg';
import btnChuyenNganh from '../../../img/btnChuyenNganh.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_DIEUDUONG, SHOW_MODAL_GIAYPHEPHANHNGHE, SHOW_MODAL_VITIEN } from '../../../Redux/actions/type';
class DieuDuongItem extends PureComponent {
    handleOpenModalViTien = () => {
        this.props.dispatch(createAction(SHOW_MODAL_VITIEN, {}));
    }
    handleOpenModalDD = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, value));
    }
    handleClickShowListDD = () => {
        console.log('handleClickShowListDD');
    }
    handleOpenModalGPHN = () => {
        this.props.dispatch(createAction(SHOW_MODAL_GIAYPHEPHANHNGHE, {}));
    }
    render() {
        const { gioiTinh, hoTen, laDaoTaoVien, maDieuDuong, soDienThoai, tinhThanh_ID,
            trangThai } = this.props.item;
        const stt = this.props.index;
        return (
            <tr className="tRow">
                {/**No. */}
                <th onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{stt}</th>
                {/**Mã điều dưỡng. */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{maDieuDuong}</td>
                {/**Họ tên */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{hoTen}</td>
                {/**sdt */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{soDienThoai}</td>
                {/**giới tính. */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{gioiTinh}</td>
                {/**Tỉnh thành. */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{tinhThanh_ID}</td>
                {/**Đào tạo viên */}
                <td onClick={this.props.typeTable === 1 ? this.handleOpenModalDD({ value: this.props.item, role: 2 }) : this.handleClickShowListDD}>{laDaoTaoVien === 1 ? 'Có' : 'Không'}</td>
                {/**Trạng thái */}
                <td className={trangThai === 1 ? 'tdStatus isThuViec' : (trangThai === 2 ? 'tdStatus isNghiViec' : 'tdStatus isChinhThuc')} onClick={this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{trangThai === 1 ? 'Thử việc' : (trangThai === 2 ? 'Nghỉ việc' : 'Chính thức')}</td>
                {/**Tùy chỉnh */}
                <td className="d-flex justify-content-center groupBtn">
                    <button className="btnCustom" onClick={this.handleOpenModalViTien}>
                        <img src={btnVitien} alt="btnViTien" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalDD({ value: this.props.item, role: 3 })}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalGPHN}>
                        <img src={btnChuyenNganh} alt="btnChuyenNganh" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect()(DieuDuongItem);