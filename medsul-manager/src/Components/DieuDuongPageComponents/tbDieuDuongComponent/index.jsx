import React, { Component, Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DieuDuongItem from '../DieuDuongItem';
class TbDieuDuongComponent extends PureComponent {
    // valueSearch
    renderDieuDuongItem = () => {
        return this.props.isDaoTaoVien === 0 ?
            (this.props.valueStatus !== 0
                ? (
                    this.props.valueSearch !== -1 ? '' : this.props.listDieuDuong.filter(dd => dd.trangThai === this.props.valueStatus).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1} typeTable={this.props.typeTable} />
                        )
                    })
                )
                :
                this.props.valueSearch !== -1 ?
                    this.props.listDieuDuong.filter(dd => (dd.maDieuDuong === this.props.valueSearch)).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })
                    : this.props.listDieuDuong.map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })
            )
            : (this.props.valueStatus !== 0
                ?
                this.props.listDieuDuong.filter(dd => (dd.trangThai === this.props.valueStatus && dd.laDaoTaoVien === 1)).map((item, index) => {
                    return (
                        <DieuDuongItem item={item} key={index} index={+index + 1}
                            typeTable={this.props.typeTable} />
                    )
                })
                : this.props.valueSearch !== -1 ?
                    this.props.listDieuDuong.filter(dd => (dd.laDaoTaoVien === 1 && dd.maDieuDuong === this.props.valueSearch)).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    })

                    : this.props.listDieuDuong.filter(dd => (dd.laDaoTaoVien === 1)).map((item, index) => {
                        return (
                            <DieuDuongItem item={item} key={index} index={+index + 1}
                                typeTable={this.props.typeTable} />
                        )
                    }))

    }
    render() {
        console.log("valueStatus: " + this.props.valueStatus);
        console.log("isDaoTaoVien: " + this.props.isDaoTaoVien);
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
export const StyleTable = styled.div`
.table{
    box-shadow: 1px 2px 4px -0.5px #80808080;
    min-height: 300px;
    height: auto;
    border-radius: 10px;
    thead{
        tr{
            th{
                border: none;
                white-space: nowrap;
                text-align: center;
                color: #CBD1D9;
            }
        }
    }
    tbody{
        .tRow{
            
            th{
                text-align: center;
            }
            td{
                font-size: 0.8rem;
                white-space: nowrap;
                text-align: center;
                vertical-align: initial;
                &.tdStatus{
                    color:#FF4600;
                    font-weight: 700;
                    letter-spacing: 1px;
                    font-size: 0.8em;
                }
                &.isThuViec{
                    color:#FFEF00;
                }
                &.isNghiViec{
                    color:#FF0000;
                }
                &.isChinhThuc{
                    color:#2CD889;
                }
                
                &.groupBtn{
                    .btnCustom{
                        padding: 0 10px;
                        margin: 0 0.3rem;
                        border-radius: 10px;
                        background: #fff;
                        border: none;
                        outline:none;
                        &:hover{
                            background: #F0FAF8;
                        }
                    }
                }
            }
            &:hover{
                cursor: pointer;
                background-color:#F0FAF0;
                td{
                    &.groupBtn{
                        .btnCustom{
                            background: #F0FAF0;
                            &:hover{
                                background: #fff;    
                            }
                        }
                    }
                }
            }
        }
        
    }
}
`

const mapStateToProps = state => {
    return {
        listDieuDuong: state.qlDieuDuong.listDieuDuong
    }
}
export default connect(mapStateToProps)(TbDieuDuongComponent);