import Axios from 'axios';
class BookService {
    bookService = (id, value) => {
        return Axios({
            method: 'POST',
            url: `http://localhost:8080/api/user/user/${id}`,
            data: value
        });
    }
}
export default BookService;