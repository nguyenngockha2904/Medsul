import Axios from 'axios';

class GPHN {
    getALlGPHN() {
        return Axios({
            url: 'http://localhost:8080/api/giayPhepHanhNghe',
            method: 'GET'
        });
    }
    getGiayPhepHanhNgheByDieuDuongId(id) {
        return Axios({
            url: `http://localhost:8080/api/giayPhepHanhNghe/GetGiayPhepByDieuDuongID/${id}`,
            method: 'GET'
        })
    }
    addGiayPhepHanhNghe(value) {
        return Axios({
            url: 'http://localhost:8080/api/giayPhepHanhNghe',
            method: 'POST',
            data: value
        })
    }


}

export default GPHN;