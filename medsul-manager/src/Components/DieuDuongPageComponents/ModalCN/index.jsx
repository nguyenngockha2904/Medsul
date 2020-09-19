import React, { Fragment, PureComponent } from 'react';
import { StyledModel } from '../../../Styles';
import { StyleTable } from '../../../Styles';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_GIAYPHEPHANHNGHE } from '../../../Redux/actions/type';
import { capNhatGPHN, layListGPHNByIdDieuDuong, themGPHN } from '../../../Redux/actions/DieuDuongAction';
import swal from 'sweetalert';
class ModalBC extends PureComponent {
    state = {
        modalCT: {
            isShow: false,
            value: {},
            role: 1, //1 thêm //2 xem // 3 sửa
        },
        DTV: {
            maDTV: this.props.ListDTV[0].dieuDuong_Id,
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
        listDV: [],
        DV: {
            idDV: '',
        },
        GPHN: {
            giayPhep_ThongTin: '',
            giayPhep_TrangThai: 0, //0 đang đào tạo //1 đang sử dụng //2 ngưng sử dụng
            giayPhep_XepLoai: "chưa cấp",
        },
        listGPHN: [],
        giayPhep_Id: -1,

    }
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_GIAYPHEPHANHNGHE, false));
    }
    showDetail = (role, value) => () => {
        let index = this.props.ListDV.findIndex(dv => dv.dichVu_Id === value.giayPhep_DichVu_Id);

        this.setState({
            modalCT: { ...this.state.modalCT, isShow: true, value: value, role: role }
        }, () => {
            this.setState({
                GPHN: { ...this.state.GPHN, giayPhep_ThongTin: value.giayPhep_ThongTin, giayPhep_XepLoai: value.giayPhep_XepLoai, giayPhep_TrangThai: value.giayPhep_TrangThai },
                giayPhep_Id: value.giayPhep_Id,
                DTV: {
                    ...this.state.DTV, maDTV: value.giayPhep_DaoTaoVien_Id,
                    nameDTV: this.props.ListDTV.filter(dtv => dtv.dieuDuong_Id === value.giayPhep_DaoTaoVien_Id)[0].hoTen
                },
                LDV: { ...this.state.LDV, maLDV: this.props.ListDV[index].loaiDichVuID },
                DV: { ...this.state.DV, idDV: this.props.ListDV[index].dichVu_Id },
                listDV: this.props.ListDV.filter(dv => dv.loaiDichVuID === this.props.ListDV[index].loaiDichVuID)
            })
        })
    }
    renderMaDTV = () => {
        return this.props.ListDTV.filter(dtv => dtv.dieuDuong_Id !== this.state.DD.idDD).map((item, index) => {
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
                listDV: listDvByIdLdv,

            }, () => {
                this.setState({ DV: { ...this.state.DV, idDV: this.state.listDV.length !== 0 ? this.state.listDV[0].dichVu_Id : '' } })
            })
        })
    }
    handleChangeDV = e => {
        this.setState({
            DV: { ...this.state.DV, [e.target.name]: parseInt(e.target.value) }
        });
    }
    renderGPHN = () => {
        return this.props.listGPHN.filter(gphn => gphn.giayPhep_DieuDuong_Id === this.state.DD.idDD).map((item, index) => {
            return (
                <tr className="tRow" key={index}>
                    {/**No. */}
                    <th onClick={this.showDetail(2, item)} >{+index + 1}</th>
                    {/**Mã đào tạo viên. */}
                    {<td onClick={this.showDetail(2, item)} >{this.props.ListDTV.filter(dtv => dtv.dieuDuong_Id === item.giayPhep_DaoTaoVien_Id)[0].maDieuDuong}</td>}
                    {/**Chuyên ngành */}
                    <td onClick={this.showDetail(2, item)} >{this.props.ListDV.filter(dv => dv.dichVu_Id === item.giayPhep_DichVu_Id)[0].tenDichVu}</td>
                    {/**Trạng thái */}
                    <td onClick={this.showDetail(2, item)} className={item.giayPhep_TrangThai === 0 ? 'tdStatus isThuViec' : (item.giayPhep_TrangThai === 1) ? 'tdStatus isChinhThuc' : 'tdStatus isNghiViec'}

                    >{item.giayPhep_TrangThai === 0 ? 'Đang đào tạo' : (item.giayPhep_TrangThai === 1) ? 'Đang sử dụng' : 'Ngưng sử dụng'}</td>
                    {/**Tùy chỉnh */}
                    <td className="d-flex justify-content-center groupBtn">
                        <button className="btnCustom" onClick={this.showDetail(3, item)}>
                            <img src={btnEdit} alt="btnEdit" />
                        </button>
                    </td>
                </tr>
            )
        })
    }
    handleChange = e => {
        this.setState({
            GPHN: { ...this.state.GPHN, [e.target.name]: e.target.value }
        }, () => {
            if (this.state.modalCT.role === 3) {
                this.setState({
                    GPHN: { ...this.state.GPHN, giayPhep_TrangThai: 1 }
                })
            }
        })
    }
    handleChangeNum = e => {
        this.setState({
            GPHN: { ...this.state.GPHN, [e.target.name]: parseInt(e.target.value) }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        let addNew = {
            ...this.state.GPHN,
            giayPhep_DaoTaoVien_Id: this.state.DTV.maDTV,
            giayPhep_DichVu_Id: this.state.DV.idDV,
            giayPhep_DieuDuong_Id: this.state.DD.idDD,
        }
        if (this.state.modalCT.role === 1) {//thêm
            this.props.dispatch(themGPHN(addNew));
            // console.log(addNew);
            this.setState({
                modalCT: { ...this.state.modalCT, isShow: false },
            });

        } else if (this.state.modalCT.role === 3) {
            // console.log(addNew);
            swal({
                title: "Bạn Chắc Chứ?",
                text: "Nếu đồng ý dữ liệu này sẽ thay đổi!",
                icon: "info",
                buttons: true,
                dangerMode: true,
            }).then((willDelete) => {
                if (willDelete) {
                    swal("Dữ liệu đã được cập nhật!", {
                        icon: "success",
                    });
                    this.props.dispatch(capNhatGPHN(this.state.giayPhep_Id, addNew));

                    this.setState({
                        modalCT: { ...this.state.modalCT, isShow: false },

                    });
                } else {
                    swal("Dữ liệu được giữ nguyên!");
                    this.setState({
                        modalCT: { ...this.state.modalCT, isShow: false },
                    });
                }
            });
        }
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
                                <button type="button" className="btn btnAccept" onClick={this.showDetail(1, {
                                    giayPhep_DaoTaoVien_Id: this.state.DTV.maDTV,
                                    giayPhep_DichVu_Id: this.state.DV.idDV,
                                    giayPhep_DieuDuong_Id: this.state.DD.idDD,
                                    giayPhep_GhiChu: null,
                                    giayPhep_Id: -1, giayPhep_ThongTin: '', giayPhep_TrangThai: this.state.GPHN.giayPhep_TrangThai, giayPhep_XepLoai: this.state.GPHN.giayPhep_XepLoai,

                                })}>Thêm mới</button>
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
                                    <div className="titleGroup">{this.state.modalCT.role === 1 ? 'Thêm giấy phép hành nghề mới: ' : (this.state.modalCT.role === 2 ? 'Thông tin chi tiết giấy phép hành nghề :' : 'Cập nhật giấy phép hành nghề: ')}</div>
                                    <div className="d-flex justify-content-between">
                                        <div className={this.state.modalCT.role === 2 ? 'form-group secondFormleft width3 ac' : 'form-group secondFormleft width3'}
                                        >
                                            <label >{this.state.modalCT.role === 1 ? 'Chọn đào tạo viên: ' : 'Mã đào tạo viên: '}</label>
                                            <select className="form-contro"
                                                onChange={this.handleChangeMDTV}
                                                name='maDTV'
                                                value={this.state.DTV.maDTV}
                                                disabled={this.state.modalCT.role === 3 ? true : (this.state.modalCT.role === 2 ? true : false)}
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
                                                disabled={this.state.modalCT.role === 3 ? true : (this.state.modalCT.role === 2 ? true : false)}
                                            >
                                                {this.renderLDV()}
                                            </select>
                                        </div>
                                        <div className="form-group secondFormright">
                                            <label >Dịch Vụ: </label>
                                            <select className="form-contro"
                                                name="idDV"
                                                onChange={this.handleChangeDV}
                                                value={this.state.DV.idDV}
                                                disabled={this.state.modalCT.role === 3 ? true : (this.state.modalCT.role === 2 ? true : false)}
                                            >
                                                {this.renderDVbyLDV()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Thông tin giấy phép</label>
                                        <textarea cols="30" rows="100" height="70px" className="form-contro mul_text"
                                            style={{ height: '100px' }}
                                            name="giayPhep_ThongTin"
                                            value={this.state.GPHN.giayPhep_ThongTin}
                                            disabled={this.state.modalCT.role === 2 ? true : false}
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="d-flex justify-content-between" >
                                        <div className="form-group secondFormleft" style={{ display: this.state.modalCT.role === 1 ? 'none' : 'block' }}>
                                            <label >Xếp loại: </label>
                                            <select className="form-contro"
                                                name="giayPhep_XepLoai"
                                                value={this.state.GPHN.giayPhep_XepLoai}
                                                onChange={this.handleChange}
                                                disabled={this.state.modalCT.role === 2 ? true : (this.state.GPHN.giayPhep_XepLoai !== "chưa cấp" ? true : false)}
                                            >
                                                <option value="chưa cấp">Chưa cấp</option>
                                                <option value="Giỏi">Giỏi</option>
                                                <option value="Khá">Khá</option>
                                                <option value="TB">Trung bình</option>
                                            </select>
                                        </div>
                                        <div className="form-group secondFormright" style={{ display: this.state.modalCT.role === 1 ? 'none' : (this.state.modalCT.role === 3 ? (this.state.GPHN.giayPhep_XepLoai === 'chưa cấp' ? 'none' : 'block') : 'block') }}>
                                            <label >Trạng thái: </label>
                                            <select className="form-contro"
                                                name="giayPhep_TrangThai"
                                                value={this.state.GPHN.giayPhep_TrangThai}
                                                onChange={this.handleChangeNum}
                                                disabled={this.state.modalCT.role === 2 ? true : false}
                                            >
                                                {this.state.modalCT.role === 3 ?
                                                    <Fragment>
                                                        <option value={1}>Đang sử dụng</option>
                                                        <option value={2}>Ngưng sử dụng</option>
                                                    </Fragment> :
                                                    <Fragment>
                                                        <option value={0}>Đang đào tạo</option>
                                                        <option value={1}>Đang sử dụng</option>
                                                        <option value={2}>Ngưng sử dụng</option>
                                                    </Fragment>}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="text-right" style={{ display: this.state.modalCT.role === 2 ? 'none' : 'block' }}>
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
        let listGPHNF = this.props.listGPHN.filter(gphn => gphn.giayPhep_DieuDuong_Id === this.state.DD.idDD);
        this.setState({
            listDV: listDvByIdLdv,
            listGPHN: listGPHNF

        }, () => {
            this.setState({ DV: { ...this.state.DV, idDV: this.state.listDV.length !== 0 ? this.state.listDV[0].dichVu_Id : '' } })
        });

    }
}
const mapStateToProps = state => ({
    ListDTV: state.qlDieuDuong.listDieuDuong.filter(dt => dt.laDaoTaoVien === 1),
    ListLVD: state.qlDichVu.mangLoaiDichVu,
    ListDV: state.qlDichVu.mangDichVu,
    DD: state.qlDieuDuong.modalGiayPhepHanhNghe.value,
    listGPHN: state.qlDieuDuong.listAllGPHN

})
export default connect(mapStateToProps)(ModalBC);