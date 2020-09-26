import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { StyledModel } from '../../../Styles/index';
import { HIRE_MODAL_TINHTHANH, CHECK_EXIST_MA_TINHTHANH } from '../../../Redux/actions/type';
import { themTinhThanh, capNhapTinhThanh } from '../../../Redux/actions/TinhThanhAction';
import swal from 'sweetalert';

class ModalTinhThanh extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_TINHTHANH, {}));
    }
    state = {
        item: {

        },
    }
    _setValue = () => {
        this.setState({
            item: this.props.item
        });
    }
    handleChangeSpecial = e => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        }, () => {
            this.props.dispatch(createAction(CHECK_EXIST_MA_TINHTHANH, this.state.item.maTinhThanh));
        });
    }
    handleChange = (e) => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // preventDefault  là không cho submit lại trang giữa trang mặc định khi submit
        const { tinhThanh_Id, maTinhThanh, tenTinhThanh, heSoTinhThanhDieuDuong, heSoTinhThanhUser } = this.state.item;
        let newitemTT = {
            heSoTinhThanhDieuDuong: parseFloat(heSoTinhThanhDieuDuong),
            heSoTinhThanhUser: parseFloat(heSoTinhThanhUser),
            maTinhThanh: maTinhThanh,
            tenTinhThanh: tenTinhThanh,
        }
        let updateTT = {
            ...newitemTT,
            heSoTinhThanhDieuDuong: parseFloat(heSoTinhThanhDieuDuong),
            heSoTinhThanhUser: parseFloat(heSoTinhThanhUser),
            maTinhThanh: maTinhThanh,
            tenTinhThanh: tenTinhThanh,
        }
        if (this.props.role === 1) {
            //sự kiện thêm 
            if (!this.props.isExistMaTT) {
                this.props.dispatch(themTinhThanh(newitemTT, () => {
                    swal({
                        title: "Thành Công!",
                        text: "Bạn đã thêm một tỉnh thành mới!",
                        icon: "success",
                        button: "Ok!",
                    });
                    this.HandleHireModal();
                }));
            } else {
                swal({
                    title: "Đã tồn tại!",
                    text: "Vui lòng kiểm tra lại Mã tỉnh thành!!",
                    icon: "warning",
                });
            }

            // console.log(newitemTT);
        } else {
            //sự kiện sửa
            if (!this.props.isExistMaTT) {
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
                        this.props.dispatch(capNhapTinhThanh(tinhThanh_Id, updateTT, this.HandleHireModal));
                    } else {
                        swal({
                            title: "Giữ nguyên !",
                            text: "Dữ liệu được giữ nguyên",
                            icon: "info",
                        });
                    }
                });
            } else {
                swal({
                    title: "Đã tồn tại!",
                    text: "Vui lòng kiểm tra lại Mã tỉnh thành!!",
                    icon: "warning",
                });
                this.setState({
                    item: { ...this.state.item, maTinhThanh: this.props.item.maTinhThanh }
                })
            }

        }



    }
    render() {
        const { tinhThanh_Id, maTinhThanh, tenTinhThanh, heSoTinhThanhDieuDuong, heSoTinhThanhUser } = this.state.item;
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <div className="titleGroup">{this.props.role === 1 ? "Thêm tỉnh thành mới" : (this.props.role === 2 ? 'Thông tin tỉnh thành' : 'Cập nhật thông tin tỉnh thành')}</div>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            {/* Mã tỉnh thành */}{/* họ tên tỉnh thành */}
                            <div className="d-flex justify-content-between">
                                {/* Mã Tỉnh Thành */}
                                <div
                                    className="form-group secondFormleft width3"
                                >
                                    <label >Mã tỉnh thành: </label>
                                    <input type="text" className="form-contro " name="maTinhThanh" value={maTinhThanh ? maTinhThanh : ''} onChange={this.handleChangeSpecial} />
                                    {/* value={maTinhThanh?maTinhThanh:''} */}
                                </div>
                                {/* họ tên điều dưỡng */}
                                <div className="form-group secondFormright">
                                    <label >Tên tỉnh thành: </label>
                                    <input type="text" className="form-contro" name="tenTinhThanh" value={tenTinhThanh ? tenTinhThanh : ''} onChange={this.handleChange} />
                                </div>
                            </div>


                            {/* Hệ số User */}{/* Hệ số Điều Dưỡng */}
                            <div className="d-flex justify-content-between">
                                {/* Hệ số User */}
                                <div className="form-group secondFormright">
                                    <label >Hệ số giảm dành cho user (%): </label>
                                    <input placeholder="0.0 ....." type="text" className="form-contro" name="heSoTinhThanhUser" value={heSoTinhThanhUser ? heSoTinhThanhUser : ''} onChange={this.handleChange} />
                                </div>
                                {/* Hệ số Điều Dưỡng */}
                                <div className="form-group secondFormright">
                                    <label >Hệ số giảm dành cho điều dưỡng (%): </label>
                                    <input placeholder="0.0 ....." type="text" className="form-contro" name="heSoTinhThanhDieuDuong" value={heSoTinhThanhDieuDuong ? heSoTinhThanhDieuDuong : ''} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="text-right" style={{ display: this.props.role === 1 ? "block" : (this.props.role === 2 ? 'none' : 'block') }}>
                                <button type="submit" className="btn btnAccept" onSubmit={this.handleSubmit}>Xác nhận</button>
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
const mapStateToProps = state => ({
    item: state.qlTinhThanh.modalTinhThanh.value,
    role: state.qlTinhThanh.modalTinhThanh.role,
    isExistMaTT: state.qlTinhThanh.isExistTT
})

export default connect(mapStateToProps)(ModalTinhThanh);