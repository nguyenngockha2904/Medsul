import { DonHang } from '../../Services';

export const layDanhSachDonHang = () => {
    return dispatch => {
        DonHang.getAllDongHang().then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}