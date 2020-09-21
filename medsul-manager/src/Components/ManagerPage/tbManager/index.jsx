import React, { PureComponent } from 'react';
import { StyleTable } from '../../../Styles';
import ManagerItem from '../managerItem';
import { connect } from 'react-redux';
class ManagerTable extends PureComponent {
    renderManagerItem = () => {
        let list = this.props.listAllManager;
        let status = this.props.valueStatus;
        return status === 0
            ?
            list.map((item, index) => {
                return (
                    <ManagerItem index={index + 1} item={item} key={index} />
                )
            })
            :
            list.filter(mn => mn.admin_TINHTRANG === status).map((item, index) => {
                return (
                    <ManagerItem index={index + 1} item={item} key={index} />
                )
            })


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
                                Họ Tên
                            </th>
                            <th scope="col">
                                Giới tính
                            </th>
                            <th scope="col">
                                Sdt
                            </th>
                            <th scope="col">
                                Trạng thái
                            </th>
                            <th scope="col">
                                Tùy chỉnh
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderManagerItem()}
                    </tbody>
                </table>
            </StyleTable>
        );
    }
}
const mapStateToProps = state => ({
    listAllManager: state.qlManager.listAllManager
});
export default connect(mapStateToProps)(ManagerTable);