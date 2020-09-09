import Axios from 'axios';

class LoaiDichVu {
    fetchLoaiDichVu() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/loaiDichVu',
        })
    }
    addLoaiDichVu(value) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/loaiDichVu',
            data: value
        })
    }
    deleleLoaiDichVu(id) {
        return Axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/loaiDichVu/${id}`
        })
    }
    updateLoaiDichVu(id, value) {
        return Axios({
            method: 'PUT',
            url: `http://localhost:8080/api/loaiDichVu/${id}`,
            data: value
        })
    }
}

export default LoaiDichVu;