import React, { Component } from 'react';
import { StylePageComponent, StyleGroupButtonSearch } from '../../Styles';

class Manager extends Component {
    render() {
        return (
            <StylePageComponent>
                <p className="text-center title">Danh sách quản trị viên</p>
                <div className="contentTabGroup">
                    <div className="contentTab">
                        <StyleGroupButtonSearch>


                        </StyleGroupButtonSearch>

                    </div>


                </div>

            </StylePageComponent>

        );
    }
}

export default Manager;