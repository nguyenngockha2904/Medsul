import React, { Component, Fragment, PureComponent } from 'react';

import DieuDuongItem from '../DieuDuongItem';
class TbDieuDuongComponent extends PureComponent {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            No.
                    </th>
                        <th scope="col">
                            Mã điều dưỡng
                    </th>
                        <th scope="col">
                            Họ tên
                    </th>
                        <th scope="col">
                            Sdt
                    </th>
                        <th scope="col">
                            Giới tính
                    </th>
                        <th scope="col">
                            Chuyên ngành
                    </th>
                        <th scope="col">
                            Tỉnh thành
                    </th>
                        <th scope="col">
                            Đào tạo viên
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
                    <DieuDuongItem />
                    <DieuDuongItem />
                    <DieuDuongItem />
                </tbody>
            </table>
        );
    }
}

export default TbDieuDuongComponent;