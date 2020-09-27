import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bookService } from '../../Redux/action/serviceAction';
import { StylePageComponent } from '../../Styles';
class ServiceScreens extends Component {
    state = {
        item: {
            ctd_GIOBATDAU: "",
            ctd_NGAYBATDAU: "",
            dl_DIACHI: "",
            dl_EMAIL: "",
            dl_GHICHU: "",
            dl_HOTEN: "",
            dl_NGAYDAT: "",
            dl_SDT: "",
            dl_TINHTRANG: 0,
            tinht_ID: 1
        },
        serviceItem: {

        },
        tinhThanh: {
            hsgU: 0,
        }

    }
    handleChangeNum = (e) => {
        let hsgU = this.props.listTinhThanh.filter(tt => tt.tinhThanh_Id === parseInt(e.target.value))[0].heSoTinhThanhUser;
        // let gdv = this.state.serviceItem.giaDichVu - this.state.serviceItem.giaDichVu;
        // this.setState({
        //     serviceItem:{...serviceItem,giaDichVu:this.state.serviceItem.giaDichVu}
        // })
        this.setState({
            item: { ...this.state.item, [e.target.name]: parseInt(e.target.value) }
        }, () => {
            this.setState({
                tinhThanh: { ...this.state.tinhThanh, hsgU }
            }, () => {
                let giaDichVu = this.state.serviceItem.giaDichVu - this.state.serviceItem.giaDichVu * this.state.tinhThanh.hsgU;
                this.setState({
                    serviceItem: { ...this.state.serviceItem, giaDichVu }
                })
            })
        }
        );
    }
    handleChange = (e) => {
        this.setState({
            item: { ...this.state.item, [e.target.name]: e.target.value }
        });
    }
    renderTinhThanh = () => {
        return this.props.listTinhThanh.map((item, index) => {
            return (
                <option key={index} value={item.tinhThanh_Id}>{item.tenTinhThanh}</option>
            )
        })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            item: {
                ...this.state.item, ctd_NGAYBATDAU: this.state.item.ctd_NGAYBATDAU,
                dl_NGAYDAT: this.state.item.ctd_NGAYBATDAU
            }
        }, () => {
            let id = parseInt(this.props.match.params.idService);
            bookService(id, this.state.item, () => {
                console.log("thành công");
            });
            console.log(this.state.item);
        })
    }
    _setValue = () => {
        this.setState({
            serviceItem: this.props.valueDV
        })
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.valueDV.dichVu_Id !== prevProps.valueDV.dichVu_Id) {
            this._setValue();
        }
        // console.log(prevProps.valueDV);
    }
    render() {
        const { ctd_GIOBATDAU,//
            ctd_NGAYBATDAU,// 
            dl_DIACHI,// 
            dl_EMAIL,// 
            dl_GHICHU,// 
            dl_HOTEN, // 
            dl_NGAYDAT,
            dl_SDT, //
            dl_TINHTRANG,
            tinht_ID } = this.state.item;
        {/* BannerOrder */ }

        return (
            <StylePageComponent>
                <div className="wrapper">
                    <form className="banner">
                        <p className="title text-center py-3">PHCN sau tai biến</p>
                        <div className="d-flex justify-content-between">
                            <div className='form-group secondFormright'>
                                <label >Họ và tên</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                />
                            </div>
                            <div className='form-group  secondFormright'>
                                <label >Số điện thoại</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                />
                            </div>
                            <div className='form-group secondFormleft secondFormright'>
                                <label >Email</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                />
                            </div>
                            <div className='form-group secondFormleft'>
                                <label>Thành phố: </label>
                                <select className="form-contro"
                                >
                                    {this.renderTinhThanh()}
                                </select>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex justify-content between secondFormright">
                                <div className='form-group secondFormright'>
                                    <label >Ngày bắt đầu</label>
                                    <input type="date" className="form-contro"
                                        required={true}
                                    />
                                </div>
                                <div className='form-group secondFormright secondFormleft'>
                                    <label >Giờ bắt đầu</label>
                                    <input type="time" className="form-contro"
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className='form-group  secondFormleft'>
                                <label >Ghi chú</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className='form-group secondFormright secondFormleft'>
                                <label >Địa chỉ</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                />
                            </div>
                            <div className='form-group secondFormleft width3 price'>
                                <label >Giá dịch vụ:</label>
                                <p className="m-0 p-0 form-contro">50000</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btnAdd">Đặt dịch vụ</button>
                        </div>
                    </form>
                </div>
            </StylePageComponent>
        );
    }
    componentDidMount() {
        this._setValue();
    }
}
const mapStateToProps = state => {
    return {
        listTinhThanh: state.tinhThanh.listTinhThanh,
        listDV: state.service.ListDV,
        valueDV: state.service.componentService.value
    }
}


export default connect(mapStateToProps)(ServiceScreens);