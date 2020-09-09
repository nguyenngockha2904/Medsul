import Axios from 'axios';
class DichVu {
    fetchDichVu() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/dichvu'
        });
    }
    addDichVu(value) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/dichvu',
            data: value
        })
    }
}
export default DichVu;