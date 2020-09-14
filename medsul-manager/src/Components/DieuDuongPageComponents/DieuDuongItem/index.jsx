import React, { Component, PureComponent } from 'react';
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
    handleOpenModalDD = () => {
        this.props.dispatch(createAction(SHOW_MODAL_DIEUDUONG, {}));
    }
    handleOpenModalGPHN = () => {
        this.props.dispatch(createAction(SHOW_MODAL_GIAYPHEPHANHNGHE, {}));
    }

    render() {
        const { anhMatSau,
            anhMatTruoc, avatar, diaChi, diaChiThuongTruCMND, dieuDuong_Id, email, gioiTinh, hoTen, laDaoTaoVien, maDieuDuong, nganHangLienKet, ngayCapCMND, ngaySinh, noiCap, password, queQuanCMND, soCMND, soDienThoai, soTaiKhoanNganHang, tinhThanh_ID,
            tongTien, trangThai } = this.props.item;
        const stt = this.props.index;
        return (
            <tr className="tRow">
                {/**No. */}
                <th>{stt}</th>
                {/**Mã điều dưỡng. */}
                <td>{maDieuDuong}</td>
                {/**Họ tên */}
                <td>{hoTen}</td>
                {/**sdt */}
                <td>{soDienThoai}</td>
                {/**giới tính. */}
                <td>{gioiTinh}</td>
                {/**Tỉnh thành. */}
                <td>{tinhThanh_ID}</td>
                {/**Đào tạo viên */}
                <td>{laDaoTaoVien === 1 ? 'Có' : 'Không'}</td>
                {/**Trạng thái */}
                <td className="tdStatus">{trangThai}</td>
                {/**Tùy chỉnh */}
                <td className="d-flex justify-content-center groupBtn">
                    <button className="btnCustom" onClick={this.handleOpenModalViTien}>
                        <img src={btnVitien} alt="btnViTien" />
                    </button>
                    <button className="btnCustom" onClick={this.handleOpenModalDD}>
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