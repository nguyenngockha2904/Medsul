import React, { Component, Fragment } from 'react';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_VITIEN } from '../../../Redux/actions/type';
import { StyledModel } from '../../../Styles';
import { connect } from 'react-redux';
class ModalViTien extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_VITIEN, false));
    }

    state = {
        isHistory: true,
        monney: 0,
        item: {},
    }
    toogleTabHistory = (value) => () => {
        this.setState({
            isHistory: value
        });
    }

    _setValue = () => {
        this.setState({
            item: this.props.item,
            monney: this.props.item.tongTien,
        })
    }
    render() {
        // console.log(this.props.item);
        const { monney } = this.state;
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
                            <p className="m-0 p-0  price">{monney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}<span className="vnd">Vnd</span></p>
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
                                <form className="TongTien_history modalService-body ">
                                    <div className="form-group ac">
                                        <label >họ tên: </label>
                                        <input type="text" className="form-contro"
                                            name="tenDieuDuong"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Số tiền nạp: </label>
                                        <input type="num" className="form-contro"
                                            name="tenDieuDuong"
                                        />
                                    </div>
                                    <div className="text-center my-5">
                                        <button type="submit" className="btnNapTien" style={{ width: '500px' }} onClick={this.toogleTabHistory(true)}>Nạp tiền</button>
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