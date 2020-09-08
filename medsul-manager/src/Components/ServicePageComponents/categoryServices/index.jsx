import React, { Component } from 'react';
import CategoriesItem from '../categoryServices_item';
import { connect } from 'react-redux';
class CategoryServices extends Component {
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
                <div className="d-flex justify-content-between headtable">
                    <p>Loại Dịch Vụ</p>
                    <button className="btn btn-success btnAdd" data-toggle="modal" data-target="#categoryServiceModal">THÊM</button>
                </div>
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