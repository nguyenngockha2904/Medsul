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
        const { maTinhThanh, tenTinhThanh, heSoTinhThanhDieuDuong, heSoTinhThanhUser } = this.props.item;
        return (
            <tr className="tRow" >
                <th scope="row" onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 2 })}>{this.props.index}</th>
                <td onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 2 })}>{maTinhThanh.toLocaleLowerCase()}</td>
                <td onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 2 })}>{tenTinhThanh}</td>
                <td onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 2 })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.039" height="11.11" viewBox="0 0 8.039 11.11">
                        <path id="downIcon" d="M7.421,2.463a.406.406,0,1,0-.8,0V11.44L3.7,7.708a.366.366,0,0,0-.568-.034.513.513,0,0,0-.03.654l3.618,4.629a.368.368,0,0,0,.6,0l3.618-4.629a.514.514,0,0,0-.03-.654.366.366,0,0,0-.568.034L7.421,11.44Z" transform="translate(-3 -2)" fill="red" />
                    </svg>

                    {heSoTinhThanhDieuDuong}%</td>
                <td onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 2 })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.039" height="11.11" viewBox="0 0 8.039 11.11">
                        <path id="downIcon" d="M7.421,2.463a.406.406,0,1,0-.8,0V11.44L3.7,7.708a.366.366,0,0,0-.568-.034.513.513,0,0,0-.03.654l3.618,4.629a.368.368,0,0,0,.6,0l3.618-4.629a.514.514,0,0,0-.03-.654.366.366,0,0,0-.568.034L7.421,11.44Z" transform="translate(-3 -2)" fill="red" />
                    </svg>

                    {heSoTinhThanhUser}%</td>

                <td className="d-flex justify-content-center groupBtn">
                    <button className=" btnCustom" onClick={this.ShowModalTinhThanh({ value: this.props.item, role: 3 })}>
                        <img src={btnEdit} alt="btnEdit" />
                    </button>
                </td>
            </tr >

        );
    }
}


export default connect()(TinhThanhItem);