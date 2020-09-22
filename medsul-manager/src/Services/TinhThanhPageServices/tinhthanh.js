import Axios from 'axios';


class TinhThanh {
    fetchDanhSachTinhThanh() {
        return Axios({
            method: "GET",
            url: 'http://localhost:8080/api/tinhthanh',
        });
    }
    addTinhThanh(value) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/tinhthanh',
            data: value
        })
    }
    updateTinhThanh(id, value) {
        return Axios({
            method: 'PUT',
            url: `http://localhost:8080/api/tinhthanh/${id}`,
            data: value
        })
    }
}
export default TinhThanh;