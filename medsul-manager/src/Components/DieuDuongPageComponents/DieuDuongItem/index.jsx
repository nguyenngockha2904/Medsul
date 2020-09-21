import React, { PureComponent } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnVitien from '../../../img/btnViTien.svg';
import btnChuyenNganh from '../../../img/btnChuyenNganh.svg';
import btnRePass from '../../../img/password_icon.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_DIEUDUONG, SHOW_MODAL_GIAYPHEPHANHNGHE, SHOW_MODAL_REPASSWORD, SHOW_MODAL_VITIEN } from '../../../Redux/actions/type';
import { layListDieuDuongByIdDaoTao } from '../../../Redux/actions/DieuDuongAction';
class DieuDuongItem extends PureComponent {
    handleOpenModalViTien = () => {
        this.props.dispatch(createAction(SHOW_MODAL_VITIEN, this.props.item));
    }
    handleOpenModalDD = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, value));
    }
    handleClickShowListDD = (id) => () => {
        this.props.dispatch(layListDieuDuongByIdDaoTao(id));
    }
    handleOpenModalGPHN = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_GIAYPHEPHANHNGHE, value));
    }
    handleOpenModalPassword = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_REPASSWORD, value));
    }
    state = {
        tenTinhThanh: '',
    }
    render() {
        const { dieuDuong_Id, gioiTinh, hoTen, laDaoTaoVien, maDieuDuong, soDienThoai, tinhThanh_Id,
            trangThai } = this.props.item;
        const stt = this.props.index;
        return (
            <tr className="tRow">
                {/**No. */}
                <th onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{stt}</th>
                {/**Mã điều dưỡng. */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{maDieuDuong}</td>
                {/**Họ tên */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{hoTen}</td>
                {/**sdt */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{soDienThoai}</td>
                {/**giới tính. */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{gioiTinh}</td>
                {/**Tỉnh thành. */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{this.state.tenTinhThanh}</td>
                {/**Đào tạo viên */}
                <td onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{laDaoTaoVien === 1 ? 'Có' : 'Không'}</td>
                {/**Trạng thái */}
                <td className={trangThai === 1 ? 'tdStatus isThuViec' : (trangThai === 2 ? 'tdStatus isNghiViec' : 'tdStatus isChinhThuc')} onClick={this.props.typeTable === 2 ? this.handleClickShowListDD(dieuDuong_Id) : this.handleOpenModalDD({ value: this.props.item, role: 2 })}>{trangThai === 1 ? 'Thử việc' : (trangThai === 2 ? 'Nghỉ việc' : 'Chính thức')}</td>
                {/**Tùy chỉnh */}
                <td className="d-flex justify-content-center groupBtn">
                    <button className="btnCustom" onClick={this.handleOpenModalViTien}>
                        <img src={btnVitien} alt="btnViTien" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalDD({ value: this.props.item, role: 3 })}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalGPHN(this.props.item)}>
                        <img src={btnChuyenNganh} alt="btnChuyenNganh" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalPassword({ value: this.props.item, role: 1 })}>
                        <img src={btnRePass} alt="btnRePass" />
                    </button>
                </td>
            </tr>
        );
    }
    componentDidMount() {
        let tenTinhT = this.props.listTinhThanh.filter(tt => tt.tinhThanh_Id === this.props.item.tinhThanh_Id)[0].tenTinhThanh;
        this.setState({
            tenTinhThanh: tenTinhT
        })
    }
}
const mapStateToProps = state => ({
    listTinhThanh: state.qlTinhThanh.listTinhThanh,
})
export default connect(mapStateToProps)(DieuDuongItem);