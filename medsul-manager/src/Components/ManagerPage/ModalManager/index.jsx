import React, { Component } from 'react';
import { StyledModel } from '../../../Styles';
import avatarImg from '../../../img/avatar/avatar_1.jpg';
import CMNDImg from '../../../img/indentityCard_Img.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_MANAGER } from '../../../Redux/actions/type';
import { capNhatManager, themManager } from '../../../Redux/actions/managerAction';
import swal from 'sweetalert';
class ModalManager extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_MANAGER, {}));
    }
    state = {
        item: {}
    }

    handleChange_Number = (e) => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: parseInt(e.target.value) }
        });
    }
    handleChangeEmail = (e) => {

    }
    handleChangeCMND = (e) => {

    }
    handleChange = e => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        const {
            admin_ID, admin_PASSWORD, admin_CMNDMATSAU, admin_CMNDNOICAP,
            admin_CMNDMATTRUOC, admin_CMNDNGAYCAP, admin_TINHTRANG, admin_HOTEN,
            admin_AVATAR, admin_CHUCVU, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH,
            admin_SDT, admin_DIACHI, admin_USERNAME, admin_CMND
        } = this.state.item;
        let username = admin_EMAIL.slice(0, admin_EMAIL.lastIndexOf('@'));
        let itemAdd = {
            admin_AVATAR: admin_AVATAR,
            admin_CHUCVU: admin_CHUCVU,
            admin_CMND: admin_CMND,
            admin_CMNDMATSAU: this.props.role === 1 ? "string" : admin_CMNDMATSAU,
            admin_CMNDMATTRUOC: this.props.role === 1 ? "string" : admin_CMNDMATTRUOC,
            admin_CMNDNGAYCAP: admin_CMNDNGAYCAP,
            admin_CMNDNOICAP: admin_CMNDNOICAP,
            admin_DIACHI: admin_DIACHI,
            admin_EMAIL: admin_EMAIL,
            admin_GIOITINH: admin_GIOITINH,
            admin_HOTEN: admin_HOTEN,
            admin_NGAYSINH: admin_NGAYSINH,
            admin_PASSWORD: this.props.role === 1 ? '123' : admin_PASSWORD,
            admin_SDT: admin_SDT,
            admin_TINHTRANG: this.props.role === 1 ? 1 : admin_TINHTRANG,
            admin_USERNAME: this.props.role === 1 ? username : admin_USERNAME
        };
        if (this.props.role === 1) {
            this.props.dispatch(themManager(itemAdd, () => {
                swal({
                    title: "Thành công !!",
                    text: 'Bạn đã thêm thành công một quản trị viên mới !',
                    icon: "success",
                });
                this.HandleHireModal();
            }));

        } else if (this.props.role === 3) {
            swal({
                title: "Bạn Chắc Chứ?",
                text: `Nếu đồng ý dữ liệu sẽ thay đổi!`,
                icon: "info",
                buttons: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal(`Dữ liệu đã được cập nhật!`, {
                        icon: "success",
                    });
                    this.props.dispatch(capNhatManager(admin_ID, itemAdd, this.HandleHireModal));
                } else {
                    swal(`Dữ liệu được giữ nguyên!`);
                    // this.HandleHireModal();
                    this.setState({
                        item: this.props.item
                    });
                }
            });
        }

    }
    _setValue = () => {
        this.setState({
            item: this.props.item
        })
    }
    render() {
        // console.log(this.props.role === 1 ? 'thêm' : (this.props.role === 2 ? 'xem' : 'sửa'));
        const {
            admin_ID, admin_PASSWORD, admin_CMNDMATSAU, admin_CMNDNOICAP,
            admin_CMNDMATTRUOC, admin_CMNDNGAYCAP, admin_TINHTRANG, admin_HOTEN,
            admin_AVATAR, admin_CHUCVU, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH,
            admin_SDT, admin_DIACHI, admin_USERNAME, admin_CMND
        } = this.state.item;
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg">
                    <div className="modalService-content">
                        <div className="modalService-header " style={{ paddingBottom: 0 }}>
                            <h4 className="modal-title">{this.props.role === 1 ? "Thêm một quản trị viên mới" : (this.props.role === 2 ? 'Thông tin quản trị viên' : 'Cập nhật thông tin')}</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        <form className="modalService-body" style={{ paddingTop: 0 }} onSubmit={this.handleSubmit}>
                            <div className="titleGroup">Thông Tin Cá Nhân</div>
                            <div className="d-flex justify-content-between mb-4">
                                <div className=" secondFormright" style={{ width: '65%', marginLeft: '1em' }}>
                                    <div className="d-flex justify-content-between">
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                        >
                                            <label >Họ Tên</label>
                                            <input type="text" className="form-contro" value={admin_HOTEN ? admin_HOTEN : ''}
                                                name='admin_HOTEN'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                        >
                                            <label >Số Điện Thoại</label>
                                            <input type="text" className="form-contro"
                                                value={admin_SDT ? admin_SDT : ''}
                                                name='admin_SDT'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                        >
                                            <label >Ngày Sinh</label>
                                            <input type="date" className="form-contro"
                                                value={admin_NGAYSINH ? admin_NGAYSINH : ''}
                                                name='admin_NGAYSINH'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                        >
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
                                    <div className="d-flex justify-content-between">
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormleft width3 ac' : 'form-group secondFormleft width3'}
                                            style={{ display: this.props.role === 1 ? 'none' : 'block' }}
                                        >
                                            <label>Chức vụ: </label>
                                            <select className="form-contro"
                                                value={admin_CHUCVU ? admin_CHUCVU : ''}
                                                name='admin_CHUCVU'
                                                onChange={this.handleChange_Number}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            >
                                                <option value={0}>Admin</option>
                                                <option value={1}>Manager</option>
                                            </select>
                                        </div>
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                        >
                                            <label >Địa Chỉ</label>
                                            <input type="text" className="form-contro"
                                                value={admin_DIACHI ? admin_DIACHI : ''}
                                                name='admin_DIACHI'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                        >
                                            <label >Email</label>
                                            <input type="text" className="form-contro"
                                                value={admin_EMAIL ? admin_EMAIL : ''}
                                                name='admin_EMAIL'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>
                                        <div
                                            className={this.props.role === 2 ? 'form-group secondFormright width3 ac' : 'form-group secondFormright width3'}
                                            style={{ display: this.props.role === 1 ? 'none' : 'block' }}
                                        >
                                            <label>Trạng thái: </label>
                                            <select className="form-contro"
                                                value={admin_TINHTRANG ? admin_TINHTRANG : ''}
                                                name='admin_TINHTRANG'
                                                onChange={this.handleChange_Number}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                            >
                                                <option value={1}>Đang làm</option>
                                                <option value={2}>Nghỉ việc</option>
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
                                            <div
                                                className={this.props.role === 2 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                            >
                                                <label >Số CMND</label>
                                                <input type="text" className="form-contro"
                                                    value={admin_CMND ? admin_CMND : ''}
                                                    name='admin_CMND'
                                                    onChange={this.handleChange}
                                                    disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                    required={true}
                                                />
                                            </div>
                                            <div
                                                className={this.props.role === 2 ? 'form-group secondFormright width3 ac' : 'form-group secondFormright width3'}
                                            >
                                                <label >Ngày Cấp</label>
                                                <input type="date" className="form-contro"
                                                    value={admin_CMNDNGAYCAP ? admin_CMNDNGAYCAP : ''}
                                                    name='admin_CMNDNGAYCAP'
                                                    onChange={this.handleChange}
                                                    disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                    required={true}

                                                />
                                            </div>

                                        </div>
                                        <div
                                            className={this.props.role === 2 ? 'form-group ac' : 'form-group'}
                                        >
                                            <label >Nơi cấp</label>
                                            <input type="text" className="form-contro"
                                                value={admin_CMNDNOICAP ? admin_CMNDNOICAP : ''}
                                                name='admin_CMNDNOICAP'
                                                onChange={this.handleChange}
                                                disabled={this.props.role === 1 ? false : (this.props.role === 2 ? true : false)}
                                                required={true}
                                            />
                                        </div>

                                    </div>

                                    <div className=" secondFormleft" style={{ width: '35%', marginLeft: '1em' }}>

                                        <div className={this.props.role === 2 ? 'form-group ac' : 'form-group'}>
                                            <label >Ảnh CMND Mặt Trước: </label>
                                            <div className="avatarImg cmnd">
                                                <img src={CMNDImg} alt="CMNDImg" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className={this.props.role === 2 ? 'form-group ac' : 'form-group'}>
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
    componentDidMount() {
        this._setValue();
    }
}
const mapStateToProps = state => ({
    item: state.qlManager.modalManager.value,
    role: state.qlManager.modalManager.role
})
export default connect(mapStateToProps)(ModalManager);