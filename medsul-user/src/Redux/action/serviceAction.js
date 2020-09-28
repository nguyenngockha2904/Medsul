import { ServiceType, Service } from '../../services';
import { BookService } from '../../services';
import { createAction } from './';
import { FETCH_SERVICE, FETCH_SERVICETYPE } from './type';
export const getAllListServiceType = () => {
    return dispatch => {
        ServiceType.fetchDataServiceType().then(res => {
            dispatch(createAction(FETCH_SERVICETYPE, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getAllListService = () => {
    return dispatch => {
        Service.FetchDataListService().then(res => {
            dispatch(createAction(FETCH_SERVICE, res.data));
        }).catch(err => {
            console.log(err);
        })
    }
}
export const bookService = (id, value, callback) => {
    return dispatch => {
        BookService.bookService(id, value).then(res => {
            // console.log(res.data);
            callback();
        }).catch(err => {
            console.log(err);
        });
    }
}