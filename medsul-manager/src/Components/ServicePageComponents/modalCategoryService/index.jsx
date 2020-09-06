import React, { Component } from 'react';
import styled from 'styled-components';
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
const StyledModal = styled.div`
    .modal-dialog{
        .modal-content{
            .modal-header{
                .modal-title{
                        color:#646D82;
                        text-transform:uppercase;
                        letter-spacing: 1px;
                        font-weight: 500;
                        font-size: 1.6em;
                }
                border:none;
            }
            .modal-body{
                border:none;
                .form-group{
                    label{
                        color:#646D82;
                    }
                    .form-contro{
                        display: block;
                        text-align:center;
                        width: 100%;
                        height: calc(1.5em + 0.75rem + 2px);
                        padding: 0.375rem 0.75rem;
                        font-size: 1rem;
                        font-weight: 400;
                        line-height: 1.5;
                        color: #495057;
                        background-color: #fff;
                        border-radius: 0.25rem;
                        border:none;
                        border-bottom:1px solid #CBD1D9;
                        outline: none;
                    }
                    &.ac{
                        label{
                            font-size: 0.8em;
                            margin: 0;
                        }
                        .form-contro{
                            padding: 0 0.75rem;
                        font-size: 0.7em;
                        color: #495057;
                        }
                    }
                }  
            }
            .modal-footer{
                border:none;
                .btnAccept{
                    border-radius:20px;
                    background-color:#2CD889;
                    border:none;
                }
            }
        }
    }
`;

export default ModalCategoryService;        