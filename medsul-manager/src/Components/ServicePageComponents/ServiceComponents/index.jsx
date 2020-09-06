import React, { Component } from 'react';
import ServiceItem from '../Services_item';

class Services extends Component {
    render() {
        return (
            <div className="tableTab">
                <div className="d-flex justify-content-between headtable">
                    <p>Dịch Vụ</p>
                    <button className="btn btn-success btnAdd" data-toggle="modal" data-target="#ServiceModal">THÊM</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Mã Dịch Vụ</th>
                            <th scope="col">Tên Dịch Vụ</th>
                            <th scope="col">Mô Tả Dịch Vụ</th>
                            <th scope="col">Công Việc Yêu Cầu</th>
                            <th scope="col">Công Việc Không Bao Gồm</th>
                            <th scope="col">Thời Gian Ước Tính</th>
                            <th scope="col">Tùy Chỉnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                        <ServiceItem />
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Services;