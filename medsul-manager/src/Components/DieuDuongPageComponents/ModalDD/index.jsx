import React, { Component } from 'react';
import { HIRE_MODAL_DIEUDUONG } from '../../../Redux/actions/type';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { StyledModel } from '../../../Styles/index';
import { capNhapDieuDuong, themDieuDuong } from '../../../Redux/actions/DieuDuongAction';
import swal from 'sweetalert';
class ModalDieuDuong extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_DIEUDUONG, false));
    }

    state = {
        dieuDuong: {

        }
    }
    handleChange = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        });
    }
    handleChange_Number = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: parseInt(e.target.value) }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const {
            anhMatSau, anhMatTruoc, avatar, diaChi, diaChiThuongTruCMND,
            email, gioiTinh, hoTen, ngayCapCMND, ngaySinh, noiCap, queQuanCMND,
            soCMND, soDienThoai, tinhThanh_Id, laDaoTaoVien, nganHangLienKet, password, soTaiKhoanNganHang, trangThai, dieuDuong_Id
        } = this.state.dieuDuong;

        let newitem = { anhMatSau: anhMatSau, anhMatTruoc: anhMatTruoc, avatar: avatar, diaChi: diaChi, diaChiThuongTruCMND: diaChiThuongTruCMND, email: email, gioiTinh: gioiTinh, hoTen: hoTen, ngayCapCMND: ngayCapCMND, ngaySinh: ngaySinh, noiCap: noiCap, queQuanCMND: queQuanCMND, soCMND: soCMND, soDienThoai: soDienThoai, tinhThanh_ID: tinhThanh_Id };
        let update = {
            ...newitem, laDaoTaoVien: laDaoTaoVien,
            nganHangLienKet: nganHangLienKet,
            password: password,
            soTaiKhoanNganHang: soTaiKhoanNganHang,
            trangThai: trangThai
        }
        if (this.props.role === 1) {
            this.props.dispatch(themDieuDuong(newitem));
        } else if (this.props.role === 3) {
            swal({
                title: "Bạn Chắc Chứ?",
                text: "Nếu đồng ý dữ liệu này sẽ thay đổi!",
                icon: "info",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Dữ liệu đã được cập nhật!", {
                        icon: "success",
                    });
                    this.props.dispatch(capNhapDieuDuong(dieuDuong_Id, update));
                } else {
                    swal("Dữ liệu được giữ nguyên!");
                    this.HandleHireModal();
                }
            });
        }
    }
    renderTinhThanh = () => {
        return this.props.listTinhThanh.map((item, index) => {
            return (

                <option value={item.tinhThanh_Id} key={index}>{item.tenTinhThanh}</option>

            )
        })

    }
    _SetValue = () => {
        // console.log("this props:  ", this.props.item);
        this.setState({
            dieuDuong: this.props.item
        });
    }
    render() {
        // console.log(this.props.role === 1 ? 'Thêm' : (this.props.role === 2 ? 'Xem' : 'Sửa'));
        const { anhMatSau, anhMatTruoc, avatar, diaChi, diaChiThuongTruCMND, email, gioiTinh, hoTen, laDaoTaoVien, maDieuDuong, nganHangLienKet, ngayCapCMND, ngaySinh, noiCap, queQuanCMND, soCMND, soDienThoai, soTaiKhoanNganHang, tinhThanh_Id, trangThai } = this.state.dieuDuong;
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">{
                                this.props.role === 1 ? 'Thêm điều dưỡng' : (this.props.role === 2 ? 'Thông tin chi tiết' : 'Cập nhật thông tin')
                            }</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={(this.props.role === 2 ? () => { } : this.handleSubmit)
                        }>
                            <div className="titleGroup">Thông tin cá nhân</div>


                            {/* Mã điều dưỡng */}{/* họ tên điều dưỡng */}
                            <div className="d-flex justify-content-between">
                                {/* Mã điều dưỡng */}
                                <div
                                    className="form-group secondFormleft width3"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label >Mã điều dưỡng: </label>
                                    <input type="text" className="form-contro "
                                        name="maDieuDuong"
                                        value={maDieuDuong ? maDieuDuong : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : true)
                                        }

                                    />
                                </div>
                                {/* họ tên điều dưỡng */}
                                <div className={this.props.role === 1 ? "form-group w-100" : "form-group secondFormright"}
                                >
                                    <label >Tên điều dưỡng: </label>
                                    <input type="text" className="form-contro"
                                        name="hoTen"
                                        value={hoTen ? hoTen : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Giới tính */}{/* SDT */}{/* password */}
                            <div className="d-flex justify-content-between">
                                {/* Giới tính */}
                                <div className="form-group secondFormleft ">
                                    <label>Giới tính: </label>
                                    <div className="form-contro d-flex justify-content-end">
                                        <p className="mr-2">
                                            <input className="radGen" type="radio" name="gioiTinh" checked={gioiTinh === 'Nam' ? true : false}
                                                value="Nam" onChange={this.handleChange}
                                                disabled={
                                                    this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                                }
                                            />Nam
                                    </p>
                                        <p className="mx-4"></p>
                                        <p>
                                            <input className="radGen" type="radio"
                                                checked={gioiTinh !== 'Nam' ? true : false}
                                                name="gioiTinh" value="Nữ" onChange={this.handleChange}
                                                disabled={
                                                    this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                                }
                                            />Nữ
                                    </p>
                                    </div>
                                </div>
                                {/* SDT */}
                                <div className="form-group secondFormleft secondFormright">
                                    <label>* Số điện thoại: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="soDienThoai"
                                        value={soDienThoai ? soDienThoai : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : true)
                                        }
                                    />
                                </div>
                                {/* password */}


                            </div>


                            {/* Ngày Sinh */}{/* Email */}{/* Trạng thái */}{/* Tỉnh thành */}
                            <div className="d-flex justify-content-between">
                                {/* Ngày Sinh */}
                                <div className="form-group secondFormleft">
                                    <label>Ngày sinh: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngaySinh" value={ngaySinh ? ngaySinh : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Email */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Email: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email" value={email ? email : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Trạng thái */}
                                <div className="form-group secondFormleft secondFormright"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Trạng thái: </label>
                                    <select className="form-contro"
                                        value={trangThai ? trangThai : 1}
                                        name="trangThai"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        <option value={1}>Thử việc</option>
                                        <option value={2}>Nghỉ việc</option>
                                        <option value={3}>Chính thức</option>
                                    </select>
                                </div>
                                {/* Tỉnh thành */}
                                <div className="form-group secondFormright">
                                    <label>Tỉnh thành: </label>
                                    <select className="form-contro"
                                        value={tinhThanh_Id ? tinhThanh_Id : 1}
                                        name="tinhThanh_Id"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        {this.renderTinhThanh()}
                                    </select>
                                </div>
                            </div>


                            {/* Đào tạo viên */}{/* Địa chỉ */}
                            <div className="d-flex justify-content-between">
                                {/* Đào tạo viên */}
                                <div className="form-group secondFormleft  width3 "
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Là đào viên: </label>
                                    <select className="form-contro"
                                        value={laDaoTaoVien ? (trangThai === 1 ? 0 : laDaoTaoVien) : ''}
                                        name="laDaoTaoVien"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : (this.state.dieuDuong.trangThai === 3 ? false : true))
                                        }
                                    >
                                        <option value={0}>Không</option>
                                        <option value={1}>Có</option>
                                    </select>
                                </div>
                                {/* Địa chỉ */}
                                <div className={this.props.role === 1 ? "form-group w-100" : "form-group secondFormright"}
                                >
                                    <label >Địa chỉ: </label>
                                    <input type="text" className="form-contro"
                                        value={diaChi ? diaChi : ''}
                                        name="diaChi"
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Số tài khoản ngân hàng */}{/* Tên ngân hàng */}
                            <div className="d-flex justify-content-between">
                                {/* Số tài khoản ngân hàng */}
                                <div className="form-group secondFormleft  width3"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Số TK ngân hàng: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="soTaiKhoanNganHang"
                                        value={soTaiKhoanNganHang ? soTaiKhoanNganHang : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Tên ngân hàng */}
                                <div className="form-group secondFormright"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label >Tên ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="nganHangLienKet"
                                        value={nganHangLienKet ? nganHangLienKet : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            <div className="titleGroup">Chứng minh nhân dân</div>

                            {/* Số cmnd */}{/* Nơi cấp */}{/* Ngày cấp */}
                            <div className="d-flex justify-content-between">
                                {/* Số cmnd */}
                                <div className="form-group secondFormleft">
                                    <label>Số CMND: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soCMND"
                                        value={soCMND ? soCMND : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }

                                    />
                                </div>
                                {/* Nơi cấp */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Nơi cấp: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="noiCap"
                                        value={noiCap ? noiCap : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Ngày cấp */}
                                <div className="form-group secondFormright">
                                    <label>Ngày cấp: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngayCapCMND"
                                        value={ngayCapCMND ? ngayCapCMND : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Nơi đăng ký thường chú */}
                            <div className="form-group">
                                <label >Nơi đăng ký thường chú: </label>
                                <input type="text" className="form-contro"
                                    name="diaChiThuongTruCMND"
                                    value={diaChiThuongTruCMND ? diaChiThuongTruCMND : ''}
                                    onChange={this.handleChange}
                                    disabled={
                                        this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                    }
                                />
                            </div>


                            {/* Nguyên quán */}
                            <div className="form-group">
                                <label >Nguyên quán: </label>
                                <input type="text" className="form-contro"
                                    name="queQuanCMND"
                                    value={queQuanCMND ? queQuanCMND : ''}
                                    onChange={this.handleChange}
                                    disabled={
                                        this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                    }
                                />
                            </div>


                            {/* Ảnh CMND mặt trước */}{/* Ảnh CMND mặt sau */}{/* Ảnh chân dung */}
                            <div className="d-flex justify-content-between">
                                {/* Ảnh CMND mặt trước */}
                                <div className="form-group secondFormleft">
                                    <label >Ảnh CMND mặt trước: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhMatTruoc"
                                            value={anhMatTruoc ? anhMatTruoc : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }

                                    </div>
                                </div>
                                {/* Ảnh CMND mặt sau */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Ảnh CMND mặt sau: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhMatSau"
                                            value={anhMatSau ? anhMatSau : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }
                                    </div>
                                </div>
                                {/* Ảnh chân dung */}
                                <div className="form-group secondFormright">
                                    <label >Ảnh chân dung: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="avatar"
                                            value={avatar ? avatar : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {this.props.role === 2 ? '' :
                                <div className="text-right" style={{ padding: '1rem 0' }}>
                                    <button type="submit" className="btn btn-danger btnAccept" >Xác nhận</button>
                                </div>
                            }


                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModel>
        );
    }

    componentDidMount() {
        this._SetValue();
    }
}
const mapStateToProps = state => {
    return {
        item: state.qlDieuDuong.modalDieuDuong.value,
        role: state.qlDieuDuong.modalDieuDuong.role,
        listTinhThanh: state.qlTinhThanh.listTinhThanh
    }
}

export default connect(mapStateToProps)(ModalDieuDuong);