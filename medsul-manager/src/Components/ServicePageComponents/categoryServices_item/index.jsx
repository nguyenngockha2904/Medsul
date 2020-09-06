import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnDelete from '../../../img/btnDelete.svg';

class CategoriesItem extends Component {
    render() {
        return (
            <tr className="tRow" >
                <th scope="row" onClick={() => { console.log('click row') }}>1</th>
                <td onClick={() => { console.log('click row') }}>phcn</td>
                <td onClick={() => { console.log('click row') }}>Phục hồi chức năng</td>
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