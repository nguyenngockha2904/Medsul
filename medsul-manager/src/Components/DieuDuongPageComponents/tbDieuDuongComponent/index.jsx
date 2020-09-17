import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import DieuDuongItem from '../DieuDuongItem';
import { StyleTable } from '../../../Styles';
class TbDieuDuongComponent extends PureComponent {
    // valueSearch
    renderDieuDuongItem = () => {
        let list = [];
        this.props.typeTable === 1 ? list = this.props.listDieuDuong : (this.props.typeTable === 2 ? list = this.props.listDieuDuong : list = this.props.listDieuDuongByIdDaoTao);

        return this.props.isDaoTaoVien === 0 ?
            (this.props.valueStatus !== 0
                ? (
                    this.props.valueSearch !== -1 ? '' : list.filter(dd => dd.trangThai === this.props.valueStatus).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1} typeTable={this.props.typeTable} />
                        )
                    })
                )
                :
                this.props.valueSearch !== -1 ?
                    list.filter(dd => (dd.maDieuDuong.toLowerCase() === this.props.valueSearch.toLowerCase())).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })
                    : list.map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })
            )
            : (this.props.valueStatus !== 0
                ?
                list.filter(dd => (dd.trangThai === this.props.valueStatus && dd.laDaoTaoVien === 1)).map((item, index) => {
                    return (
                        <DieuDuongItem item={item} key={index} index={+index + 1}
                            typeTable={this.props.typeTable} />
                    )
                })
                : this.props.valueSearch !== -1 ?
                    list.filter(dd => (dd.laDaoTaoVien === 1 && dd.maDieuDuong.toLowerCase() === this.props.valueSearch.toLowerCase())).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })

                    : list.filter(dd => (dd.laDaoTaoVien === 1)).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    }))

    }
    render() {
        // console.log("valueStatus: " + this.props.valueStatus);
        // console.log("isDaoTaoVien: " + this.props.isDaoTaoVien);
        return (
            <StyleTable>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                No.
                            </th>
                            <th scope="col">
                                Mã điều dưỡng
                            </th>
                            <th scope="col">
                                Họ tên
                            </th>
                            <th scope="col">
                                Sdt
                            </th>
                            <th scope="col">
                                Giới tính
                            </th>
                            <th scope="col">
                                Tỉnh thành
                            </th>
                            <th scope="col">
                                Đào tạo viên
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

                        {this.renderDieuDuongItem()}
                    </tbody>
                </table>
            </StyleTable>
        );
    }
}

const mapStateToProps = state => {
    return {
        listDieuDuong: state.qlDieuDuong.listDieuDuong,
        listDieuDuongByIdDaoTao: state.qlDieuDuong.listDieuDuongByIdDaoTao ? state.qlDieuDuong.listDieuDuongByIdDaoTao : []
    }
}
export default connect(mapStateToProps)(TbDieuDuongComponent);