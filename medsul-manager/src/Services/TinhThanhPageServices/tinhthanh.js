import Axios from 'axios';


class TinhThanh {
    fetchDanhSachTinhThanh() {
        return Axios({
            method: "GET",
            url: 'http://localhost:8080/api/tinhthanh',
        });
    }
}
export default TinhThanh;