import Axios from 'axios';

class ServiceType {
    fetchDataServiceType() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/loaiDichVu'
        });
    }
}
export default ServiceType;