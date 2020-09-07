import React, { Component } from 'react';
import styled from 'styled-components';
class ModalService extends Component {
    render() {
        return (
            <StyledModal className="modal fade" id="ServiceModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm dịch vụ mới</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft ac">
                                    <label htmlFor="madv">Mã dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        value="PHCN_TB"
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label htmlFor="madv">Mã loại dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        value="PHCN_TB"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Tên dịch vụ</label>
                                <input type="text" className="form-contro" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Tên dịch vụ</label>
                                <input type="text" className="form-contro" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mô tả dịch vụ</label>
                                <textarea name="" cols="30" rows="100" className="form-contro mul_text"
                                    style={{ height: '100px' }}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Yêu cầu dịch vụ</label>
                                <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                    style={{ height: '50px' }}
                                >
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label htmlFor="">Thời gian ước tính(Giờ)</label>
                                    <input type="text" className="form-contro" />
                                </div>
                                <div className="form-group secondFormright">
                                    <label htmlFor="">Công việc không bao gồm</label>
                                    <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger btnAccept" data-dismiss="modal">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </StyledModal>
        );
    }
}

export const StyledModal = styled.div`
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
                    &.mul_text{
                        border: 1px solid #CBD1D9;
                        text-align:left;
                    }
                }
                &.ac{
                    label{
                        font-size: 0.8em;
                        margin: 0;
                        color: #49505794;
                    }
                    .form-contro{
                    padding: 0 0.75rem;
                    font-size: 1em;
                    color: #49505794;
                    }
                }
                &.secondFormleft, &.secondFormright{
                    width: 100%;
                }
                &.secondFormleft{
                    margin-right:1em;
                }
                &.secondFormright{
                    margin-left:1em;
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


export default ModalService;
