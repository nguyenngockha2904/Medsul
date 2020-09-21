import React, { Component, Fragment } from 'react';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_VITIEN } from '../../../Redux/actions/type';
import { StyledModel } from '../../../Styles';
import { connect } from 'react-redux';
import { capNhatViTien } from '../../../Redux/actions/DieuDuongAction';
class ModalViTien extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_VITIEN, false));
    }

    state = {
        isHistory: true,
        total: 0,
        item: {},
        monney: ''
    }
    toogleTabHistory = (value) => () => {
        this.setState({
            isHistory: value
        });
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleUpdateViTien = (id, value) => (e) => {
        e.preventDefault();
        this.props.dispatch(capNhatViTien(id, { soTienNapVaoVi: parseInt(value) }, () => {
            this.setState({
                isHistory: true
            }, () => {
                this._setValue();
            });
        }));
    }
    _setValue = () => {
        this.setState({
            item: this.props.item,
            total: this.props.item.tongTien,
        })
    }
    render() {
        // console.log(this.props.item);
        const { total } = this.state;
        return (
            <StyledModel>
                <div className=" modalService-dialog">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Ví tiền</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>x</button>
                        </div>
                        <div className="text-right" style={{ padding: '0 1rem' }}>
                            <button type="button" className="btnNapTien" onClick={() => {
                                this.setState({
                                    isHistory: !this.state.isHistory
                                });
                            }}>{this.state.isHistory ? 'Nạp tiền' : 'Quay lại'}</button>
                        </div>
                        {/* Modal body */}
                        <div className="d-flex justify-content-between  TongTien_Title">
                            <p className="m-0 p-0 subtitle">Số tiền tổng: </p>
                            <p className="m-0 p-0  price">{total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}<span className="vnd">Vnd</span></p>
                        </div>
                        {this.state.isHistory
                            ?
                            <Fragment>
                                <div className="TongTien_history">
                                    <p className="history_title">Lịch sử giao dịch: </p>
                                    <div className="d-flex justify-content-between history_item">
                                        <div className="">
                                            <p className="m-0 p-0 title_historyItem">Nạp tiền vào ví qua Admin</p>
                                            <p className="m-0 p-0 date_historyItem">14/09/2020 - 9:00</p>
                                        </div>
                                        <div className="">
                                            <p className="m-0 p-0 price_historyItem">+200.000đ</p>
                                            <p className="m-0 p-0 status_historyItem">Thất bại</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between history_item">
                                        <div className="">
                                            <p className="m-0 p-0 title_historyItem">Nạp tiền vào ví qua Admin</p>
                                            <p className="m-0 p-0 date_historyItem">14/09/2020 - 9:00</p>
                                        </div>
                                        <div className="">
                                            <p className="m-0 p-0 price_historyItem">+200.000đ</p>
                                            <p className="m-0 p-0 status_historyItem">Thành Công</p>
                                        </div>
                                    </div>
                                </div>

                            </Fragment>
                            :
                            <Fragment>
                                <form className="TongTien_history modalService-body " onSubmit={this.handleUpdateViTien(this.state.item.dieuDuong_Id, this.state.monney)}>
                                    <div className="form-group ac">
                                        <label >họ tên: </label>
                                        <input type="text" className="form-contro"
                                            name="tenDieuDuong" value={this.state.item.hoTen}
                                            disabled={true}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Số tiền nạp: </label>
                                        <input type="num" className="form-contro"
                                            name="monney" value={this.state.monney}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="text-center my-5">
                                        <button type="submit" className="btnNapTien" style={{ width: '500px' }}>Nạp tiền</button>
                                    </div>
                                </form>

                            </Fragment>
                        }

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
    item: state.qlDieuDuong.modalViTien.value
})
export default connect(mapStateToProps)(ModalViTien);