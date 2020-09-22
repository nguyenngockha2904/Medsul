import React, { Component } from 'react';
import btnEdit from '../../../img/btnEdit.svg';
import { connect } from 'react-redux';
import { createAction } from '../../../Redux/actions';
import { SHOW_MODAL_TINHTHANH } from '../../../Redux/actions/type';

class TinhThanhItem extends Component {
    ShowModalTinhThanh = (value) => () => {
        this.props.dispatch(createAction(SHOW_MODAL_TINHTHANH, value));
    }
    render() {
        const { tinhThanh_Id, maTinhThanh, tenTinhThanh, heSoTinhThanhDieuDuong, heSoTinhThanhUser } = this.props.item;
        return (
                <tr className="tRow" >
                    <th scope="row" onClick={this.ShowModalTinhThanh({value:this.props.item,role:2})}>{this.props.index}</th>
                    <td onClick={this.ShowModalTinhThanh({value:this.props.item,role:2})}>{maTinhThanh.toLocaleLowerCase()}</td>
                    <td onClick={this.ShowModalTinhThanh({value:this.props.item,role:2})}>{tenTinhThanh}</td>
                    <td onClick={this.ShowModalTinhThanh({value:this.props.item,role:2})}>{heSoTinhThanhDieuDuong}</td>
                    <td onClick={this.ShowModalTinhThanh({value:this.props.item,role:2})}>{heSoTinhThanhUser}</td>

                    <td className="d-flex justify-content-center groupBtn">
                        <button className=" btnCustom" onClick={this.ShowModalTinhThanh({value:this.props.item,role:3})}>
                            <img src={btnEdit} alt="btnEdit" />
                        </button>
                    </td>
                </tr >
            
        );
    }
}


export default connect()(TinhThanhItem);