import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnRePass from '../../../img/password_icon.svg';
class DonHangItem extends Component {
    render() {
        return (
            <tr className="tRow">
                {/* NO */}
                <th>1</th>
                {/* Tên khách hàng */}
                <td>Nguyễn Văn Mèo</td>
                {/* Tên dịch vụ */}
                <td>Phục hồi chức năng</td>
                {/* trạng thái */}
                <td className='tdStatus'>Đang thực hiện</td>
                <td>70000</td>
                <td>805000</td>
                <td className="d-flex justify-content-center groupBtn">

                    <button className="btnCustom">
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default DonHangItem;