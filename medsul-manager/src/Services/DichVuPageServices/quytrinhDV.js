import Axios from "axios";

class QuyTrinhDichVu {
    getQuyTrinhDichVuByID(id) {
        return Axios({
            method: 'GET',
            url: `http://localhost:8080/api/quyTrinhThucHienDichVu/${id}`
        });
    }
}

export default QuyTrinhDichVu;