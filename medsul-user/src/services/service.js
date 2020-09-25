import Axios from 'axios';

class Service {
    FetchDataListService() {
        return Axios({
            method: 'get',
            url: 'http://localhost:8080/api/dichvu'
        });
    }
}
export default Service;