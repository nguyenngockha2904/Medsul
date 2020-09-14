import Axios from "axios";

class DieuDuong {
    fetchDanhSachDieuDuong() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/dieuDuong',
        });
    }
}

export default DieuDuong;