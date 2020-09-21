import React, { Component } from 'react';
import ModalManager from '../../Components/ManagerPage/ModalManager';
import ManagerTable from '../../Components/ManagerPage/tbManager';
import ModalPassword from '../../Components/ModalPassword';
import { StylePageComponent, StyleGroupButtonSearch } from '../../Styles';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { SHOW_MODAL_MANAGER } from '../../Redux/actions/type';
import { LayDanhSachManager } from '../../Redux/actions/managerAction';
class Manager extends Component {
    state = {
        statusSelect: 0,
        valueSearch: '',
        isShowModal: false,
        isShowModalPass: false,
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleChangeSelectNum = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        });
    }
    handleClickSelect = () => {
        this.setState({
            valueSearch: ''
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
    }
    handleShowModalManager = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_MANAGER, { value: value, role: 1 }));
        let item = {
            admin_ID: -1,
            admin_PASSWORD: '',
            admin_CMNDMATSAU: '',
            admin_CMNDNOICAP: '',
            admin_CMNDMATTRUOC: '',
            admin_CMNDNGAYCAP: '',
            admin_TINHTRANG: 0,
            admin_HOTEN: '',
            admin_AVATAR: '',
            admin_CHUCVU: 0,
            admin_EMAIL: '',
            admin_NGAYSINH: null,
            admin_GIOITINH: '',
            admin_SDT: '',
            admin_DIACHI: '',
            admin_USERNAME: '',
            admin_CMND: ''
        }
    }
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Danh sách quản trị viên</p>
                <div className="contentTabGroup">
                    <div className="contentTab">
                        <StyleGroupButtonSearch >
                            <select className={this.state.statusSelect === 1 ? "selectStatus isThuViec" : (
                                this.state.statusSelect === 2 ? "selectStatus isNghiViec" : (this.state.statusSelect === 3 ? "selectStatus isChinhThuc" : "selectStatus"))}
                                value={this.state.statusSelect}
                                name="statusSelect"
                                onChange={this.handleChangeSelectNum}
                                onClick={this.handleClickSelect}
                            >
                                <option value={0}>Tất cả</option>
                                <option value={1}>Thử việc</option>
                                <option value={2}>Nghỉ việc</option>
                                <option value={3}>Chính thức</option>
                            </select>


                            <form className="d-flex justify-content-center groupSearch" onSubmit={this.handleSearch}>
                                <input type="text" className="form-contro" placeholder="Mã...."
                                    name="valueSearch" value={this.state.valueSearch !== -1 ? this.state.valueSearch : ''}
                                    onChange={this.handleChange}
                                />
                                <div className="input-group-append">
                                    <button className="btnSearch" type="submit">Tìm kiếm</button>
                                </div>
                            </form>
                            <button className="btnAdd" onClick={this.handleShowModalManager({
                                admin_ID: -1,
                                admin_PASSWORD: '',
                                admin_CMNDMATSAU: '',
                                admin_CMNDNOICAP: '',
                                admin_CMNDMATTRUOC: '',
                                admin_CMNDNGAYCAP: '',
                                admin_TINHTRANG: 0,
                                admin_HOTEN: '',
                                admin_AVATAR: '',
                                admin_CHUCVU: 0,
                                admin_EMAIL: '',
                                admin_NGAYSINH: null,
                                admin_GIOITINH: '',
                                admin_SDT: '',
                                admin_DIACHI: '',
                                admin_USERNAME: '',
                                admin_CMND: ''
                            })}>Thêm</button>
                        </StyleGroupButtonSearch>
                        <ManagerTable />
                    </div>
                </div>
                {this.props.isShowModalManager && <ModalManager />}
                {this.props.isShowModalPass && <ModalPassword />}
            </StylePageComponent>

        );
    }

    componentDidMount() {
        this.props.dispatch(LayDanhSachManager());
    }
}
const mapStateToProps = state => ({
    isShowModalPass: state.credentials.modalRePassword.isShow,
    isShowModalManager: state.qlManager.modalManager.isShow,

})

export default connect(mapStateToProps)(Manager);