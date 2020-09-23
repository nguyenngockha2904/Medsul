import Axios from 'axios';

class DonHang {
    getAllDongHang() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/datlich'
        });
    }
}
export default DonHang;