import React, { Component } from 'react';
import { StyledModal } from '../modalService/index';
import { connect } from 'react-redux';
import { ThemLoaiDichVuMoi } from '../../../Redux/actions/DichVuAction';
class ModalCategoryService extends Component {

    state = {
        dichVu: {
            loaiDichVu_Id: 0,
            maLoaiDichVu: '',
            tenLoaiDichVu: ''
        }
    }
    handleChange = e => {
        this.setState({
            dichVu: { ...this.state.dichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch(ThemLoaiDichVuMoi(this.state.dichVu));
    }
    handleSetValue = () => {

    }
    render() {
        return (
            <StyledModal className="modal fade" id="categoryServiceModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm Loại dịch vụ</h4>
                        </div>
                        {/* Modal body */}
                        <form className="modal-body" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="usr">Mã loại dịch vụ :</label>
                                <input type="text" className="form-contro" name="maLoaiDichVu" onChange={this.handleChange}
                                    value={this.state.dichVu.maLoaiDichVu}
                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="pwd">Tên loại dịch vụ:</label>
                                <input type="text" className="form-contro" name="tenLoaiDichVu" onChange={this.handleChange}
                                    value={this.state.dichVu.tenLoaiDichVu}
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
}

export default connect()(ModalCategoryService);        