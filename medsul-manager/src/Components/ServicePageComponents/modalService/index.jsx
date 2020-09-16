import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HIRE_MODAL_DICHVU } from '../../../Redux/actions/type';
import { ThemDichVuMoi, CapNhatDichVu } from '../../../Redux/actions/DichVuAction';
import swal from 'sweetalert';
import { StyledModel } from '../../../Styles';
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
            yeuCauCongViec: ''
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value);

        this.setState({
            dichVu: { ...this.state.dichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let dvTemp = {
            khongBaoGom: this.state.dichVu.khongBaoGom,
            loaiDichVuID: this.state.idLDV,
            maDichVu: this.state.dichVu.maDichVu,
            moTaDichVu: this.state.dichVu.moTaDichVu,
            tenDichVu: this.state.dichVu.tenDichVu,
            thoiGianUocTinh: +this.state.dichVu.thoiGianUocTinh * 1,
            yeuCauCongViec: this.state.dichVu.yeuCauCongViec
        };
        this.props.itemService.dichVu_Id === 0
            ?
            this.props.dispatch(ThemDichVuMoi(dvTemp))
            : swal({
                title: "Bạn Chắc Chứ?",
                text: "Nếu xác nhận dữ liệu dịch vụ này sẽ thay đổi!",
                icon: "warning",
                buttons: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal({
                            title: "Thành công",
                            text: "dịch vụ này đã được cập nhật !",
                            icon: "success",
                        });
                        let idDV = this.state.dichVu.dichVu_Id;
                        this.props.dispatch(CapNhatDichVu(idDV, dvTemp));
                        // console.log('id: ' + idDV);
                        // console.log(dvTemp);
                    } else {
                        swal({
                            title: "Giữ nguyên !",
                            text: "Dữ liệu được giữ nguyên",
                            icon: "info",
                        });
                    }
                });
        this.handleHireModal();
    }
    _setValue = () => {
        this.setState({
            idLDV: this.props.dropDown_MaLDV,
            maLDV: this.props.maLDV,
            dichVu: this.props.itemService
        });
    }
    render() {
        const { khongBaoGom, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec } = this.state.dichVu;
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
                                <div className="form-group secondFormleft">
                                    <label htmlFor="madv">Mã dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        value={maDichVu}
                                        name="maDichVu"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label htmlFor="madv">Mã loại dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        value={this.state.maLDV}
                                        name="loaiDichVuID"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Tên dịch vụ</label>
                                <input type="text" className="form-contro"
                                    value={tenDichVu}
                                    name="tenDichVu"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mô tả dịch vụ</label>
                                <textarea name="" cols="30" rows="100" className="form-contro mul_text"
                                    style={{ height: '100px' }}
                                    value={moTaDichVu}
                                    name="moTaDichVu"
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Yêu cầu dịch vụ</label>
                                <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                    style={{ height: '50px' }}
                                    value={yeuCauCongViec}
                                    name="yeuCauCongViec"
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label htmlFor="">Thời gian ước tính(Giờ)</label>
                                    <input type="text" className="form-contro"
                                        name="thoiGianUocTinh"
                                        value={(+thoiGianUocTinh)}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group secondFormright">
                                    <label htmlFor="">Công việc không bao gồm</label>
                                    <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                        name="khongBaoGom"
                                        value={khongBaoGom}
                                        onChange={this.handleChange}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start form-group quyTrinh_Content">
                                <div className="mx-1  quyTrinhItem">
                                    <p className="m-0 p-0 mb-2 step">
                                        bước 1
                                        </p>
                                    <p className="m-0 p-0  quyTrinh_Title">
                                        cở áo bệnh nhân nữ ra
                                        </p>
                                </div>
                                <div className="mx-1  quyTrinhItem">
                                    <p className="m-0 p-0 mb-2 step">
                                        bước 1
                                        </p>
                                    <p className="m-0 p-0 quyTrinh_Title">
                                        cở áo bệnh nhân nữ ra
                                        </p>
                                </div>
                                <div className="mx-1  quyTrinhItem">
                                    <p className="m-0 p-0 mb-2 step">
                                        bước 1
                                        </p>
                                    <p className="m-0 p-0 quyTrinh_Title">
                                        cở áo bệnh nhân nữ ra
                                        </p>
                                </div>
                            </div>

                            <div className="text-right">
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
        dropDown_MaLDV: state.qlDichVu.dropDown_MaLDV
    }
}

export default connect(mapstatetoProps)(ModalService);
