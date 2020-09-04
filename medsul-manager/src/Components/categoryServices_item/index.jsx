import React, { Component } from 'react';
import btnEdit from '../../img/btnEdit.svg';
import btnDelete from '../../img/btnDelete.svg';

class CategoriesItem extends Component {
    render() {
        return (
            <tr className="tRow">
                <th scope="row">1</th>
                <td>phcn</td>
                <td>Phục hồi chức năng</td>
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

export default CategoriesItem;