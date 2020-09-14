import React, { Component, Fragment, PureComponent } from 'react';
import styled from 'styled-components';

import DieuDuongItem from '../DieuDuongItem';
class TbDieuDuongComponent extends PureComponent {
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
                                Chuyên ngành
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
                        <DieuDuongItem />
                        <DieuDuongItem />
                        <DieuDuongItem />
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
                &.tdStatus{
                    color:#FF4600;
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
        }
        
    }
}
`
export default TbDieuDuongComponent;