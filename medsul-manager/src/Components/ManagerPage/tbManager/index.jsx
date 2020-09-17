import React, { PureComponent } from 'react';
import { StyleTable } from '../../../Styles';
import ManagerItem from '../managerItem';
class ManagerTable extends PureComponent {
    renderManagerItem = () => {

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
                        {/*this.renderManagerItem()*/}
                        <ManagerItem />
                        <ManagerItem />
                        <ManagerItem />
                    </tbody>
                </table>
            </StyleTable>
        );
    }
}

export default ManagerTable;