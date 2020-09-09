import React, { Component } from 'react';
import { StyledModal } from '../modalService/index';
import { connect } from 'react-redux';
import { ThemLoaiDichVuMoi, CapNhatLoaiDichVu } from '../../../Redux/actions/DichVuAction';
import { HIRE_MODAL_LOAIDICHVU } from '../../../Redux/actions/type';
import swal from 'sweetalert';
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
    handleChange = e => {
        this.setState({
            LoaidichVu: { ...this.state.LoaidichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.dichVu);
        this.state.id
            ? swal({
                title: "Bạn Chắc Chứ?",
                text: "Nếu xóa loại dịch vụ này thì các dịch vụ của nó sẽ bị xóa !",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal({
                            title: "Thành công",
                            text: "Loại dịch vụ này đã được cập nhật",
                            icon: "success",
                        });
                        this.props.dispatch(CapNhatLoaiDichVu(this.state.id, this.state.dichVu));
                    } else {
                        swal({
                            title: "Giữ nguyên !",
                            text: "Loại dịch vụ này được giữ nguyên",
                            icon: "info",
                        });
                    }
                })
            : this.props.dispatch(ThemLoaiDichVuMoi(this.state.dichVu));
        this.handleHireModal();
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
            <StyledModal className="modalService">
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
                                <input type="text" className="form-contro" name="maLoaiDichVu" onChange={this.handleChange}
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
            </StyledModal>
        );
    }
    componentDidMount() {
        this._SetValue();
    }
}
const mapStateToProps = state => {
    return {
        itemServiceType: state.qlDichVu.modalLoaiDV.value
    }
}
export default connect(mapStateToProps)(ModalCategoryService);        