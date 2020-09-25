import Axios from 'axios';
class TinhThanh {
    fetchDataListTinhThanh() {
        return Axios({
            url: 'http://localhost:8080/api/tinhthanh',
            method: 'GET',
        });
    }
}
export default TinhThanh;