import { app } from '../../base';
import React, { Component } from 'react';

class ThongKeComponent extends Component {
    state = {
        fileUrl: ''
    }
    handleChangeFile = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        this.setState({
            fileUrl: fileUrl
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" onChange={this.handleChangeFile} />
                    <input type="text" name="username" placeholder="NAME" />
                    <button type="submit">Submit</button>
                </form>
                <img src={this.state.fileUrl} alt="" />
            </>
        );
    }
}

export default ThongKeComponent;