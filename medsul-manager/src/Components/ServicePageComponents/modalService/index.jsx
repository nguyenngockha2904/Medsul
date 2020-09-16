import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { HIRE_MODAL_DICHVU } from '../../../Redux/actions/type';
import { ThemDichVuMoi, CapNhatDichVu } from '../../../Redux/actions/DichVuAction';
import swal from 'sweetalert';
class ModalService extends Component {
    handleHireModal = () => {
        this.props.dispatch({
            type: HIRE_MODAL_DICHVU
        });
    }
    state = {
        idLDV: '',
        maLDV: '',
        dichVu: {
            khongBaoGom: '',
            loaiDichVuID: 0,
            maDichVu: '',
            moTaDichVu: '',
            tenDichVu: '',
            thoiGianUocTinh: 0,
            yeuCauCongViec: ''
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value);

        this.setState({
            dichVu: { ...this.state.dichVu, [e.target.name]: e.target.value }
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let dvTemp = {
            khongBaoGom: this.state.dichVu.khongBaoGom,
            loaiDichVuID: this.state.idLDV,
            maDichVu: this.state.dichVu.maDichVu,
            moTaDichVu: this.state.dichVu.moTaDichVu,
            tenDichVu: this.state.dichVu.tenDichVu,
            thoiGianUocTinh: +this.state.dichVu.thoiGianUocTinh * 1,
            yeuCauCongViec: this.state.dichVu.yeuCauCongViec
        };
        this.props.itemService.dichVu_Id === 0
            ?
            this.props.dispatch(ThemDichVuMoi(dvTemp))
            : swal({
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
                        let idDV = this.state.dichVu.dichVu_Id;
                        this.props.dispatch(CapNhatDichVu(idDV, dvTemp));
                        // console.log('id: ' + idDV);
                        // console.log(dvTemp);
                    } else {
                        swal({
                            title: "Giữ nguyên !",
                            text: "Dữ liệu được giữ nguyên",
                            icon: "info",
                        });
                    }
                });
        this.handleHireModal();
    }
    _setValue = () => {
        this.setState({
            idLDV: this.props.dropDown_MaLDV,
            maLDV: this.props.maLDV,
            dichVu: this.props.itemService
        });
    }
    render() {
        const { khongBaoGom, maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec } = this.state.dichVu;
        return (
            <StyledModal className='modalService'>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">{!this.props.itemService.dichVu_Id ? 'Thêm dịch vụ mới' : 'Cập nhật dịch vụ'}</h4>
                            <button type="button" className="close" onClick={this.handleHireModal}>×</button>
                        </div>
                        {/* Modal body */}
                        <form className="modalService-body" onSubmit={this.handleSubmit}>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label htmlFor="madv">Mã dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        value={maDichVu}
                                        name="maDichVu"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group secondFormright ac">
                                    <label htmlFor="madv">Mã loại dịch vụ</label>
                                    <input type="text" className="form-contro"
                                        /*disabled={true}*/
                                        value={this.state.maLDV}
                                        name="loaiDichVuID"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Tên dịch vụ</label>
                                <input type="text" className="form-contro"
                                    value={tenDichVu}
                                    name="tenDichVu"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mô tả dịch vụ</label>
                                <textarea name="" cols="30" rows="100" className="form-contro mul_text"
                                    style={{ height: '100px' }}
                                    value={moTaDichVu}
                                    name="moTaDichVu"
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Yêu cầu dịch vụ</label>
                                <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                    style={{ height: '50px' }}
                                    value={yeuCauCongViec}
                                    name="yeuCauCongViec"
                                    onChange={this.handleChange}
                                >
                                </textarea>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft">
                                    <label htmlFor="">Thời gian ước tính(Giờ)</label>
                                    <input type="text" className="form-contro"
                                        name="thoiGianUocTinh"
                                        value={(+thoiGianUocTinh)}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group secondFormright">
                                    <label htmlFor="">Công việc không bao gồm</label>
                                    <textarea name="" cols="30" rows="100" height="70px" className="form-contro mul_text"
                                        name="khongBaoGom"
                                        value={khongBaoGom}
                                        onChange={this.handleChange}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="btn btn-danger btnAccept" data-dismiss="modal">Xác nhận</button>
                            </div>
                        </form>
                        {/* Modal footer */}

                    </div>
                </div>
            </StyledModal>
        );
    }
    componentDidMount() {
        this._setValue();
    }
}

export const StyledModal = styled.div`
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
            .modalService-title{
                    color:#646D82;
                    text-transform:uppercase;
                    letter-spacing: 1px;
                    font-weight: 500;
                    font-size: 1.6em;
            }
            border:none;
        }
        .modalService-body{
            position: relative;
    flex: 1 1 auto;
    padding: 1rem;
            border:none;
            .form-group{
                label{
                    color:#646D82;
                }
                .form-contro{
                    display: block;
                    text-align:center;
                    width: 100%;
                    height: calc(1.5em + 0.75rem + 2px);
                    padding: 0.375rem 0.75rem;
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
                        font-size: 0.8em;
                        margin: 0;
                        color: #49505794;
                    }
                    .form-contro{
                    padding: 0 0.75rem;
                    font-size: 1em;
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
            }  
        }
        .btnAccept{
            border-radius:20px;
            background-color:#2CD889;
            border:none;
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
const mapstatetoProps = state => {
    return {
        itemService: state.qlDichVu.modalDV.value,
        maLDV: state.qlDichVu.modalDV.maLDV,
        dropDown_MaLDV: state.qlDichVu.dropDown_MaLDV
    }
}

export default connect(mapstatetoProps)(ModalService);
