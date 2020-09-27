import React, { Component } from 'react';
import { PureComponent } from 'react';
import { StyleTable } from '../../../Styles';
import DonHangItem from '../DonHangItem';
import { connect } from 'react-redux';
class DonHangTable extends PureComponent {
    renderListDonHang = () => {
        let list = [];
        let statusSelect = this.props.statusSelect;
        if (statusSelect === -1 || statusSelect === 0) {
            list = this.props.listDonHang;
        } else {
            list = this.props.listDonHang.filter(dh => dh.dl_TINHTRANG === statusSelect);
        }
        return list.map((item, index) => {
            return (
                <DonHangItem index={index + 1} key={index} item={item} />
            )
        });
    }
    render() {
        return (
            <StyleTable>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                No.
                            </th>
                            <th scope="col">
                                Tên Khách Hàng
                            </th>
                            <th scope="col">
                                Tên dịch vụ
                            </th>
                            <th scope="col">
                                Tỉnh thành
                            </th>
                            <th scope="col">
                                Tiền dịch vụ
                            </th>
                            <th scope="col">
                                Tùy chỉnh
                            </th>
                            <th scope="col">
                                Trạng thái
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListDonHang()}
                    </tbody>
                </table>
            </StyleTable>
        );
    }
}
const mapStateToProps = state => ({ listDonHang: state.qlDonHang.listDonHang })
export default connect(mapStateToProps)(DonHangTable);