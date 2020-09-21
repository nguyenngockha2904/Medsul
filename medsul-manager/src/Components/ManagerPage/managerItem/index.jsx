import React, { PureComponent } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import btnRePass from '../../../img/password_icon.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_MANAGER, SHOW_MODAL_REPASSWORD } from '../../../Redux/actions/type';
class ManagerItem extends PureComponent {
    ShowModalPass = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_REPASSWORD, value));
    }
    ShowModalManager = (value, role) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_MANAGER, { value: value, role: role }));
    }
    render() {
        const { admin_ID, admin_HOTEN, admin_SDT, admin_GIOITINH, admin_TINHTRANG } = this.props.item;
        return (
            <tr className="tRow">
                <th
                    onClick={this.ShowModalManager(this.props.item, 2)}
                >{this.props.index}</th>
                {/**Họ tên manager. */}
                <td
                    onClick={this.ShowModalManager(this.props.item, 2)}
                >{admin_HOTEN}</td>
                {/**Giới tính. */}
                <td
                    onClick={this.ShowModalManager(this.props.item, 2)}
                >{admin_GIOITINH}</td>
                {/**sdt*/}
                <td
                    onClick={this.ShowModalManager(this.props.item, 2)}
                >{admin_SDT}</td>
                {/**trạng thái*/}
                <td className={admin_TINHTRANG === 1 ? 'tdStatus isChinhThuc' : 'tdStatus isNghiViec'}
                    onClick={this.ShowModalManager(this.props.item, 2)}
                >{admin_TINHTRANG === 1 ? 'Đang làm' : 'Nghỉ việc'}</td>
                {/**tùy chỉnh*/}
                <td className="d-flex justify-content-center groupBtn">

                    <button className="btnCustom" onClick={this.ShowModalManager(this.props.item, 3)}>
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