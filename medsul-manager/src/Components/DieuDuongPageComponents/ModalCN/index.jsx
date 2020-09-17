import React, { Component, Fragment } from 'react';
import { StyledModel } from '../../../Styles';
import { StyleTable } from '../../../Styles';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { HIRE_MODAL_GIAYPHEPHANHNGHE } from '../../../Redux/actions/type';
import { TinhThanh } from '../../../Services';
class ModalBC extends Component {
    state = {
        isDetail: false,
        DTV: {
            maDTV: this.props.ListLVD[0].maDieuDuong,
            nameDTV: this.props.ListDTV[0].hoTen,
        },
        LDV: {
            maLDV: this.props.ListLVD[0].loaiDichVu_Id,
            nameLDV: this.props.ListLVD[0].tenLoaiDichVu,
        },
        listDV: []

    }
    HandleHireModal = () => {
        this.props.dispatch(createAction(HIRE_MODAL_GIAYPHEPHANHNGHE, false));
    }
    showDetail = (value) => () => {
        this.setState({
            isDetail: value
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
                            <div className="text-right mb-3">
                                <button type="submit" className="btn btnAccept" onClick={this.showDetail(true)}>Thêm mới</button>
                            </div>
                            <StyleTable>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                No.
                                        </th>
                                            <th scope="col">
                                                Mã đào tạo viên
                                        </th>
                                            <th scope="col">
                                                Chuyên ngành
                                        </th>
                                            <th scope="col">
                                                Trạng thái
                                        </th>
                                            <th scope="col">
                                                Tùy chỉnh
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="tRow">
                                            {/**No. */}
                                            <th>1</th>
                                            {/**Mã đào tạo viên. */}
                                            <td>MD001</td>
                                            {/**Chuyên ngành */}
                                            <td>Điều dưỡng viên</td>
                                            {/**Trạng thái */}
                                            <td className="tdStatus">Đang sử dụng</td>
                                            {/**Tùy chỉnh */}
                                            <td className="d-flex justify-content-center groupBtn">
                                                <button className="btnCustom">
                                                    <img src={btnEdit} alt="btnEdit" />
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </StyleTable>

                        </div>
                        {/* Detail */}
                        {this.state.isDetail
                            ? <Fragment>
                                <form className="modalService-body">
                                    <div className="modalService-body">
                                        <div className="titleGroup bb"></div>
                                    </div>
                                    <div className="titleGroup">Thông tin chi tiết giấy phép hành nghề :</div>
                                    <div className="d-flex justify-content-between">
                                        <div className="form-group secondFormleft width3">
                                            <label >Mã đào tạo viên: </label>
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
                                        <button type="submit" className="btn btnAccept" onClick={this.showDetail(false)}>Xác nhận</button>
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
        })
    }
}
const mapStateToProps = state => ({
    ListDTV: state.qlDieuDuong.listDieuDuong.filter(dt => dt.laDaoTaoVien === 1),
    ListLVD: state.qlDichVu.mangLoaiDichVu,
    ListDV: state.qlDichVu.mangDichVu

})
export default connect(mapStateToProps)(ModalBC);