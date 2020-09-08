import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnDelete from '../../../img/btnDelete.svg';
class ServiceItem extends Component {
    render() {
        const { maDichVu, moTaDichVu, tenDichVu, thoiGianUocTinh, yeuCauCongViec, khongBaoGom } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow">
                <th scope="row">{index}</th>
                <td>{maDichVu}</td>
                <td>{tenDichVu}</td>
                <td>{moTaDichVu.slice(0, 50)}...</td>
                <td>{yeuCauCongViec.slice(0, 50)}...</td>
                <td>{khongBaoGom}</td>
                <td>{thoiGianUocTinh} giờ</td>
                <td><div className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom">
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className=" btnCustom">
                        <img src={btnDelete} alt="btnDelete" />
                    </button>
                </div></td>
            </tr>
        );
    }
}

export default ServiceItem;