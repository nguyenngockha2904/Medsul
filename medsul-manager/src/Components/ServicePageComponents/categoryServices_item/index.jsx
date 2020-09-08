import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnDelete from '../../../img/btnDelete.svg';

class CategoriesItem extends Component {
    render() {
        const { loaiDichVu_Id, maLoaiDichVu, tenLoaiDichVu } = this.props.item;
        const index = this.props.index;
        return (
            <tr className="tRow" >
                <th scope="row" onClick={() => { console.log('click row') }}>{index}</th>
                <td onClick={() => { console.log('click row') }}>{maLoaiDichVu}</td>
                <td onClick={() => { console.log('click row') }}>{tenLoaiDichVu}</td>
                <td><div className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={() => { console.log('click btnEdit') }}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                    <button className=" btnCustom" onClick={() => { console.log('click btnDelete') }}>
                        <img src={btnDelete} alt="btnDelete" />
                    </button>
                </div></td>
            </tr>
        );
    }
}

export default CategoriesItem;