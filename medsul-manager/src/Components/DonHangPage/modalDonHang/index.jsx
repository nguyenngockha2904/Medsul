import React, { Component } from 'react';
import { StyledModel } from '../../../Styles';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_DONHANG } from '../../../Redux/actions/type';
class ModalDonHang extends Component {
    state = {
        item: {

        }
    }
    handleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_DONHANG, {}));
    }
    handleChange = e => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    _setValue = () => {
        this.setState({
            item: this.props.item
        })
    }
    handleReturnDate = (value) => {
        let date = new Date(value);
        let dayCurrent = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate());
        return dayCurrent;
    }
    handleReturnTime = (value) => {
        let time = new time(value);

    }
    render() {
        const {
            ctd_DONGIA,
            ctd_GIOBATDAU,
            ctd_NGAYBATDAU,
            dichVu_Id,
            dl_DIACHI,
            dl_EMAIL,
            dl_GHICHU,
            dl_HOTEN,
            dl_NGAYDAT,
            dl_SDT,
            dl_TINHTRANG,
            dl_TONGTIEN,
            mgg_HESOGIAM,
            tenTinhThanh
        } = this.state.item;
        let role = this.props.role;
        // console.log();
        return (
            <StyledModel className="modalService">
                <div className=" modalService-dialog modal-lg">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Đơn hàng</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="d-flex justify-content-between">
                                <div className="form-group  secondFormleft width3">
                                    <label >Tên dịch vụ :</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        name="dichVu_Id"
                                        value={dichVu_Id ? dichVu_Id : ''}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group  secondFormright">
                                    <label >Tên khách hàng :</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        name="dl_HOTEN"
                                        value={dl_HOTEN ? dl_HOTEN : ''}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group  secondFormleft">
                                    <label >Số điện thoại :</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        name="dl_SDT"
                                        value={dl_SDT ? dl_SDT : ''}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group  secondFormright">
                                    <label >Email :</label>
                                    <input type="text" className="form-contro"
                                        disabled={true}
                                        name="dl_EMAIL"
                                        value={dl_EMAIL ? dl_EMAIL : ''}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label >Địa chỉ :</label>
                                <input type="text" className="form-contro"
                                    disabled={true}
                                    name="dl_DIACHI"
                                    value={dl_DIACHI ? dl_DIACHI : ''}
                                    onChange={this.handleChange}
                                />
                                <div className={role === 2 ? "form-group ac" : "form-group"}>
                                    <label  >Ghi chú của khách hàng : </label>
                                    <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                        style={{ height: '50px', marginTop: '10px' }}
                                        value={dl_GHICHU ? dl_GHICHU : ''}
                                        name="dl_GHICHU"
                                        onChange={this.handleChange}
                                        disabled={role === 1 ? false : (role === 2 ? true : false)}
                                    >
                                    </textarea>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <div className="form-group  secondFormleft">
                                        <label >Ngày đặt :</label>
                                        <input type="date" className="form-contro"
                                            disabled={true}
                                            name="dl_NGAYDAT"
                                            value={this.handleReturnDate(dl_NGAYDAT)}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group  secondFormleft secondFormright">
                                        <label >Ngày bắt đầu :</label>
                                        <input type="date" className="form-contro"
                                            disabled={true}
                                            name="ctd_NGAYBATDAU"
                                            value={this.handleReturnDate(ctd_NGAYBATDAU)}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group  secondFormright">
                                        <label >Giờ bắt đầu :</label>
                                        <input type="time" className="form-contro"
                                            disabled={true}
                                            name="ctd_GIOBATDAU"
                                            value={ctd_GIOBATDAU ? ctd_GIOBATDAU : '0:00'}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>

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
    componentDidMount() {
        this._setValue();
    }
}
const mapStateToProps = state => ({
    item: state.qlDonHang.modalDonHang.value,
    role: state.qlDonHang.modalDonHang.role,
})
export default connect(mapStateToProps)(ModalDonHang);