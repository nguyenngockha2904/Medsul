import React, { Component } from 'react';
import { CHECK_CMND, CHECK_DAOTAOVIEN, CHECK_EMAIL, CHECK_SDT, HIRE_MODAL_DIEUDUONG } from '../../../Redux/actions/type';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { StyledModel } from '../../../Styles/index';
import { capNhapDieuDuong, themDieuDuong } from '../../../Redux/actions/DieuDuongAction';
import swal from 'sweetalert';
import { app } from '../../../base';
import imgTest from '../../../img/avatar/avatar_1.jpg';
import cmndTest from '../../../img/indentityCard_Img.svg';
class ModalDieuDuong extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_DIEUDUONG, false));
        if (this.props.role !== 2) {
            this.props.dispatch(createAction(CHECK_SDT, this.state.dieuDuong.soDienThoai + 'false'));
            // this.state.dieuDuong.email
            this.props.dispatch(createAction(CHECK_EMAIL, this.state.dieuDuong.email + 'false'));
            // this.state.dieuDuong.soCMND
            this.props.dispatch(createAction(CHECK_CMND, this.state.dieuDuong.soCMND + 'false'));
        }

    }

    state = {
        dieuDuong: {},
        oldState: {
            emailOld: '',
            cmndOld: '',
        }
    }
    handleChangeSpecialSDT = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        }, () => {
            // this.state.dieuDuong.soDienThoai
            this.props.dispatch(createAction(CHECK_SDT, this.state.dieuDuong.soDienThoai));
            this.setState({
                dieuDuong: { ...this.state.dieuDuong }
            }, () => {
                if (this.props.role !== 3) {
                    if (this.props.checkExistSDT) {
                        swal({
                            title: "Số điện thoại đã tồn tại!",
                            text: "Vui lòng kiểm tra lại số điện thoại",
                            icon: "warning",
                        });
                    }
                }
            })
        });

    }
    handleChangeSpecialEmail = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        }, () => {
            // this.state.dieuDuong.email
            this.props.dispatch(createAction(CHECK_EMAIL, this.state.dieuDuong.email));
            this.setState({
                dieuDuong: { ...this.state.dieuDuong }
            }, () => {
                if (this.props.role !== 3) {
                    if (this.props.checkExistEmail) {
                        swal({
                            title: "Email đã tồn tại!",
                            text: "Vui lòng kiểm tra lại email",
                            icon: "warning",
                        });
                    }
                }

            })
        });
    }
    handleChangeSpecialCMND = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        }, () => {
            // this.state.dieuDuong.soCMND
            this.props.dispatch(createAction(CHECK_CMND, this.state.dieuDuong.soCMND));
            this.setState({
                dieuDuong: { ...this.state.dieuDuong }
            }, () => {
                if (this.props.role !== 3) {
                    if (this.props.checkExistCMND) {
                        swal({
                            title: "CMND đã tồn tại!",
                            text: "Vui lòng kiểm tra lại CMND",
                            icon: "warning",
                        });
                    }
                }
            })
        });
    }
    handleChangeSpecialDTV = e => {
        this.props.dispatch(createAction(CHECK_DAOTAOVIEN, this.state.dieuDuong.dieuDuong_Id));
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: parseInt(e.target.value) }
        }, () => {
            this.setState({
                dieuDuong: { ...this.state.dieuDuong, laDaoTaoVien: (this.state.dieuDuong.trangThai === 1 ? 2 : this.state.dieuDuong.laDaoTaoVien) }
            }, () => {
                if (this.state.dieuDuong.laDaoTaoVien === 2) {
                    // this.props.checkExist?'tồn tại':'không tồn tại'
                    if (this.props.checkExistDTV) {
                        swal({
                            title: "Không được thây đổi!",
                            text: "Vì đào tạo viên này đã và đang đào tạo một vài điều dưỡng!",
                            icon: "warning",
                        }).then(ok => {
                            if (ok) {
                                this.setState({
                                    dieuDuong: { ...this.state.dieuDuong, laDaoTaoVien: this.props.item.laDaoTaoVien }
                                })
                            }

                        })
                    }

                }

            });
        });


    }
    handleChange = e => {

        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        });
    }
    handleChange_Number = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: parseInt(e.target.value) }
        });


    }
    handleChangeFileCMNDmatTruoc = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        let check = file.name ? file.name : '';
        if (!!check) {
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            const fileUrl = await fileRef.getDownloadURL();
            this.setState({
                dieuDuong: { ...this.state.dieuDuong, anhMatTruoc: fileUrl }
            })
        }
    }
    handleChangeFileCMNDmatSau = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        let check = file.name ? file.name : '';
        if (!!check) {
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            const fileUrl = await fileRef.getDownloadURL();
            this.setState({
                dieuDuong: { ...this.state.dieuDuong, anhMatSau: fileUrl }
            })
        }
    }
    handleChangeFileAvatar = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        let check = file.name ? file.name : '';
        if (!!check) {
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            const fileUrl = await fileRef.getDownloadURL();
            this.setState({
                dieuDuong: { ...this.state.dieuDuong, avatar: fileUrl }
            })
        }
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
            // console.log(newitem);
        } else if (this.props.role === 3) {
            let checkEmail = false;
            let checkCMND = false;
            if (this.state.dieuDuong.email !== this.state.oldState.emailOld) {
                if (this.props.checkExistEmail) {
                    this.setState({
                        dieuDuong: { ...this.state.dieuDuong, email: this.state.oldState.emailOld }
                    }, () => {
                        swal({
                            title: "Email đã tồn tại!",
                            text: "Vui lòng kiểm tra lại email",
                            icon: "warning",
                        });
                        checkEmail = false;
                    })
                } else {
                    checkEmail = true;
                }
            } else {
                checkEmail = true;
            }
            if (this.state.dieuDuong.soCMND !== this.state.oldState.cmndOld) {
                if (this.props.checkExistCMND) {
                    this.setState({
                        dieuDuong: { ...this.state.dieuDuong, soCMND: this.state.oldState.cmndOld }
                    }, () => {
                        swal({
                            title: "CMND đã tồn tại!",
                            text: "Vui lòng kiểm tra lại CMND",
                            icon: "warning",
                        });
                        checkCMND = false;
                    })
                } else {
                    checkCMND = true;
                }
            } else {
                checkCMND = true;
            }
            if (checkEmail && checkCMND) {
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
            dieuDuong: this.props.item,
        }, () => {
            this.setState({
                oldState: {
                    ...this.state.oldState, emailOld: this.state.dieuDuong.email,
                    cmndOld: this.state.dieuDuong.soCMND,
                }
            })
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


                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft formAvatar">
                                    <label >Ảnh chân dung: </label>
                                    <div className="avatarImg dd"  >
                                        <img src={avatar !== 'chưa có' ? avatar : imgTest} alt="avatar" className="avatarDieuDuong" />
                                    </div>
                                    <input type="file" className="form-contro input_file"
                                        name="avatar"
                                        style={{ display: this.props.role === 1 ? 'block' : (this.props.role === 2 ? 'none' : 'block') }}
                                        // value={avatar ? avatar : ''}
                                        onChange={this.handleChangeFileAvatar}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                <div className="form-group secondFormright">
                                    {/* Mã điều dưỡng */}{/* họ tên điều dưỡng */}
                                    <div className="d-flex justify-content-between">
                                        {/* Mã điều dưỡng */}
                                        <div
                                            className="form-group secondFormleft width4"
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
                                                required={true}
                                            />
                                        </div>
                                    </div>


                                    {/* Giới tính */}{/* SDT */}
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
                                        {/* Ngày Sinh */}
                                        <div className="form-group secondFormright">
                                            <label>Ngày sinh: </label>
                                            <input type="date" className="form-contro"
                                                /*disabled={true}*/
                                                name="ngaySinh" value={ngaySinh ? ngaySinh : ''}
                                                onChange={this.handleChange}
                                                disabled={
                                                    this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                                }
                                                required={true}
                                            />
                                        </div>
                                    </div>

                                    {/* SDT */}
                                    <div className="form-group secondFormleft">
                                        <label>* Số điện thoại: </label>
                                        <input type="num" className="form-contro"
                                            /*disabled={true}*/
                                            name="soDienThoai"
                                            value={soDienThoai ? soDienThoai : ''}
                                            onChange={this.handleChangeSpecialSDT}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : (this.props.chucVu === 0 ? false : true))
                                            }
                                            required={true}
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="form-group secondFormleft">
                                        <label >*Email: </label>
                                        <input type="email" className="form-contro"
                                            /*disabled={true}*/
                                            name="email" value={email ? email : ''}
                                            onChange={this.handleChangeSpecialEmail}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Ngày Sinh */}{/* Email */}{/* Trạng thái */}{/* Tỉnh thành */}
                            <div className="d-flex justify-content-between">
                                {/* Đào tạo viên */}
                                <div className="form-group secondFormleft "
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Là đào viên: </label>
                                    <select className="form-contro"
                                        value={laDaoTaoVien ? laDaoTaoVien : ''}
                                        name="laDaoTaoVien"
                                        onChange={this.handleChangeSpecialDTV}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : (this.state.dieuDuong.trangThai === 3 ? false : true))
                                        }
                                    >
                                        <option value={1}>Có</option>
                                        <option value={2}>Không</option>

                                    </select>
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
                                        required={true}
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
                                    <label>*Số CMND: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soCMND"
                                        value={soCMND ? soCMND : ''}
                                        onChange={this.handleChangeSpecialCMND}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                        required={true}

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
                                        required={true}
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
                                        required={true}
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
                                    required={true}
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
                                    required={true}
                                />
                            </div>


                            {/* Ảnh CMND mặt trước */}{/* Ảnh CMND mặt sau */}{/* Ảnh chân dung */}
                            <div className="d-flex justify-content-between ">
                                {/* Ảnh CMND mặt trước */}
                                <div className="form-group secondFormleft formAvatar ">
                                    <label >Ảnh CMND mặt trước: </label>
                                    <div className="avatarImg dd"  >
                                        <img src={anhMatTruoc !== 'chưa có' ? anhMatTruoc : cmndTest} alt="cmndMatTruoc" className="cmndImg" />
                                    </div>

                                    <input type="file" className="form-contro input_file"
                                        name="anhMatTruoc"
                                        // value={anhMatTruoc ? anhMatTruoc : ''}
                                        onChange={this.handleChangeFileCMNDmatTruoc}
                                        style={{ display: this.props.role === 1 ? 'block' : (this.props.role === 2 ? 'none' : 'block') }}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Ảnh CMND mặt sau */}
                                <div className="form-group secondFormright formAvatar">
                                    <label >Ảnh CMND mặt sau: </label>
                                    <div className="avatarImg dd"  >
                                        <img src={anhMatSau !== 'chưa có' ? anhMatSau : cmndTest} alt="cmndMatSau" className="cmndImg" />
                                    </div>

                                    <input type="file" className="form-contro input_file"
                                        name="anhMatSau"
                                        // value={anhMatSau ? anhMatSau : ''}
                                        style={{ display: this.props.role === 1 ? 'block' : (this.props.role === 2 ? 'none' : 'block') }}
                                        onChange={this.handleChangeFileCMNDmatSau}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Ảnh chân dung */}

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
        listTinhThanh: state.qlTinhThanh.listTinhThanh,
        checkExistDTV: state.qlDieuDuong.checkExist,
        checkExistSDT: state.qlDieuDuong.checkExistSDT,
        checkExistCMND: state.qlDieuDuong.checkExistCMND,
        checkExistEmail: state.qlDieuDuong.checkExistEmail,
        chucVu: state.credentials.credentials.value.admin_CHUCVU,
    }
}

export default connect(mapStateToProps)(ModalDieuDuong);