import React, { Component } from 'react';
import CategoriesItem from '../categoryServices_item';
class CategoryServices extends Component {
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
                        <CategoriesItem />
                        <CategoriesItem />
                        <CategoriesItem />
                        <CategoriesItem />
                        <CategoriesItem />
                        <CategoriesItem />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CategoryServices;