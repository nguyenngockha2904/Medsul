import React, { Component } from 'react';
import { StyledModel } from '../../../Styles';
import { connect } from 'react-redux';
import { ThemLoaiDichVuMoi, CapNhatLoaiDichVu } from '../../../Redux/actions/DichVuAction';
import { CHECK_EXIST_LDV, HIRE_MODAL_LOAIDICHVU } from '../../../Redux/actions/type';
import swal from 'sweetalert';
import { createAction } from '../../../Redux/actions';
class ModalCategoryService extends Component {
    handleHireModal = () => {
        this.props.dispatch({
            type: HIRE_MODAL_LOAIDICHVU
        });
    }
    state = {
        id: '',
        LoaidichVu: {
            maLoaiDichVu: '',
            tenLoaiDichVu: ''
        }
    }
    handleChangeSpecial = e => {

        this.setState({
            LoaidichVu: { ...this.state.LoaidichVu, [e.target.name]: e.target.value }
        }, () => {
            this.props.dispatch(createAction(CHECK_EXIST_LDV, this.state.LoaidichVu.maLoaiDichVu));
        });
    }
    handleChange = e => {
        this.setState({
            LoaidichVu: { ...this.state.LoaidichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.dichVu);
        this.state.id
            ? (!this.props.isExistLDV ? swal({
                title: "Bạn Chắc Chứ?",
                text: "Nếu xác nhận dữ liệu loại dịch vụ này sẽ thay đổi !",
                icon: "warning",
                buttons: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal({
                            title: "Thành công",
                            text: "Loại dịch vụ này đã được cập nhật",
                            icon: "success",
                        });
                        let loaidv = {
                            maLoaiDichVu: this.state.LoaidichVu.maLoaiDichVu,
                            tenLoaiDichVu: this.state.LoaidichVu.tenLoaiDichVu
                        }
                        this.props.dispatch(CapNhatLoaiDichVu(this.state.id, loaidv));
                        this.handleHireModal();
                    } else {
                        swal({
                            title: "Giữ nguyên !",
                            text: "Dữ liệu được giữ nguyên",
                            icon: "info",
                        });
                        this.handleHireModal();
                    }
                }) : swal({
                    title: "Đã tồn tại!",
                    text: "Vui lòng kiểm tra lại mã loại dịch vụ!!",
                    icon: "warning",
                }))
            : !this.props.isExistLDV ? this.props.dispatch(ThemLoaiDichVuMoi(this.state.LoaidichVu, () => {
                swal({
                    title: "Thành Công!",
                    text: "Bạn đã thêm một loại dịch vụ mới!",
                    icon: "success",
                    button: "Ok!",
                });
                this.handleHireModal();
            })) : swal({
                title: "Đã tồn tại!",
                text: "Vui lòng kiểm tra lại mã loại dịch vụ!!",
                icon: "warning",
            })

    }
    _SetValue = () => {
        let LoaidichvuNew = {
            maLoaiDichVu: this.props.itemServiceType.maLoaiDichVu,
            tenLoaiDichVu: this.props.itemServiceType.tenLoaiDichVu
        }
        this.setState({
            id: this.props.itemServiceType.loaiDichVu_Id,
            LoaidichVu: LoaidichvuNew
        });
    }
    render() {
        const { maLoaiDichVu, tenLoaiDichVu } = this.state.LoaidichVu;
        return (
            <StyledModel className="modalService">
                <div className=" modalService-dialog">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modalService-title">{this.state.id ? `Chỉnh sửa loại dịch vụ` : 'Thêm Loại dịch vụ'}</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="usr">Mã loại dịch vụ :</label>
                                <input type="text" className="form-contro" name="maLoaiDichVu" onChange={this.handleChangeSpecial}
                                    value={maLoaiDichVu.toLocaleLowerCase()}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="pwd">Tên loại dịch vụ:</label>
                                <input type="text" className="form-contro" name="tenLoaiDichVu" onChange={this.handleChange}
                                    value={tenLoaiDichVu}
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
        this._SetValue();
    }
}
const mapStateToProps = state => {
    return {
        itemServiceType: state.qlDichVu.modalLoaiDV.value,
        isExistLDV: state.qlDichVu.isExistLDV,
    }
}
export default connect(mapStateToProps)(ModalCategoryService);        