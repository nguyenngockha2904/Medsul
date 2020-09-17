import React, { PureComponent } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnVitien from '../../../img/btnViTien.svg';
import btnChuyenNganh from '../../../img/btnChuyenNganh.svg';
import btnRePass from '../../../img/password_icon.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_MANAGER, SHOW_MODAL_REPASSWORD } from '../../../Redux/actions/type';
class ManagerItem extends PureComponent {
    ShowModalPass = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_REPASSWORD, value));
    }
    ShowModalManager = value => () => {
        this.props.dispatch(createAction(SHOW_MODAL_MANAGER, value));
    }
    render() {
        const trangThai = 3;
        return (
            <tr className="tRow">
                <th>1</th>
                {/**Họ tên manager. */}
                <td>Nguyễn Ngọc Kha</td>
                {/**Giới tính. */}
                <td>Nam</td>
                {/**sdt*/}
                <td>0329457486</td>
                {/**trạng thái*/}
                <td className={trangThai === 1 ? 'tdStatus isThuViec' : (trangThai === 2 ? 'tdStatus isNghiViec' : 'tdStatus isChinhThuc')}>{trangThai === 1 ? 'Thử việc' : (trangThai === 2 ? 'Nghỉ việc' : 'Chính thức')}</td>
                {/**tùy chỉnh*/}
                <td className="d-flex justify-content-center groupBtn">

                    <button className="btnCustom" onClick={this.ShowModalManager({})}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>

                    <button className="btnCustom" onClick={this.ShowModalPass({})}>
                        <img src={btnRePass} alt="btnRePass" />
                    </button>
                </td>
            </tr>
        );
    }
}

export default connect()(ManagerItem);