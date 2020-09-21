import Axios from 'axios';

class Manager {
    fetchDanhSachManager() {
        return Axios({
            method: 'GET',
            url: 'http://localhost:8080/api/admin'
        });
    };
    addNewManager(value) {
        return Axios({
            method: 'POST',
            url: 'http://localhost:8080/api/admin',
            data: value
        });
    };
    updateManager(id, value) {
        return Axios({
            method: 'PUT',
            url: `http://localhost:8080/api/admin/${id}`,
            data: value
        });
    };
}
export default Manager;