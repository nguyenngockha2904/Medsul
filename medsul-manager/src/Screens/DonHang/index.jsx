import React, { Component } from 'react';
import { StylePageComponent, StyleGroupButtonSearch } from '../../Styles';
import DonHangTable from '../../Components/DonHangPage/tbDonHang';
class DonHangComponent extends Component {
    state = {
        statusSelect: 0,
    }
    handleChangeSelectNum = (e) => {
        this.setState({
            statusSelect: parseInt(e.target.value)
        })
    }
    handleSearch = () => {

    }
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Danh sách đơn hàng</p>
                <div className="contentTabGroup">

                    <div className="contentTab tab_DD">
                        <p className="m-0 p-0 text-center title_tab">danh sách điều dưỡng</p>
                        <StyleGroupButtonSearch >
                            <select className={this.state.statusSelect === 1 ? "selectStatus isThuViec" : (
                                this.state.statusSelect === 4 ? "selectStatus isNghiViec" : (this.state.statusSelect === 3 ? "selectStatus isChinhThuc" : this.state.statusSelect === 2 ? "selectStatus isAnother" : 'selectStatus'))}
                                value={this.state.statusSelect}
                                name="statusSelect"
                                onChange={this.handleChangeSelectNum}
                            >
                                <option value={0}>Tất cả</option>
                                <option value={1}>Chưa hoàn thành</option>
                                <option value={2}>Đang thực hiện</option>
                                <option value={3}>Đã hoàn thành</option>
                                <option value={4}>Đã hủy</option>
                            </select>


                            {/* <form className="d-flex justify-content-center groupSearch" onSubmit={this.handleSearch()}>
                            <input type="text" className="form-contro" placeholder="Mã...."
                                name="valueSearch" value={this.state.valueSearch !== -1 ? this.state.valueSearch : ''}
                                onChange={this.handleChange}
                                onClick={this.handleClickInputSearch}
                            />
                            <div className="input-group-append">
                                <button className="btnSearch" type="submit">Tìm kiếm</button>
                            </div>
                        </form> */}
                            <button className="btnAdd" onClick={this.handleShowModalDonHang}>Thêm</button>
                        </StyleGroupButtonSearch>
                        <DonHangTable />
                    </div>
                </div>

            </StylePageComponent>
        );
    }
}

export default DonHangComponent;