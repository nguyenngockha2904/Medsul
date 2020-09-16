import React, { Component } from 'react';
import CategoriesItem from '../categoryServices_item';
import { connect } from 'react-redux';
import { SHOW_MODAL_LOAIDICHVU } from '../../../Redux/actions/type';
import { StyledModel, StyleTable, StyleGroupButtonSearch } from '../../../Styles';
class CategoryServices extends Component {
    handleShowModal = (value) => {
        this.props.dispatch({
            type: SHOW_MODAL_LOAIDICHVU,
            payload: {
                loaiDichVu_Id: '',
                maLoaiDichVu: '',
                tenLoaiDichVu: ''
            }
        })
    }
    renderLoaiDichVu = () => {
        return this.props.listLoaiDichVu.map((item, index) => {
            return (
                <CategoriesItem index={(+index + 1)} item={item} key={index} />
            )
        });
    }

    render() {
        return (
            <div className="tableTab">
                <StyleGroupButtonSearch>
                    <div className="d-flex justify-content-between">
                        <p className="titleGroup">Loại Dịch Vụ</p>
                        <button className="btnAdd" onClick={this.handleShowModal}>Thêm</button>
                    </div>
                </StyleGroupButtonSearch>
                <StyleTable>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Mã Loại Dịch Vụ</th>
                                <th scope="col">Tên Loại Dịch Vụ</th>
                                <th scope="col">Tùy Chỉnh</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderLoaiDichVu()}
                        </tbody>
                    </table>
                </StyleTable>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        listLoaiDichVu: state.qlDichVu.mangLoaiDichVu
    }
}


export default connect(mapStateToProps)(CategoryServices);