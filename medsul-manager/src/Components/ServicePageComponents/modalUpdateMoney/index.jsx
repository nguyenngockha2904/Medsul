import React, { Component } from 'react';
import { StyledModel } from '../../../Styles';
import { connect } from 'react-redux';
import { HIRE_MODAL_GIA_DICH_VU } from '../../../Redux/actions/type';
import { createAction } from '../../../Redux/actions';
import swal from 'sweetalert';
import { CapNhatDichVu } from '../../../Redux/actions/DichVuAction';
class ModalMoney extends Component {

    handleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_GIA_DICH_VU, {}));
    }

    state = {
        item: {
            maDichVu: ''
        },
        value: {
            price: '',
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const { khongBaoGom, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec, giaDichVu, tinhTrangDichVu, loaiDichVuID } = this.state.item;
        e.preventDefault();
        let dvTemp = {
            khongBaoGom: khongBaoGom,
            loaiDichVuID: loaiDichVuID,
            maDichVu: maDichVu,
            moTaDichVu: moTaDichVu,
            tenDichVu: tenDichVu,
            thoiGianUocTinh: thoiGianUocTinh,
            yeuCauCongViec: yeuCauCongViec,
            giaDichVu: parseInt(this.state.value.price),
            tinhTrangDichVu: tinhTrangDichVu
        };
        console.log(dvTemp);
        swal({
            title: "Bạn Chắc Chứ?",
            text: "Nếu xác nhận dữ liệu dịch vụ này sẽ thay đổi!",
            icon: "warning",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal({
                        title: "Thành công",
                        text: "dịch vụ này đã được cập nhật !",
                        icon: "success",
                    });
                    let idDV = this.state.item.dichVu_Id;
                    this.props.dispatch(CapNhatDichVu(idDV, dvTemp));
                    this.handleHireModal();
                } else {
                    swal({
                        title: "Giữ nguyên !",
                        text: "Dữ liệu được giữ nguyên",
                        icon: "info",
                    });
                    this.handleHireModal();
                }
            });
    }
    handleChange = e => {
        this.setState({
            value: { ...this.state.value, [e.target.name]: e.target.value }
        })
    }
    _setValue = () => {
        this.setState({
            item: this.props.item,
            value: { ...this.state.value, price: this.props.item.giaDichVu }
        })
    }
    render() {
        const { maDichVu } = this.state.item;
        return (
            <StyledModel className="modalService">
                <div className=" modalService-dialog">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modalService-title">Cập nhật giá cho dịch vụ</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="form-group ac">
                                <label >Mã dịch vụ :</label>
                                <input type="text" className="form-contro" name="maLoaiDichVu"
                                    value={maDichVu.toLocaleLowerCase()}
                                    disabled={true}
                                />
                            </div>
                            <div className="form-group ">
                                <label >Giá dịch vụ:</label>
                                <input type="text" className="form-contro" name="price" onChange={this.handleChange}
                                    value={this.state.value.price}
                                />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-danger btnAccept"
                                    disabled={this.state.value.price <= 0 ? true : false}
                                >Xác Nhận</button>
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
    item: state.qlDichVu.modalGiaDichVu.value
});
export default connect(mapStateToProps)(ModalMoney);