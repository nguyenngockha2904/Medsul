import React, { Component } from 'react';
import { StyledModel } from '../../Styles';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { HIRE_MODAL_REPASSWORD } from '../../Redux/actions/type';
import { capNhapDieuDuong } from '../../Redux/actions/DieuDuongAction';
import swal from 'sweetalert';
import { capNhatManager } from '../../Redux/actions/managerAction';
class ModalPassword extends Component {
    state = {
        credentials: {
            soDienThoai: '',
            password: '',
        },
        item: {}
    }
    handleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_REPASSWORD, {}));
    }
    handleChange = (e) => {
        this.setState({
            credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.item);
        if (this.props.role === 1) {
            const {
                anhMatSau, anhMatTruoc, avatar, diaChi, diaChiThuongTruCMND,
                email, gioiTinh, hoTen, ngayCapCMND, ngaySinh, noiCap, queQuanCMND,
                soCMND, soDienThoai, tinhThanh_Id, laDaoTaoVien, nganHangLienKet, password, soTaiKhoanNganHang, trangThai, dieuDuong_Id
            } = this.state.item;
            let newitem = { anhMatSau: anhMatSau, anhMatTruoc: anhMatTruoc, avatar: avatar, diaChi: diaChi, diaChiThuongTruCMND: diaChiThuongTruCMND, email: email, gioiTinh: gioiTinh, hoTen: hoTen, ngayCapCMND: ngayCapCMND, ngaySinh: ngaySinh, noiCap: noiCap, queQuanCMND: queQuanCMND, soCMND: soCMND, soDienThoai: soDienThoai, tinhThanh_ID: tinhThanh_Id };
            let update = {
                ...newitem, laDaoTaoVien: laDaoTaoVien,
                nganHangLienKet: nganHangLienKet,
                password: this.state.credentials.password.toLowerCase(),
                soTaiKhoanNganHang: soTaiKhoanNganHang,
                trangThai: trangThai
            }
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
                    this.handleHireModal();
                } else {
                    swal("Dữ liệu được giữ nguyên!");
                    this.HandleHireModal();
                }
            });

        } else {
            const {
                admin_ID, admin_PASSWORD, admin_CMNDMATSAU, admin_CMNDNOICAP,
                admin_CMNDMATTRUOC, admin_CMNDNGAYCAP, admin_TINHTRANG, admin_HOTEN,
                admin_AVATAR, admin_CHUCVU, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH,
                admin_SDT, admin_DIACHI, admin_USERNAME, admin_CMND
            } = this.state.item;
            let itemAdd = {
                admin_AVATAR: admin_AVATAR,
                admin_CHUCVU: admin_CHUCVU,
                admin_CMND: admin_CMND,
                admin_CMNDMATSAU: admin_CMNDMATSAU,
                admin_CMNDMATTRUOC: admin_CMNDMATTRUOC,
                admin_CMNDNGAYCAP: admin_CMNDNGAYCAP,
                admin_CMNDNOICAP: admin_CMNDNOICAP,
                admin_DIACHI: admin_DIACHI,
                admin_EMAIL: admin_EMAIL,
                admin_GIOITINH: admin_GIOITINH,
                admin_HOTEN: admin_HOTEN,
                admin_NGAYSINH: admin_NGAYSINH,
                admin_PASSWORD: this.state.credentials.password,
                admin_SDT: admin_SDT,
                admin_TINHTRANG: admin_TINHTRANG,
                admin_USERNAME: admin_EMAIL.slice(0, admin_EMAIL.lastIndexOf('@'))
            };
            swal({
                title: "Bạn Chắc Chứ?",
                text: `Nếu đồng ý dữ liệu sẽ thay đổi!`,
                icon: "info",
                buttons: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal(`Dữ liệu đã được cập nhật!`, {
                        icon: "success",
                    });
                    this.props.dispatch(capNhatManager(admin_ID, itemAdd, this.handleHireModal));
                } else {
                    swal(`Dữ liệu được giữ nguyên!`);
                    // this.HandleHireModal();
                    this.setState({
                        item: this.props.item
                    });
                }
            });
        }



    }
    _setValue = () => {
        const { password } = this.props.item;
        const soDienThoai = this.props.role === 1 ? this.props.item.soDienThoai : this.props.item.admin_USERNAME
        // let brcypt= require('bcryptjs');
        this.setState({
            credentials: { soDienThoai: soDienThoai, password: password },
            item: this.props.item
        });
    }
    render() {
        const { soDienThoai, password } = this.state.credentials;
        return (
            <StyledModel className="modalService">
                <div className=" modalService-dialog">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Cấp Mật Khẩu</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="form-group ac">
                                <label >{this.props.role === 1 ? 'Số Điện Thoại' : 'Tài khoản'} :</label>
                                <input type="text" className="form-contro" name="soDienThoai" value={soDienThoai}
                                    disabled={true}
                                />
                            </div>
                            <div className="form-group ">
                                <label >Mật khẩu:</label>
                                <input type="password" className="form-contro" name="password" onChange={this.handleChange}
                                    value={password ? password : ''}
                                />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-danger btnAccept" >Xác Nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            </StyledModel>
        );
    }
    componentDidMount() {
        this._setValue();
    }

}
const mapStateToProps = state => ({
    item: state.credentials.modalRePassword.value,
    role: state.credentials.modalRePassword.role,
})
export default connect(mapStateToProps)(ModalPassword);