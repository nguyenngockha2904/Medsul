import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const RootReducer = combineReducers({
    isLogin: LoginReducer,
});

export default RootReducer;