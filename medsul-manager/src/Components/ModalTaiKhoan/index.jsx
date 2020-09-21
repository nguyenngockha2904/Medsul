import React, { Component } from 'react';
import { StyledModel } from '../../Styles';
import avatarImg from '../../img/avatar/avatar_1.jpg';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { HIRE_MODAL_THONGTINCANHAN } from '../../Redux/actions/type';
import { capNhatManager } from '../../Redux/actions/managerAction';
import swal from 'sweetalert';
class TaiKhoanComponent extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_THONGTINCANHAN, {}));
    }
    state = {
        item: {},
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.item);
        const { admin_ID, admin_HOTEN, admin_USERNAME, admin_SDT, admin_PASSWORD, admin_CMND, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH, admin_DIACHI, admin_CHUCVU, admin_AVATAR, admin_CMNDMATSAU, admin_CMNDMATTRUOC, admin_CMNDNGAYCAP, admin_CMNDNOICAP, admin_TINHTRANG } = this.state.item;
        const upItem = {
            admin_AVATAR: admin_AVATAR,
            admin_CHUCVU: admin_CHUCVU,
            admin_CMND: admin_CMND,
            admin_CMNDMATSAU: admin_CMNDMATSAU,
            admin_CMNDMATTRUOC: admin_CMNDMATTRUOC,
            admin_CMNDNGAYCAP: admin_CMNDNGAYCAP,
            admin_CMNDNOICAP: admin_CMNDNOICAP,
            admin_DIACHI: admin_DIACHI,
            admin_EMAIL: admin_EMAIL,
            admin_GIOITINH: admin_GIOITINH,
            admin_HOTEN: admin_HOTEN,
            admin_NGAYSINH: admin_NGAYSINH,
            admin_PASSWORD: admin_PASSWORD,
            admin_SDT: admin_SDT,
            admin_TINHTRANG: admin_TINHTRANG,
            admin_USERNAME: admin_USERNAME
        }
        // console.log(upItem);
        let titleMessage = admin_CHUCVU === 1 ? 'mật khẩu' : 'dữ liệu';
        swal({
            title: "Bạn Chắc Chứ?",
            text: `Nếu đồng ý ${titleMessage} sẽ thay đổi!`,
            icon: "info",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                swal(`${titleMessage} đã được cập nhật!`, {
                    icon: "success",
                });
                this.props.dispatch(capNhatManager(admin_ID, upItem, this.HandleHireModal));
            } else {
                swal(`${titleMessage} được giữ nguyên!`);
                // this.HandleHireModal();
                this.setState({
                    item: this.props.item
                });
            }
        });


    }
    handleChange = e => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        });
    }
    _setValue = () => {
        this.setState({
            item: this.props.item
        })
    }
    render() {
        const { admin_HOTEN, admin_USERNAME, admin_SDT, admin_PASSWORD, admin_CMND, admin_EMAIL, admin_NGAYSINH, admin_GIOITINH, admin_DIACHI, admin_CHUCVU } = this.state.item; //chức vụ 0 admin 1 manager
        return (
            <div>
                <StyledModel>
                    <div className="modalService-dialog modal-lg">
                        <div className="modalService-content">
                            <div className="modalService-header ">
                                <h4 className="modal-title">Thông Tin Cá Nhân</h4>
                                <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                            </div>
                            <form className="modalService-body" onSubmit={this.handleSubmit}>
                                <div className="d-flex justify-content-between">
                                    <div className=" secondFormleft d-flex justify-content-center" style={{ width: '35%', marginRight: '1em' }}>
                                        <div className="avatarImg">
                                            <img src={avatarImg} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className=" secondFormright" style={{ width: '65%', marginLeft: '1em' }}>
                                        <div className="d-flex justify-content-between">
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                            >
                                                <label >Họ Tên</label>
                                                <input type="text" className="form-contro"
                                                    name="admin_HOTEN"
                                                    value={admin_HOTEN ? admin_HOTEN : ''} onChange={this.handleChange}
                                                    disabled={admin_CHUCVU === 1 ? true : false}
                                                />
                                            </div>
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                            >
                                                <label >Tài Khoản</label>
                                                <input type="text" className="form-contro"
                                                    value={admin_USERNAME ? admin_USERNAME : ''}
                                                    name="admin_USERNAME"
                                                    onChange={this.handleChange}
                                                    disabled={admin_CHUCVU === 1 ? true : false} />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                            >
                                                <label >Số Điện Thoại</label>
                                                <input type="tel" className="form-contro"
                                                    name="admin_SDT"
                                                    onChange={this.handleChange}
                                                    value={admin_SDT ? admin_SDT : ''}
                                                    disabled={admin_CHUCVU === 1 ? true : false}
                                                />
                                            </div>
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormright' : 'form-group secondFormright'}
                                            >
                                                <label >Mật Khẩu</label>
                                                <input type="password" className="form-contro"
                                                    value={admin_PASSWORD ? admin_PASSWORD : ''}
                                                    name="admin_PASSWORD"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                            >
                                                <label >CMND</label>
                                                <input type="text" className="form-contro"
                                                    value={admin_CMND ? admin_CMND : ''}
                                                    disabled={admin_CHUCVU === 1 ? true : false}
                                                    name="admin_CMND"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                            >
                                                <label >Email</label>
                                                <input type="email" className="form-contro"
                                                    value={admin_EMAIL ? admin_EMAIL : ''}
                                                    name="admin_EMAIL"
                                                    onChange={this.handleChange}
                                                    disabled={admin_CHUCVU === 1 ? true : false}
                                                />
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormleft ac' : 'form-group secondFormleft'}
                                            >
                                                <div>
                                                    <div className="form-group">
                                                        <label >Ngày Sinh</label>
                                                        <input type="date" name="trip-start" className="form-contro"
                                                            value={admin_NGAYSINH ? admin_NGAYSINH : '1987-04-25'}
                                                            disabled={admin_CHUCVU === 1 ? true : false}
                                                            name="admin_NGAYSINH"
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label >Giới Tính:</label>
                                                        <p className="form-contro">{admin_GIOITINH}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={admin_CHUCVU === 1 ? 'form-group secondFormright ac' : 'form-group secondFormright'}
                                            >
                                                <label >Địa Chỉ</label>
                                                <textarea className="form-contro mul_text" cols={57} rows={3} maxLength={65525} style={{ height: '100%', maxHeight: "127px" }} value={admin_DIACHI ? admin_DIACHI : ''}
                                                    name="admin_DIACHI"
                                                    onChange={this.handleChange}
                                                    disabled={admin_CHUCVU === 1 ? true : false}
                                                />
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

    componentDidMount() {
        this._setValue();
    }

}
const mapStateToProps = state => ({
    item: state.credentials.credentials.value
})
export default connect(mapStateToProps)(TaiKhoanComponent); 