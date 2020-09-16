import React, { Component } from 'react';
import { StyledModel } from '../../Styles';
import avatarImg from '../../img/avatar/avatar_1.jpg';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { HIRE_MODAL_THONGTINCANHAN } from '../../Redux/actions/type';
class TaiKhoanComponent extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_THONGTINCANHAN, {}));
    }
    render() {
        return (
            <div>
                <StyledModel>
                    <div className="modalService-dialog modal-lg">
                        <div className="modalService-content">
                            <div className="modalService-header ">
                                <h4 className="modal-title">Thông Tin Cá Nhân</h4>
                                <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                            </div>
                            <form className="modalService-body">
                                <div className="d-flex justify-content-between">
                                    <div className=" secondFormleft d-flex justify-content-center" style={{ width: '35%', marginRight: '1em' }}>
                                        <div className="avatarImg">
                                            <img src={avatarImg} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className=" secondFormright" style={{ width: '65%', marginLeft: '1em' }}>
                                        <div className="d-flex justify-content-between">
                                            <div className="form-group secondFormleft">
                                                <label >Họ Tên</label>
                                                <input type="text" className="form-contro" id="firstName" />
                                            </div>
                                            <div className="form-group secondFormright">
                                                <label >Tài Khoản</label>
                                                <input type="text" className="form-contro" id="firstName" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="form-group secondFormleft">
                                                <label >Số Điện Thoại</label>
                                                <input type="tel" className="form-contro" id="firstName" />
                                            </div>
                                            <div className="form-group secondFormright">
                                                <label >Mật Khẩu</label>
                                                <input type="password" className="form-contro" id="firstName" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="form-group secondFormleft">
                                                <label >CMND</label>
                                                <input type="text" className="form-contro" id="firstName" />
                                            </div>
                                            <div className="form-group secondFormright">
                                                <label >Email</label>
                                                <input type="email" className="form-contro" id="firstName" />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className="form-group secondFormleft">
                                                <div>
                                                    <div className="form-group">
                                                        <label >Ngày Sinh</label>
                                                        <input type="date" id="start" name="trip-start" className="form-contro" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Giới Tính:</label>
                                                        <p className="form-contro">Nam</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group secondFormright">
                                                <label >Địa Chỉ</label>
                                                <textarea id="comment" name="comment" className="form-contro mul_text" cols={57} rows={3} maxLength={65525} required="required" defaultValue={""} style={{ height: '100%', maxHeight: "127px" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btnAccept">Xác nhận</button>
                                </div>

                            </form>


                        </div>

                    </div>
                </StyledModel>
            </div>
        );
    }
}
export default connect()(TaiKhoanComponent); 