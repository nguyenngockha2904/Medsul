import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { HIRE_MODAL_DIEUDUONG } from '../../../Redux/actions/type';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
class ModalDieuDuong extends Component {
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_DIEUDUONG, false));
    }

    state = {
        dieuDuong: {
            anhMatSau: '',
            anhMatTruoc: '',
            avatar: '',
            diaChi: '',
            diaChiThuongTruCMND: '',
            dieuDuong_Id: '',
            email: '',
            gioiTinh: 'Nam',
            hoTen: '',
            laDaoTaoVien: 0,
            maDieuDuong: '',
            nganHangLienKet: '',
            ngayCapCMND: '',
            ngaySinh: '',
            noiCap: '',
            password: '',
            queQuanCMND: '',
            soCMND: '',
            soDienThoai: '',
            soTaiKhoanNganHang: '',
            tinhThanh_ID: 1,
            tongTien: '',
            trangThai: 1,
        }
    }
    handleChange = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: e.target.value }
        });
    }
    handleChange_Number = e => {
        this.setState({
            dieuDuong: { ...this.state.dieuDuong, [e.target.name]: parseInt(e.target.value) }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.dieuDuong);
    }
    renderTinhThanh = () => {
        return (
            <Fragment>
                <option value={1}>TP. HCM</option>
                <option value={2}>Hà Nội</option>
                <option value={3}>Đà Nẵng</option>
                <option value={4}>Hà Tĩnh</option>
            </Fragment>
        )
    }
    _SetValue = () => {
        this.setState({
            dieuDuong: this.props.item
        }, () => {
            console.log(this.state.dieuDuong);
        })
    }
    render() {
        // console.log(this.props.item);
        console.log(this.props.role === 1 ? 'Thêm' : (this.props.role === 2 ? 'Xem' : 'Sửa'));
        const { anhMatSau, anhMatTruoc, avatar, diaChi, diaChiThuongTruCMND, dieuDuong_Id, email, gioiTinh, hoTen, laDaoTaoVien, maDieuDuong, nganHangLienKet, ngayCapCMND, ngaySinh, noiCap, password, queQuanCMND, soCMND, soDienThoai, soTaiKhoanNganHang, tinhThanh_ID,
            tongTien, trangThai } = this.state.dieuDuong;
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">{
                                this.props.role === 1 ? 'Thêm điều dưỡng' : (this.props.role === 2 ? 'Thông tin chi tiết' : 'Cập nhật thông tin')
                            }</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={(this.props.role === 2 ? () => { } : this.handleSubmit)
                        }>
                            <div className="titleGroup">Thông tin cá nhân</div>


                            {/* Mã điều dưỡng */}{/* họ tên điều dưỡng */}
                            <div className="d-flex justify-content-between">
                                {/* Mã điều dưỡng */}
                                <div
                                    className="form-group secondFormleft width3"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label >Mã điều dưỡng: </label>
                                    <input type="text" className="form-contro "
                                        name="maDieuDuong"
                                        value={maDieuDuong ? maDieuDuong : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : false)
                                        }

                                    />
                                </div>
                                {/* họ tên điều dưỡng */}
                                <div className="form-group secondFormright"
                                    className={this.props.role === 1 ? "form-group w-100" : "form-group secondFormright"}
                                >
                                    <label >Tên điều dưỡng: </label>
                                    <input type="text" className="form-contro"
                                        name="hoTen"
                                        value={hoTen ? hoTen : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Giới tính */}{/* SDT */}{/* password */}
                            <div className="d-flex justify-content-between">
                                {/* Giới tính */}
                                <div className="form-group secondFormleft ">
                                    <label>Giới tính: </label>
                                    <div className="form-contro d-flex justify-content-end">
                                        <p className="mr-2">
                                            <input className="radGen" type="radio" name="gioiTinh" defaultChecked={gioiTinh === 'Nam' ? true : false}
                                                value="Nam" onChange={this.handleChange}
                                                disabled={
                                                    this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                                }
                                            />Nam
                                    </p>
                                        <p className="mx-4"></p>
                                        <p>
                                            <input className="radGen" type="radio"
                                                defaultChecked={gioiTinh === 'Nam' ? false : true} name="gioiTinh" value="Nữ" onChange={this.handleChange}
                                                disabled={
                                                    this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                                }
                                            />Nữ
                                    </p>
                                    </div>
                                </div>
                                {/* SDT */}
                                <div className="form-group secondFormleft secondFormright">
                                    <label>* Số điện thoại: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="soDienThoai"
                                        value={soDienThoai ? soDienThoai : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* password */}
                                <div className="form-group  secondFormright"
                                    style={
                                        this.props.role === 1 ? { display: 'block' } : (this.props.role === 2 ? { display: 'none' } : { display: 'block' })
                                    }
                                >
                                    <label >* Password: </label>
                                    <input type="password" className="form-contro"
                                        /*disabled={true}*/
                                        name="password"
                                        value={password ? password : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>

                            </div>


                            {/* Ngày Sinh */}{/* Email */}{/* Trạng thái */}{/* Tỉnh thành */}
                            <div className="d-flex justify-content-between">
                                {/* Ngày Sinh */}
                                <div className="form-group secondFormleft">
                                    <label>Ngày sinh: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngaySinh" value={ngaySinh ? ngaySinh : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Email */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Email: </label>
                                    <input type="email" className="form-contro"
                                        /*disabled={true}*/
                                        name="email" value={email ? email : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Trạng thái */}
                                <div className="form-group secondFormleft secondFormright"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Trạng thái: </label>
                                    <select className="form-contro"
                                        value={trangThai ? trangThai : 1}
                                        name="trangThai"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        <option value={1}>Thử việc</option>
                                        <option value={2}>Nghỉ việc</option>
                                        <option value={3}>Chính thức</option>
                                    </select>
                                </div>
                                {/* Tỉnh thành */}
                                <div className="form-group secondFormright">
                                    <label>Tỉnh thành: </label>
                                    <select className="form-contro"
                                        value={tinhThanh_ID ? tinhThanh_ID : 1}
                                        name="tinhThanh_ID"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        {this.renderTinhThanh()}
                                    </select>
                                </div>
                            </div>


                            {/* Đào tạo viên */}{/* Địa chỉ */}
                            <div className="d-flex justify-content-between">
                                {/* Đào tạo viên */}
                                <div className="form-group secondFormleft  width3 "
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Là đào viên: </label>
                                    <select className="form-contro"
                                        value={laDaoTaoVien ? laDaoTaoVien : ''}
                                        name="laDaoTaoVien"
                                        onChange={this.handleChange_Number}
                                        disabled={
                                            this.props.role === 1 ? true : (this.props.role === 2 ? true : false)
                                        }
                                    >
                                        <option value={0}>Không</option>
                                        <option value={1}>Có</option>
                                    </select>
                                </div>
                                {/* Địa chỉ */}
                                <div className="form-group secondFormright"
                                    className={this.props.role === 1 ? "form-group w-100" : "form-group secondFormright"}
                                >
                                    <label >Địa chỉ: </label>
                                    <input type="text" className="form-contro"
                                        value={diaChi ? diaChi : ''}
                                        name="diaChi"
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Số tài khoản ngân hàng */}{/* Tên ngân hàng */}
                            <div className="d-flex justify-content-between">
                                {/* Số tài khoản ngân hàng */}
                                <div className="form-group secondFormleft  width3"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label>Số TK ngân hàng: </label>
                                    <input type="num" className="form-contro"
                                        /*disabled={true}*/
                                        name="soTaiKhoanNganHang"
                                        value={soTaiKhoanNganHang ? soTaiKhoanNganHang : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Tên ngân hàng */}
                                <div className="form-group secondFormright"
                                    style={
                                        this.props.role === 1 ? { display: 'none' } : (this.props.role === 2 ? { display: 'block' } : { display: 'block' })
                                    }
                                >
                                    <label >Tên ngân hàng: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="nganHangLienKet"
                                        value={nganHangLienKet ? nganHangLienKet : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            <div className="titleGroup">Chứng minh nhân dân</div>


                            {/* Số cmnd */}{/* Nơi cấp */}{/* Ngày cấp */}
                            <div className="d-flex justify-content-between">
                                {/* Số cmnd */}
                                <div className="form-group secondFormleft">
                                    <label>Số CMND: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="soCMND"
                                        value={soCMND ? soCMND : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }

                                    />
                                </div>
                                {/* Nơi cấp */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Nơi cấp: </label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        name="noiCap"
                                        value={noiCap ? noiCap : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                                {/* Ngày cấp */}
                                <div className="form-group secondFormright">
                                    <label>Ngày cấp: </label>
                                    <input type="date" className="form-contro"
                                        /*disabled={true}*/
                                        name="ngayCapCMND"
                                        value={ngayCapCMND ? ngayCapCMND : ''}
                                        onChange={this.handleChange}
                                        disabled={
                                            this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                        }
                                    />
                                </div>
                            </div>


                            {/* Nơi đăng ký thường chú */}
                            <div className="form-group">
                                <label >Nơi đăng ký thường chú: </label>
                                <input type="text" className="form-contro"
                                    name="diaChiThuongTruCMND"
                                    value={diaChiThuongTruCMND ? diaChiThuongTruCMND : ''}
                                    onChange={this.handleChange}
                                    disabled={
                                        this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                    }
                                />
                            </div>


                            {/* Nguyên quán */}
                            <div className="form-group">
                                <label >Nguyên quán: </label>
                                <input type="text" className="form-contro"
                                    name="queQuanCMND"
                                    value={queQuanCMND ? queQuanCMND : ''}
                                    onChange={this.handleChange}
                                    disabled={
                                        this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                    }
                                />
                            </div>


                            {/* Ảnh CMND mặt trước */}{/* Ảnh CMND mặt sau */}{/* Ảnh chân dung */}
                            <div className="d-flex justify-content-between">
                                {/* Ảnh CMND mặt trước */}
                                <div className="form-group secondFormleft">
                                    <label >Ảnh CMND mặt trước: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhMatTruoc"
                                            value={anhMatTruoc ? anhMatTruoc : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }

                                    </div>
                                </div>
                                {/* Ảnh CMND mặt sau */}
                                <div className="form-group secondFormright secondFormleft">
                                    <label >Ảnh CMND mặt sau: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="anhMatSau"
                                            value={anhMatSau ? anhMatSau : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }
                                    </div>
                                </div>
                                {/* Ảnh chân dung */}
                                <div className="form-group secondFormright">
                                    <label >Ảnh chân dung: </label>
                                    <div className="d-flex">
                                        <input type="text" className="form-contro"
                                            name="avatar"
                                            value={avatar ? avatar : ''}
                                            onChange={this.handleChange}
                                            disabled={
                                                this.props.role === 1 ? false : (this.props.role === 2 ? true : false)
                                            }
                                        />
                                        {this.props.role === 2 ? '' : <button type="button" className="btnChooseImage">Chọn hình</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {this.props.role === 2 ? '' :
                                <div className="text-right" style={{ padding: '1rem 0' }}>
                                    <button type="submit" className="btn btn-danger btnAccept" >Xác nhận</button>
                                </div>
                            }


                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModel>
        );
    }

    componentDidMount() {
        this._SetValue();
    }
}
export const StyledModel = styled.div`

position: fixed;
top: 0;
left: 0;
z-index: 1050;
display:block;
width: 100%;
height: 100%;
background: #00000047;
overflow: hidden;
overflow-y: scroll;
outline: 0;
transition: 0.5s all;
::-webkit-scrollbar{
    width: 0px; 
}
.modalService-dialog{
margin: 5% auto;
max-width:600px;
&.modal-lg{
    max-width: 1000px;
}
.modalService-content{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
    .modalService-header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem 1rem;
        border-top-left-radius: calc(0.3rem - 1px);
        border-top-right-radius: calc(0.3rem - 1px);
        .modals-title{
                color:#646D82;
                text-transform:uppercase;
                letter-spacing: 1px;
                font-weight: 500;
                font-size: 1.6em;
        }
        .close{
            outline: none;
        }
        
        border:none;
    }
    .btnNapTien{
        border: none;
        padding: 0.3rem 0.6rem;
        border-radius: 20px;
        margin:0;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1px;
        white-space: nowrap;
        outline:none;
        color: #2CD889 ;
        background:#fff;
        box-shadow: 1px 2px 4px -0.5px #80808080;
        
        &:hover , &:focus{
            color:#fff;
            background: #2CD889;
        }
    }
    .TongTien_Title{
        text-align: center;
        font-size: 0.8em;
        margin:1rem;
        color:#000;
        font-weight: 700;
        letter-spacing: 1px;
           .subtitle{
            align-self: center;
           }
           .price{
            padding: 0;
            color: #2CD889 ;
            margin-bottom: 1.5rem ;
            font-size: 2rem;
            .vnd{
                margin: 0 0.5rem;
                font-weight: 200;
                color: #000 ;
                letter-spacing: 3px;
                font-size: 1rem;
                vertical-align: middle;
            }
           }
    }
    .TongTien_history{
        
        padding: 0 1rem;
        border-top: 1px solid #0000003b !important;
        padding-bottom: 1rem;
        min-height: 300px;
        .history_title{
            font-weight: 500;
            letter-spacing: 2px;
            font-size: 1rem;
            margin: 1rem 0;
        }
        .history_item{
            padding:1rem;
            margin:0.3rem 0;
            border-bottom: 1px solid #0000003b;
            letter-spacing: 2px;
            .title_historyItem{
                font-size: 0.7rem;
            }
            .date_historyItem{
                font-size: 0.6rem;
                font-weight: 700;
            }
            .price_historyItem{
                font-size: 0.7rem;
                text-align:right;
            }
            .status_historyItem{
                text-align:right;
                font-weight: 500;
                color: #2CD889 ;
                font-size: 0.6rem;
            }
        }
    }
    .modalService-body{
        
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
        border:none;
        .titleGroup{
            font-size: 1.2em;
            margin:0;
            color:#000;
            font-weight: 700;
            letter-spacing: 1px;
            padding: 1rem 0;
            &.bb{
                border-bottom:1px solid #0000003b !important;
            }
        }
        .form-group{
            label{
                margin:0;
                color:#000;
                font-weight: 700;
                letter-spacing: 1px;
                font-size: 0.8em;
            }
            .radGen{
                margin:0 10px;
            }
            .btnChooseImage{
                font-size: 0.8em;
                margin:0;
                font-weight: 700;
                letter-spacing: 1px;
                white-space: nowrap;
                padding: 0 0.5rem;
                border-radius: 10px;
                border: none;
                outline:none;
                color: #2CD889 ;
                background:#fff;
                box-shadow: 1px 2px 4px -0.5px #80808080;
                &:hover , &:focus{
                    color:#fff;
                    background: #2CD889;
                }
            }
            .form-contro{
                display: block;
                text-align:center;
                width: 100%;
                height: calc(1.5em + 0.75rem + 2px);
                padding: 0 0.75rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                border-radius: 0.25rem;
                border:none;
                border-bottom:1px solid #CBD1D9;
                outline: none;
                &.mul_text{
                    border: 1px solid #CBD1D9;
                    text-align:left;
                }
                
            }
            
            &.ac{
                label{
                    color: #49505794;
                }
                .form-contro{
                color: #49505794;
                }
            }
            
            &.secondFormleft, &.secondFormright{
                width: 100%;
            }
            &.secondFormleft{
                margin-right:1em;
            }
            &.secondFormright{
                margin-left:1em;
            }
            &.width3{
                width:30.6%;
            }
        }  
    }
    
    .btnAccept{
        border-radius:10px;
        color: #fff ;
        background-color:#2CD889;
        border:none;
        font-size: 0.8em;
        font-weight: 700;
        letter-spacing: 1px;
        white-space: nowrap;
        transition: 0.2s all;
        &:hover , &:focus{
            color: #2CD889 ;
        background:#fff;
        box-shadow: 1px 2px 4px -0.5px #80808080;
        }
    }
    .modalService-footer{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        padding: 0.75rem;
        border-top: 1px solid #dee2e6;
        border-bottom-right-radius: calc(0.3rem - 1px);
        border-bottom-left-radius: calc(0.3rem - 1px);
        border:none;
        
    }
}
}


`;

const mapStateToProps = state => {
    return {
        item: state.qlDieuDuong.modalDieuDuong.value,
        role: state.qlDieuDuong.modalDieuDuong.role,
    }
}

export default connect(mapStateToProps)(ModalDieuDuong);