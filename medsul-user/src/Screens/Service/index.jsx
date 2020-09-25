import React, { Component } from 'react';
import BannerOrder from '../../Assets/banner2.png';
import './styles.css';
import { connect } from 'react-redux';
import { bookService } from '../../Redux/action/serviceAction';
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
            tenDichVu: "",
            giaDichVu: 200000,
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
        let item = this.props.listDV.filter(dv => dv.dichVu_Id === parseInt(this.props.match.params.idService));

        this.setState({
            serviceItem: item[0],
        }, () => {
            let hsg = this.props.listTinhThanh.filter(tt => tt.tinhThanh_Id === this.state.item.tinht_ID)[0].heSoTinhThanhUser;
            // let giaDichVu = this.state.serviceItem.giaDichVu - this.state.serviceItem.giaDichVu * this.state.tinhThanh.hsgU;
            this.setState({
                tinhThanh: { ...this.state.tinhThanh, hsgU: hsg ? hsg : 0 }
            })
        });
    }
    render() {
        const { ctd_GIOBATDAU,
            ctd_NGAYBATDAU,
            dl_DIACHI,
            dl_EMAIL,
            dl_GHICHU,
            dl_HOTEN,
            dl_NGAYDAT,
            dl_SDT,
            dl_TINHTRANG,
            tinht_ID } = this.state.item;
        // const { tenDichVu, giaDichVu } = this.state.serviceItem;
        return (

            <div>
                <div className="order_background">
                    <img style={{ width: '100%' }} src={BannerOrder} alt="" />
                </div>
                <div className="order_title">
                    <h1 className="display-4 text-center">{this.state.serviceItem.tenDichVu}</h1>
                </div>
                <div className="order_content row">
                    <form className="row" onSubmit={this._handleSubmit}>
                        <div className="col-3">
                            <label className="title ml-2">Họ và tên </label>
                            <input type="text" className="form-control"
                                name="dl_HOTEN"
                                value={dl_HOTEN ? dl_HOTEN : ''}
                                onChange={this.handleChange} />
                        </div>
                        <div className="col-3">
                            <label className="title ml-2">Số điện thoại </label>
                            <input type="text" className="form-control" name="dl_SDT"
                                value={dl_SDT ? dl_SDT : ''}
                                onChange={this.handleChange} />
                        </div>
                        <div className="col-3">
                            <label className="title ml-2" >Email </label>
                            <input type="email" className="form-control" name="dl_EMAIL"
                                value={dl_EMAIL ? dl_EMAIL : ''}
                                onChange={this.handleChange} />
                        </div>
                        <div className="col-3">

                            <label className="title ml-2" >Tỉnh/Thành phố<span className="text-danger">*</span> </label>

                            <div className="form-group">
                                <select className="form-control" name="tinht_ID" value={tinht_ID} onChange={this.handleChangeNum}>
                                    {this.renderTinhThanh()}
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <label className="title ml-2">Ngày bắt đầu </label>
                            <input type="date" className="form-control" name="ctd_NGAYBATDAU" value={ctd_NGAYBATDAU ? ctd_NGAYBATDAU : ''} onChange={this.handleChange} />
                        </div>
                        <div className="col-3">
                            <label className="title ml-2" >Giờ bắt đầu </label>
                            <input type="time" className="form-control" name="ctd_GIOBATDAU" value={ctd_GIOBATDAU} onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <label className="title ml-2" >Ghi chú </label>
                            <input type="text" className="form-control" name="dl_GHICHU" value={dl_GHICHU ? dl_GHICHU : ''} onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <label className="title ml-2" >Địa chỉ </label>
                            <input type="text" className="form-control" name="dl_DIACHI" value={dl_DIACHI ? dl_DIACHI : ''} onChange={this.handleChange} />
                        </div>
                        <div className="col-12">
                            <h1>Giá: <span className="text-warning">{this.state.serviceItem.giaDichVu.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span></h1>
                        </div>{/*  */}
                        <div className="col-12 text-center">
                            <button className="btn btn-danger" style={{ textAlign: 'center' }}>ĐẶT LỊCH</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this._setValue();
    }
}
const mapStateToProps = state => {
    return {
        listTinhThanh: state.tinhThanh.listTinhThanh,
        listDV: state.service.ListDV
    }
}


export default connect(mapStateToProps)(ServiceScreens);