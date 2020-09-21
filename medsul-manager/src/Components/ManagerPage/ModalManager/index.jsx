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
    handleChange = () => {

    }
    render() {
        // console.log(this.props.role === 1 ? 'thêm' : (this.props.role === 2 ? 'xem' : 'sửa'));
        const {
            admin_ID, admin_PASSWORD, admin_CMNDMATSAU, admin_CMNDNOICAP,
            admin_CMNDMATTRUOC, admin_CMNDNGAYCAP, admin_TINHTRANG, admin_HOTEN,
            admin_AVATAR, admin_CHUCVU, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH,
            admin_SDT, admin_DIACHI, admin_USERNAME, admin_CMND
        } = this.props.item;
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg">
                    <div className="modalService-content">
                        <div className="modalService-header " style={{ paddingBottom: 0 }}>
                            <h4 className="modal-title">{this.props.role === 1 ? "Thêm một quản trị viên mới" : (this.props.role === 2 ? 'Thông tin quản trị viên' : 'Cập nhật thông tin')}</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        <form className="modalService-body" style={{ paddingTop: 0 }}>
                            <div className="titleGroup">Thông Tin Cá Nhân</div>
                            <div className="d-flex justify-content-between mb-4">
                                <div className=" secondFormright" style={{ width: '65%', marginLeft: '1em' }}>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Họ Tên</label>
                                            <input type="text" className="form-contro" value={admin_HOTEN ? admin_HOTEN : ''}
                                                name='admin_HOTEN'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            />
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Số Điện Thoại</label>
                                            <input type="text" className="form-contro"
                                                value={admin_SDT ? admin_SDT : ''}
                                                name='admin_SDT'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Ngày Sinh</label>
                                            <input type="date" className="form-contro" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15"
                                                value={admin_NGAYSINH ? admin_NGAYSINH : ''}
                                                name='admin_NGAYSINH'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            />
                                        </div>
                                        <div className="form-group secondFormright ">
                                            <label>Giới Tính: </label>
                                            <div className="form-contro d-flex justify-content-end">
                                                <p className="mr-2">
                                                    <input className="radGen" type="radio"
                                                        checked={admin_GIOITINH === 'Nam' ? true : false}
                                                        value='Nam'
                                                        name='admin_GIOITINH'
                                                        onChange={this.handleChange}
                                                        disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                    />Nam
                                                </p>
                                                <p className="mx-4"></p>
                                                <p>
                                                    <input className="radGen" type="radio"
                                                        checked={admin_GIOITINH === 'Nam' ? false : true}
                                                        value="Nữ"
                                                        name='admin_GIOITINH'
                                                        onChange={this.handleChange}
                                                        disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                    />Nữ
                                                 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Địa Chỉ</label>
                                        <input type="email" className="form-contro"
                                            value={admin_DIACHI ? admin_DIACHI : ''}
                                            name='admin_DIACHI'
                                            onChange={this.handleChange}
                                            disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Email</label>
                                            <input type="text" className="form-contro"
                                                value={admin_EMAIL ? admin_EMAIL : ''}
                                                name='admin_EMAIL'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            />
                                        </div>
                                        <div className="form-group secondFormright width3">
                                            <label>Trạng thái: </label>
                                            <select className="form-contro"
                                                value={admin_TINHTRANG ? admin_TINHTRANG : ''}
                                                name='admin_TINHTRANG'
                                                onChange={this.handleChange_Number}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
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
                                                <input type="text" className="form-contro"
                                                    value={admin_CMND ? admin_CMND : ''}
                                                    name='admin_CMND'
                                                    onChange={this.handleChange}
                                                    disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                />
                                            </div>
                                            <div className="form-group secondFormright width3">
                                                <label >Ngày Cấp</label>
                                                <input type="date" className="form-contro" defaultValue="yyyy/mm/dd" min="2018-01-01" max="2020-09-15"
                                                    value={admin_CMNDNGAYCAP ? admin_CMNDNGAYCAP : ''}
                                                    name='admin_CMNDNGAYCAP'
                                                    onChange={this.handleChange}
                                                    disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}

                                                />
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <label >Nơi cấp</label>
                                            <input type="text" className="form-contro"
                                                value={admin_CMNDNOICAP ? admin_CMNDNOICAP : ''}
                                                name='admin_CMNDNOICAP'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            />
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
                            <div className="text-center" style={{ display: this.props.role === 1 ? "block" : (this.props.role === 2 ? 'none' : 'block') }}>
                                <button type="submit" className="btn btnAccept">Xác nhận</button>
                            </div>

                        </form>


                    </div>

                </div>
            </StyledModel>
        );
    }
}
const mapStateToProps = state => ({
    item: state.qlManager.modalManager.value,
    role: state.qlManager.modalManager.role
})
export default connect(mapStateToProps)(ModalManager);