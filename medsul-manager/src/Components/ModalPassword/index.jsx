import React, { Component } from 'react';
import { StyledModel } from '../../Styles';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { HIRE_MODAL_REPASSWORD } from '../../Redux/actions/type';
class ModalPassword extends Component {
    state = {
    }
    handleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_REPASSWORD, {}));
    }
    handleChange = (e) => {

    }
    handleSubmit = (e) => {

    }
    render() {
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
                                <label htmlFor="usr">Tài Khoản :</label>
                                <input type="text" className="form-contro" name="maLoaiDichVu" onChange={this.handleChange}

                                />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="pwd">Mật khẩu:</label>
                                <input type="password" className="form-contro" name="tenLoaiDichVu" onChange={this.handleChange}
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
}

export default connect()(ModalPassword);