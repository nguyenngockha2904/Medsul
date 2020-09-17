import React, { Component } from 'react';
import { StyledModel } from '../../../Styles';
import avatarImg from '../../../img/avatar/avatar_1.jpg';
import CMNDImg from '../../../img/indentityCard_Img.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_MANAGER } from '../../../Redux/actions/type';
class ModalManager extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_MANAGER, {}));
    }
    handleChange_Number = () => {

    }
    render() {
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg">
                    <div className="modalService-content">
                        <div className="modalService-header " style={{ paddingBottom: 0 }}>
                            <h4 className="modal-title">Thông Tin Quản Trị Viên</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        <form className="modalService-body" style={{ paddingTop: 0 }}>
                            <div className="titleGroup">Thông Tin Cá Nhân</div>
                            <div className="d-flex justify-content-between mb-4">
                                <div className=" secondFormright" style={{ width: '65%', marginLeft: '1em' }}>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Họ Tên</label>
                                            <input type="text" className="form-contro" id="firstName" />
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Số Điện Thoại</label>
                                            <input type="text" className="form-contro" id="firstName" />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Ngày Sinh</label>
                                            <input type="date" id="start" name="trip-start" className="form-contro" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15" />
                                        </div>
                                        <div className="form-group secondFormright ">
                                            <label>Giới Tính: </label>
                                            <div className="form-contro d-flex justify-content-end">
                                                <p className="mr-2">
                                                    <input className="radGen" type="radio" name="gioiTinh"
                                                    />Nam
                                                </p>
                                                <p className="mx-4"></p>
                                                <p>
                                                    <input className="radGen" type="radio" name="gioiTinh"
                                                    />Nữ
                                                 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Địa Chỉ</label>
                                        <input type="email" className="form-contro" id="firstName" />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Email</label>
                                            <input type="text" className="form-contro" id="firstName" />
                                        </div>
                                        <div className="form-group secondFormright width3">
                                            <label>Trạng thái: </label>
                                            <select className="form-contro"

                                                name="trangThai"
                                                onChange={this.handleChange_Number}

                                            >
                                                <option value={1}>Thử việc</option>
                                                <option value={2}>Nghỉ việc</option>
                                                <option value={3}>Chính thức</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className=" secondFormleft d-flex justify-content-center" style={{ width: '35%', marginRight: '1em' }}>
                                    <div className="avatarImg">
                                        <img src={avatarImg} alt="" className="img-fluid" />
                                    </div>
                                </div>

                            </div>

                            <div className="pt-2" style={{ borderTop: '1px dotted #CBD1D9' }}>
                                <div className="d-flex justify-content-between">
                                    <div className=" secondFormright" style={{ width: '65%', alignSelf: 'flex-start', marginRight: '1em' }}>
                                        <div className="titleGroup">Chứng Minh Nhân Dân</div>
                                        <div className="d-flex justify-content-between">
                                            <div className="form-group secondFormleft">
                                                <label >Số CMND</label>
                                                <input type="text" className="form-contro" id="firstName" />
                                            </div>
                                            <div className="form-group secondFormright width3">
                                                <label >Ngày Cấp</label>
                                                <input type="date" id="start" name="trip-start" className="form-contro" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15" />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <label >Nơi cấp</label>
                                            <input type="text" className="form-contro" id="firstName" />
                                        </div>

                                    </div>

                                    <div className=" secondFormleft" style={{ width: '35%', marginLeft: '1em' }}>

                                        <div className="form-group">
                                            <label >Ảnh CMND Mặt Trước: </label>
                                            <div className="avatarImg cmnd">
                                                <img src={CMNDImg} alt="CMNDImg" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label >Ảnh CMND Mặt Sau: </label>
                                            <div className="avatarImg cmnd">
                                                <img src={CMNDImg} alt="CMNDImg" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btnAccept">Xác nhận</button>
                            </div>

                        </form>


                    </div>

                </div>
            </StyledModel>
        );
    }
}

export default connect()(ModalManager);