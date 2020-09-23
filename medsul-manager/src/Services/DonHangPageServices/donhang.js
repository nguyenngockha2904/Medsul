import Axios from 'axios';

class DonHang {
    getAllDongHang() {
        return Axios({
            method: 'GET',
            url: ''
        });
    }
}
export default DonHang;