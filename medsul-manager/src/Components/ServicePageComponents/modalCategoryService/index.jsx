import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledModal } from '../modalService/index';
class ModalCategoryService extends Component {
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
                        <div className="modal-body">
                            <div className="form-group ac">
                                <label htmlFor="usr">Mã loại dịch vụ :</label>
                                <input type="text" className="form-contro" id="usr" disabled={true} value="kha" />
                            </div>
                            <div className="form-group ">
                                <label htmlFor="pwd">Tên loại dịch vụ:</label>
                                <input type="text" className="form-contro" id="pwd" />
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger btnAccept" data-dismiss="modal">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </StyledModal>
        );
    }
}

export default ModalCategoryService;        