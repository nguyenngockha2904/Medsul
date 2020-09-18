import React, { Component, Fragment } from 'react';
import { StyledModel } from '../../../Styles';
import { StyleTable } from '../../../Styles';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_GIAYPHEPHANHNGHE } from '../../../Redux/actions/type';
import { TinhThanh } from '../../../Services';
import { layListGPHNByIdDieuDuong } from '../../../Redux/actions/DieuDuongAction';
class ModalBC extends Component {
    state = {
        modalCT: {
            isShow: false,
            value: {},
            role: 1, //1 thêm //2 xem // 3 sửa
        },
        DTV: {
            maDTV: this.props.ListDTV[0].maDieuDuong,
            nameDTV: this.props.ListDTV[0].hoTen,
        },
        LDV: {
            maLDV: this.props.ListLVD[0].loaiDichVu_Id,
            nameLDV: this.props.ListLVD[0].tenLoaiDichVu,
        },
        DD: {
            idDD: this.props.DD.dieuDuong_Id,
            maDD: this.props.DD.maDieuDuong,
            nameDD: this.props.DD.hoTen,
        },
        listDV: []

    }
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_GIAYPHEPHANHNGHE, false));
    }
    showDetail = (role, value) => () => {
        this.setState({
            modalCT: { ...this.state.modalCT, isShow: true, value: value, role: role }
        })
    }
    renderMaDTV = () => {
        return this.props.ListDTV.map((item, index) => {
            return (
                <option value={item.dieuDuong_Id} key={index}>{item.maDieuDuong}</option>
            )
        })
    }
    renderLDV = () => {
        return this.props.ListLVD.map((item, index) => {
            return (
                <option value={item.loaiDichVu_Id} key={index}>{item.tenLoaiDichVu}</option>
            )
        })
    }
    renderDVbyLDV = () => {
        return this.state.listDV.map((item, index) => {
            return (
                <option value={item.dichVu_Id} key={index}>{item.tenDichVu}</option>
            )
        })
    }



    handleChangeMDTV = (e) => {
        this.setState({
            DTV: { ...this.state.DTV, [e.target.name]: parseInt(e.target.value) }
        }, () => {
            let index = this.props.ListDTV.findIndex(dtv => dtv.dieuDuong_Id === this.state.DTV.maDTV);
            if (index !== -1) {
                this.setState({
                    DTV: { ...this.state.DTV, nameDTV: this.props.ListDTV[index].hoTen }
                })
            }

        })
    }
    handleChangeLDV = e => {
        this.setState({
            LDV: { ...this.state.LDV, [e.target.name]: parseInt(e.target.value) }
        }, () => {
            let listDvByIdLdv = this.props.ListDV.filter(dv => dv.loaiDichVuID === this.state.LDV.maLDV);
            this.setState({
                listDV: listDvByIdLdv
            })
        })
    }
    renderGPHN = () => {
        return this.props.listGPHN.map((item, index) => {
            return (
                <tr className="tRow" key={index}>
                    {/**No. */}
                    <th>{+index + 1}</th>
                    {/**Mã đào tạo viên. */}
                    {<td>{this.props.ListDTV.filter(dtv => dtv.dieuDuong_Id === item.giayPhep_DaoTaoVien_Id)[0].maDieuDuong}</td>}
                    {/**Chuyên ngành */}
                    <td>{item.giayPhep_ThongTin}</td>
                    {/**Trạng thái */}
                    <td className={item.giayPhep_TrangThai === 0 ? 'tdStatus isThuViec' : (item.giayPhep_TrangThai === 1) ? 'tdStatus isChinhThuc' : 'tdStatus isNghiViec'}

                    >{item.giayPhep_TrangThai === 0 ? 'Đang đào tạo' : (item.giayPhep_TrangThai === 1) ? 'Đang sử dụng' : 'Ngưng sử dụng'}</td>
                    {/**Tùy chỉnh */}
                    <td className="d-flex justify-content-center groupBtn">
                        <button className="btnCustom">
                            <img src={btnEdit} alt="btnEdit" />
                        </button>
                    </td>
                </tr>
            )
        })
    }
    handleSubmit = e => {
        e.preventDefault();

    }


    render() {
        return (
            <StyledModel>
                <div className="modalService-dialog modal-lg ">
                    <div className="modalService-content">
                        {/* Modal Header */}
                        <div className="modalService-header">
                            <h4 className="modal-title">Giấy phép hành nghề</h4>
                            <button type="button" className="close" onClick={this.HandleHireModal}>×</button>
                        </div>

                        {/* table */}
                        <div className="modalService-body">

                            <div className="titleGroup">Danh sách giấy phép hành nghề :</div>

                            <div className="d-flex justify-content-between">
                                <div className="form-group secondFormleft width3">
                                    <label >Mã Điều Dưỡng: </label>
                                    <p className="form-contro">{this.state.DD.maDD}</p>

                                </div>
                                <div className="form-group secondFormright ac">
                                    <label >Tên Điều Dưỡng: </label>
                                    <p className="form-contro">{this.state.DD.nameDD}</p>
                                </div>
                            </div>
                            <div className="text-right mb-3">
                                <button type="button" className="btn btnAccept" onClick={this.showDetail(1, {})}>Thêm mới</button>
                            </div>
                            <StyleTable>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                No.
                                        </th>
                                            <th scope="col">
                                                Mã Đào Tạo Viên
                                        </th>
                                            <th scope="col">
                                                Tên Giấy Phép
                                        </th>
                                            <th scope="col">
                                                Trạng Thái
                                        </th>
                                            <th scope="col">
                                                Tùy Chỉnh
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGPHN()}
                                    </tbody>
                                </table>
                            </StyleTable>

                        </div>
                        {/* Detail */}
                        {this.state.modalCT.isShow
                            ? <Fragment>
                                <form className="modalService-body" onSubmit={this.handleSubmit}>
                                    <div className="modalService-body">
                                        <div className="titleGroup bb"></div>
                                    </div>
                                    <div className="titleGroup">{this.state.modalCT.role === 1 ? 'Thêm giấy phép hành nghề mới ' : 'Thông tin chi tiết giấy phép hành nghề :'}</div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft width3">
                                            <label >Chọn đào tạo viên: </label>
                                            <select className="form-contro"
                                                onChange={this.handleChangeMDTV}
                                                name='maDTV'
                                                value={this.state.DTV.maDTV}
                                            >
                                                {this.renderMaDTV()}

                                            </select>

                                        </div>
                                        <div className="form-group secondFormright ac">
                                            <label >Tên Đào tạo viên: </label>
                                            <input type="text" className="form-contro"
                                                name="tenDaoTao"
                                                value={this.state.DTV.nameDTV}
                                                disabled={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft">
                                            <label >Loại Dịch Vụ: </label>
                                            <select className="form-contro"
                                                name='maLDV'
                                                onChange={this.handleChangeLDV}
                                                value={this.state.LDV.maLDV}
                                            >
                                                {this.renderLDV()}
                                            </select>
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Dịch Vụ: </label>
                                            <select className="form-contro">
                                                {this.renderDVbyLDV()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Thông tin chuyên ngành</label>
                                        <textarea cols="30" rows="100" height="70px" className="form-contro mul_text"
                                            style={{ height: '100px' }}
                                            name="yeuCauCongViec"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft ac">
                                            <label >Xếp loại: </label>
                                            <select className="form-contro">
                                                <option>Chưa xếp loại</option>
                                                <option>Giỏi</option>
                                                <option>Khá</option>
                                                <option>Trung bình</option>
                                            </select>
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Trạng thái: </label>
                                            <select className="form-contro">
                                                <option>Đang đào tạo</option>
                                                <option>Đang sử dụng</option>
                                                <option>Ngưng sử dụng</option>
                                            </select>
                                        </div>
                                    </div>




                                    <div className="text-right">
                                        <button type="submit" className="btn btnAccept">Xác nhận</button>
                                    </div>
                                </form>

                            </Fragment>
                            : <Fragment>

                            </Fragment>
                        }
                    </div>
                </div>


            </StyledModel>
        );
    }

    componentDidMount() {
        let listDvByIdLdv = this.props.ListDV.filter(dv => dv.loaiDichVuID === this.state.LDV.maLDV);
        this.setState({
            listDV: listDvByIdLdv
        });
        this.props.dispatch(layListGPHNByIdDieuDuong(this.state.DD.idDD));
    }
}
const mapStateToProps = state => ({
    ListDTV: state.qlDieuDuong.listDieuDuong.filter(dt => dt.laDaoTaoVien === 1),
    ListLVD: state.qlDichVu.mangLoaiDichVu,
    ListDV: state.qlDichVu.mangDichVu,
    DD: state.qlDieuDuong.modalGiayPhepHanhNghe.value,
    listGPHN: state.qlDieuDuong.modalGiayPhepHanhNghe.listGiayPhepHanhNgheByDieuDuongId

})
export default connect(mapStateToProps)(ModalBC);