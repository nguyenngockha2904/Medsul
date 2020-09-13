import React, { Component, PureComponent } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnVitien from '../../../img/btnViTien.svg';
import btnChuyenNganh from '../../../img/btnChuyenNganh.svg';
class DieuDuongItem extends PureComponent {
    render() {
        return (
            <tr className="tRow">
                {/**No. */}
                <th>1</th>
                {/**Mã điều dưỡng. */}
                <td>MD001</td>
                {/**Họ tên */}
                <td>Nguyễn Ngọc Kha</td>
                {/**sdt */}
                <td>0329457486</td>
                {/**giới tính. */}
                <td>Nam</td>
                {/**Chuyên ngành. */}
                <td>Điều dưỡng</td>
                {/**Tỉnh thành. */}
                <td>TP.HCM</td>
                {/**Đào tạo viên */}
                <td>có</td>
                {/**Trạng thái */}
                <td className="tdStatus">Chính thức</td>
                {/**Tùy chỉnh */}
                <td className="d-flex justify-content-center groupBtn">
                    <button className="btnCustom">
                        <img src={btnVitien} alt="btnViTien" />
                    </button>
                    <button className="btnCustom">
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className="btnCustom">
                        <img src={btnChuyenNganh} alt="btnChuyenNganh" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default DieuDuongItem;