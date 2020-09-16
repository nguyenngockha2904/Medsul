import Axios from "axios";

class DieuDuong {
    fetchDanhSachDieuDuong() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/dieuDuong',
        });
    }
    addDieuDuong(value) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/dieuDuong',
            data: value
        });
    }

}

export default DieuDuong;