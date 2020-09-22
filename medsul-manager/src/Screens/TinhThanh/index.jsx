import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createAction } from '../../Redux/actions';
import { LayDanhSachTinhThanh } from '../../Redux/actions/TinhThanhAction';
import ModalTinhThanh from '../../Components/TinhThanhPageComponents/ModalTT';
import TinhThanhTable from '../../Components/TinhThanhPageComponents/tbTinhThanhComponent';
import { SHOW_MODAL_TINHTHANH } from '../../Redux/actions/type';

import { StyleGroupButtonSearch, StylePageComponent } from '../../Styles';

class TinhThanhComponent extends Component {
    handleShowModalTinhThanh = () => {
        let payload = {
            value: {
                tinhThanh_Id: '',
                maTinhThanh: '',
                tenTinhThanh: '',
                heSoTinhThanhDieuDuong: '',
                heSoTinhThanhUser: '',
            },
            role: 1
        }
        this.props.dispatch(createAction(SHOW_MODAL_TINHTHANH, payload));
    }
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Quản Lý Tỉnh Thành</p>
                <div className="contentTabGroup">
                    <p className="m-0 p-0 text-center title_tab">Tỉnh Thành</p>
                    <StyleGroupButtonSearch>
                        <form className="d-flex justify-content-center groupSearch">
                            <input type="text" className="form-contro" placeholder="Mã...."
                                name="valueSearch" />
                            <div className="input-group-append">
                                <button className="btnSearch" type="submit">Tìm kiếm</button>
                            </div>
                        </form>
                        <button className="btnAdd" onClick={this.handleShowModalTinhThanh}>Thêm</button>
                    </StyleGroupButtonSearch>
                    <TinhThanhTable />
                </div>
                {this.props.isShowModalTinhThanh && <ModalTinhThanh />}
            </StylePageComponent>
        );
    }
    componentDidMount() {
        this.props.dispatch(LayDanhSachTinhThanh());
    }
}
const mapStateToProps = state => {
    return {
        isShowModalTinhThanh: state.qlTinhThanh.modalTinhThanh.isShow,
    }
}


export default connect(mapStateToProps)(TinhThanhComponent);