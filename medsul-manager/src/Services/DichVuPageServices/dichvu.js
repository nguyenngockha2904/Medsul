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
    deleleDichVu(id) {
        return Axios({
            method: 'DELETE',
            url: `http://localhost:8080/api/dichvu/${id}`
        })
    }
    updateDichVu(id, value) {
        return Axios({
            method: 'PUT',
            url: `http://localhost:8080/api/dichvu/${id}`,
            data: value
        })
    }
}
export default DichVu;