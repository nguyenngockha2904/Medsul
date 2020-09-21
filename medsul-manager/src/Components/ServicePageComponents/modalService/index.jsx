import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHECK_EXIST_DV, HIRE_MODAL_DICHVU } from '../../../Redux/actions/type';
import { ThemDichVuMoi, CapNhatDichVu } from '../../../Redux/actions/DichVuAction';
import swal from 'sweetalert';
import { StyledModel } from '../../../Styles';
import { createAction } from '../../../Redux/actions';
class ModalService extends Component {
    handleHireModal = () => {
        this.props.dispatch({
            type: HIRE_MODAL_DICHVU
        });
    }
    state = {
        idLDV: '',
        maLDV: '',
        dichVu: {
            khongBaoGom: '',
            loaiDichVuID: 0,
            maDichVu: '',
            moTaDichVu: '',
            tenDichVu: '',
            thoiGianUocTinh: 0,
            yeuCauCongViec: '',
            giaDichVu: 0,
            tinhTrangDichVu: 1 //1 kinh doanh //2 tạm ngừng kinh doanh //3 Ngừng kinh doanh
        },
        oldDv: {
            maDichVu: '',
        }
    }
    handleChangeSpecial = e => {
        this.setState({
            dichVu: { ...this.state.dichVu, [e.target.name]: e.target.value }
        }, () => {
            this.props.dispatch(createAction(CHECK_EXIST_DV, this.state.dichVu.maDichVu));
        });
    }
    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            dichVu: { ...this.state.dichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = (e) => {
        const { khongBaoGom, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec, giaDichVu, tinhTrangDichVu, loaiDichVuID } = this.state.dichVu;
        e.preventDefault();
        let dvTemp = {
            khongBaoGom: khongBaoGom,
            loaiDichVuID: this.props.role === 1 ? this.state.idLDV : loaiDichVuID,
            maDichVu: maDichVu,
            moTaDichVu: moTaDichVu,
            tenDichVu: tenDichVu,
            thoiGianUocTinh: parseInt(thoiGianUocTinh),
            yeuCauCongViec: yeuCauCongViec,
            giaDichVu: parseInt(giaDichVu),
            tinhTrangDichVu: this.props.role === 1 ? 1 : parseInt(tinhTrangDichVu)
        };
        console.log(dvTemp);
        this.props.role === 1
            ?
            !this.props.isExistDV ? this.props.dispatch(ThemDichVuMoi(dvTemp, () => {
                swal({
                    title: "Thành Công!",
                    text: "Bạn đã thêm một dịch vụ mới!",
                    icon: "success",
                    button: "Ok!",
                });
                this.handleHireModal();
            }))
                : swal({
                    title: "Đã tồn tại!",
                    text: "Vui lòng kiểm tra lại mã dịch vụ!!",
                    icon: "warning",
                })
            : (this.state.dichVu.maDichVu !== this.state.oldDv.maDichVu ?
                (!this.props.isExistDV ?
                    swal({
                        title: "Bạn Chắc Chứ?",
                        text: "Nếu xác nhận dữ liệu dịch vụ này sẽ thay đổi!",
                        icon: "warning",
                        buttons: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {

                                let idDV = this.state.dichVu.dichVu_Id;
                                this.props.dispatch(CapNhatDichVu(idDV, dvTemp, () => {
                                    swal({
                                        title: "Thành công",
                                        text: "dịch vụ này đã được cập nhật !",
                                        icon: "success",
                                    });
                                    this.handleHireModal();
                                }));
                                // console.log('id: ' + idDV);
                                // console.log(dvTemp);
                            } else {
                                swal({
                                    title: "Giữ nguyên !",
                                    text: "Dữ liệu được giữ nguyên",
                                    icon: "info",
                                });
                            }
                        })
                    : swal({
                        title: "Đã tồn tại!",
                        text: "Vui lòng kiểm tra lại mã dịch vụ!!",
                        icon: "warning",
                    }))
                : swal({
                    title: "Bạn Chắc Chứ?",
                    text: "Nếu xác nhận dữ liệu dịch vụ này sẽ thay đổi!",
                    icon: "warning",
                    buttons: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {

                            let idDV = this.state.dichVu.dichVu_Id;
                            this.props.dispatch(CapNhatDichVu(idDV, dvTemp, () => {
                                swal({
                                    title: "Thành công",
                                    text: "dịch vụ này đã được cập nhật !",
                                    icon: "success",
                                });
                                this.handleHireModal();
                            }));
                            // console.log('id: ' + idDV);
                            // console.log(dvTemp);
                        } else {
                            swal({
                                title: "Giữ nguyên !",
                                text: "Dữ liệu được giữ nguyên",
                                icon: "info",
                            });
                        }
                    }))

    }
    _setValue = () => {
        this.setState({
            idLDV: this.props.dropDown_MaLDV,
            maLDV: this.props.maLDV,
            dichVu: this.props.itemService,
            oldDv: { ...this.state.oldDv, maDichVu: this.props.itemService.maDichVu }
        });
    }
    render() {
        const { khongBaoGom, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec, tinhTrangDichVu } = this.state.dichVu;
        let role = this.props.role;
        return (
            <StyledModel className='modalService'>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">{!this.props.itemService.dichVu_Id ? 'Thêm dịch vụ mới' : 'Cập nhật dịch vụ'}</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="d-flex justify-content-between">
                                <div
                                    className={role === 2 ? "form-group secondFormleft ac" : "form-group secondFormleft"}
                                >
                                    <label >Mã dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        value={maDichVu ? maDichVu : ''}
                                        name="maDichVu"
                                        onChange={this.handleChangeSpecial}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    />
                                </div>
                                <div
                                    className={role === 2 ? "form-group secondFormright ac" : "form-group secondFormright ac"}
                                >
                                    <label >Mã loại dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        value={this.state.maLDV ? this.state.maLDV : ''}
                                        name="loaiDichVuID"
                                        onChange={this.handleChange}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div
                                    className={role === 2 ? "form-group secondFormleft ac" : "form-group secondFormleft"}
                                >
                                    <label >Tên dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        value={tenDichVu ? tenDichVu : ''}
                                        name="tenDichVu"
                                        onChange={this.handleChange}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    />
                                </div>
                                <div
                                    className={role === 2 ? "form-group secondFormright width3 ac" : "form-group secondFormright width3"}
                                    style={{ display: this.props.role === 1 ? 'none' : 'block' }}
                                >
                                    <label>Trạng thái: </label>
                                    <select className="form-contro"
                                        value={tinhTrangDichVu ? tinhTrangDichVu : 1}
                                        name="tinhTrangDichVu"
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        <option value={1}>Kinh Doanh</option>
                                        <option value={2}>Tạm Ngừng Kinh Doanh</option>
                                        <option value={3}>Ngừng Kinh Doanh</option>
                                    </select>
                                </div>
                            </div>
                            <div className={role === 2 ? "form-group ac" : "form-group"}>
                                <label >Mô tả dịch vụ</label>
                                <textarea name="" cols="30" rows="100" className="form-contro mul_text"
                                    style={{ height: '100px' }}
                                    value={moTaDichVu ? moTaDichVu : ''}
                                    name="moTaDichVu"
                                    onChange={this.handleChange}
                                    disabled={role === 1 ? false : (role === 2 ? true : false)}
                                >
                                </textarea>
                            </div>
                            <div className={role === 2 ? "form-group ac" : "form-group"}>
                                <label  >Yêu cầu dịch vụ</label>
                                <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                    style={{ height: '50px' }}
                                    value={yeuCauCongViec ? yeuCauCongViec : ''}
                                    name="yeuCauCongViec"
                                    onChange={this.handleChange}
                                    disabled={role === 1 ? false : (role === 2 ? true : false)}
                                >
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div
                                    className={role === 2 ? "form-group secondFormleft ac" : "form-group secondFormleft"}
                                >
                                    <label >Thời gian ước tính(Giờ)</label>
                                    <input type="text" className="form-contro"
                                        name="thoiGianUocTinh"
                                        value={(+thoiGianUocTinh)}
                                        onChange={this.handleChange}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    />
                                </div>
                                <div className="form-group secondFormright"
                                    className={role === 2 ? "form-group secondFormright ac" : "form-group secondFormright"}
                                >
                                    <label htmlFor="">Công việc không bao gồm</label>
                                    <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                        name="khongBaoGom"
                                        value={khongBaoGom ? khongBaoGom : ''}
                                        onChange={this.handleChange}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div className="text-right" style={{ display: role === 1 ? 'block' : (role === 2 ? 'none' : 'block') }}>
                                <button type="submit" className="btn btn-danger btnAccept" data-dismiss="modal">Xác nhận</button>
                            </div>
                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModel>
        );
    }
    componentDidMount() {
        this._setValue();
    }
}
const mapstatetoProps = state => {
    return {
        itemService: state.qlDichVu.modalDV.value,
        maLDV: state.qlDichVu.modalDV.maLDV,
        dropDown_MaLDV: state.qlDichVu.dropDown_MaLDV,
        role: state.qlDichVu.modalDV.role,
        isExistDV: state.qlDichVu.isExistDV,
    }
}

export default connect(mapstatetoProps)(ModalService);
