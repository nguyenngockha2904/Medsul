import React, { Component } from 'react';
import banner1 from '../../Assets/banner1.png';
import banner2 from '../../Assets/banner2.png';
import banner3 from '../../Assets/banner3.jpg';
import banner4 from '../../Assets/banner4.jpeg';
import banner5 from '../../Assets/banner5.jpeg';
import banner6 from '../../Assets/banner6.jpeg';
import { connect } from 'react-redux';
import { bookService } from '../../Redux/action/serviceAction';
import { StylePageComponent } from '../../Styles';
import swal from 'sweetalert';
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
            dl_TINHTRANG: 1,
            tinht_ID: 1
        },
        serviceItem: {

        },
        tinhThanh: {
            hsgU: this.props.listTinhThanh[0].heSoTinhThanhUser,
        },
        listBanner: [banner1, banner2, banner3, banner4, banner5, banner6],
        banner: banner1,


    }
    handleChangeNum = (e) => {
        let index = this.props.listTinhThanh.findIndex(tt => tt.tinhThanh_Id === parseInt(e.target.value));
        this.setState({
            item: { ...this.state.item, [e.target.name]: parseInt(e.target.value) }
        }, () => {
            if (index !== -1) {
                this.setState({
                    tinhThanh: { ...this.state.tinhThanh, hsgU: this.props.listTinhThanh[index].heSoTinhThanhUser }
                })
            }
        });
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
    handleSubmit = e => {
        e.preventDefault();
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
        let date = new Date();
        let dayCurrent = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate());
        let item = {
            ctd_GIOBATDAU: ctd_GIOBATDAU,
            ctd_NGAYBATDAU: ctd_NGAYBATDAU,
            dl_DIACHI: dl_DIACHI,
            dl_EMAIL: dl_EMAIL,
            dl_GHICHU: dl_GHICHU,
            dl_HOTEN: dl_HOTEN,
            dl_NGAYDAT: dayCurrent,
            dl_SDT: dl_SDT,
            dl_TINHTRANG: 1,
            tinht_ID: tinht_ID
        }
        console.log(item);
        this.props.dispatch(bookService(this.state.serviceItem.dichVu_Id, item, () => {
            this.setState({
                item: {
                    ...this.state.item, ctd_GIOBATDAU: "",
                    ctd_NGAYBATDAU: "",
                    dl_DIACHI: "",
                    dl_EMAIL: "",
                    dl_GHICHU: "",
                    dl_HOTEN: "",
                    dl_NGAYDAT: "",
                    dl_SDT: "",
                    dl_TINHTRANG: 0,
                    tinht_ID: 1
                }
            })
            swal({
                title: "Thành công!",
                text: `Medsul chân thành cảm ơn quý khách hàng đã tin tưởng!!`,
                icon: "success",
            }).then((value) => {
                swal({
                    title: "Lưu ý!",
                    text: `Xin quý khách hàng vui lòng giữ liên lạc điện thoại sẽ có nhân viên liên lạc ngay !`,
                });

            })

        }));

    }
    _setValue = () => {
        this.setState({
            serviceItem: this.props.valueDV,
            banner: this.state.listBanner[Math.floor(Math.random() * 6)],
        })
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.valueDV.dichVu_Id !== prevProps.valueDV.dichVu_Id) {
            this._setValue();
        }
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
        let giadichvu = this.state.serviceItem.giaDichVu - this.state.serviceItem.giaDichVu * (this.state.tinhThanh.hsgU / 100);
        let date = new Date();
        let dayCurrent = date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate());
        return (
            //  background-image: url(${listBanner[Math.floor(Math.random() * 6)]});
            <StylePageComponent>
                <div className="wrapper" style={{ backgroundImage: `url(${this.state.banner})` }}>
                    <form className="banner" onSubmit={this.handleSubmit}>
                        <p className="title text-center py-3">{this.state.serviceItem.tenDichVu}</p>
                        <div className="d-flex justify-content-between">
                            <div className='form-group secondFormright'>
                                <label >Họ và tên</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                    name='dl_HOTEN'
                                    value={dl_HOTEN ? dl_HOTEN : ''}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group  secondFormright'>
                                <label >Số điện thoại</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                    name='dl_SDT'
                                    value={dl_SDT ? dl_SDT : ''}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group secondFormleft secondFormright'>
                                <label >Email</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                    name='dl_EMAIL'
                                    value={dl_EMAIL ? dl_EMAIL : ''}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group secondFormleft'>
                                <label>Thành phố: </label>
                                <select className="form-contro"
                                    name="tinht_ID"
                                    value={tinht_ID}
                                    onChange={this.handleChangeNum}
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
                                        min={dayCurrent}
                                        name='ctd_NGAYBATDAU'
                                        value={ctd_NGAYBATDAU}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='form-group secondFormright secondFormleft'>
                                    <label >Giờ bắt đầu</label>
                                    <input type="time" className="form-contro"
                                        name='ctd_GIOBATDAU'
                                        value={ctd_GIOBATDAU}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='form-group  secondFormleft'>
                                <label >Ghi chú</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                    name='dl_GHICHU'
                                    value={dl_GHICHU ? dl_GHICHU : ''}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className='form-group secondFormright secondFormleft'>
                                <label >Địa chỉ</label>
                                <input type="text" className="form-contro"
                                    required={true}
                                    name='dl_DIACHI'
                                    value={dl_DIACHI ? dl_DIACHI : ''}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='form-group secondFormleft  price'>
                                <label >Giá dịch vụ:</label>
                                <p className="m-0 p-0 form-contro">{giadichvu.toLocaleString()}vnd</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btnAdd">Đặt dịch vụ</button>
                        </div>
                    </form>
                </div>
                <div className="container my-2 py-5">
                    <div className="d-flex justify-content-between">
                        <div className="infoServices">
                            <div className="groupInfo">
                                <p className="titleInfo">giới thiệu chung về dịch vụ :</p>
                                <p className="serviceContent">
                                    {this.state.serviceItem.moTaDichVu}
                                </p>
                            </div>
                            <div className="groupInfo">
                                <p className="titleInfo">Yêu cầu công việc :</p>
                                <p className="serviceContent">
                                    {this.state.serviceItem.yeuCauCongViec}
                                </p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="groupInfo twoGroup marginRight">
                                    <p className="titleInfo">Công việc không bao gồm :</p>
                                    <p className="serviceContent">
                                        {this.state.serviceItem.khongBaoGom}
                                    </p>
                                </div>
                                <div className="groupInfo twoGroup marginleft">
                                    <p className="titleInfo">Thời gian ước tính (giờ) :</p>
                                    <p className="serviceContent text-center">
                                        {this.state.serviceItem.thoiGianUocTinh} giờ
                                     </p>
                                </div>
                            </div>
                        </div>
                        <div className="TagImg">

                            <img src={banner4} alt="" className="img-fluid" />
                            <img src={banner5} alt="" className="img-fluid" />
                            <img src={banner6} alt="" className="img-fluid" />
                        </div>

                    </div>
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