import React, { Component } from 'react';
import ServiceItem from '../Services_item';
import { connect } from 'react-redux';
import { SHOW_MODAL_DICHVU } from '../../../Redux/actions/type';
import { StyleTable, StyleGroupButtonSearch } from '../../../Styles';
class Services extends Component {
    showModalService = () => {
        this.props.dispatch({
            type: SHOW_MODAL_DICHVU,
            payload: {
                value: {
                    dichVu_Id: 0,
                    khongBaoGom: '',
                    loaiDichVuID: 0,
                    maDichVu: '',
                    moTaDichVu: '',
                    tenDichVu: '',
                    thoiGianUocTinh: 0,
                    yeuCauCongViec: '',
                    giaDichVu: 0,
                },
                role: 1
            }
        })
    }
    renderDichVu = () => {
        return this.props.dropDown_MaLDV ? this.props.ListDichVu.filter(item => item.loaiDichVuID === this.props.dropDown_MaLDV).map((item, index) => {
            return (
                <ServiceItem index={(+index + 1)} item={item} key={index} />
            )
        }) : this.props.ListDichVu.map((item, index) => {
            return (
                <ServiceItem index={(+index + 1)} item={item} key={index} />
            )
        })
    }
    render() {
        return (
            <div className="tableTab">
                <StyleGroupButtonSearch>
                    <p className="titleGroup">Dịch Vụ</p>
                    <button className="btnAdd" onClick={this.showModalService}>Thêm</button>
                </StyleGroupButtonSearch>
                <StyleTable>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Mã Dịch Vụ</th>
                                <th scope="col">Tên Dịch Vụ</th>
                                <th scope="col">Thời Gian Ước Tính</th>
                                <th scope="col">Giá Dịch Vụ</th>
                                <th scope="col">Tình Trạng Dịch Vụ</th>
                                <th scope="col">Tùy Chỉnh</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDichVu()}
                        </tbody>
                    </table>
                </StyleTable>
            </div>

        );
    }
}
const mapStatetoProps = state => {
    return {
        ListDichVu: state.qlDichVu.mangDichVu,
        dropDown_MaLDV: state.qlDichVu.dropDown_MaLDV
    }
}
export default connect(mapStatetoProps)(Services);