import DichVuClass from './DichVuPageServices/dichvu';
import LoaiDichVuClass from './DichVuPageServices/loaidichvu';
import DieuDuongClass from './DieuDuongPageServices/dieuduong';
import TinhThanhClass from './TinhThanhPageServices/tinhthanh';
import QuyTrinhDichVuClass from './DichVuPageServices/quytrinhDV';
import GiaPhepHanhNgheClass from './DieuDuongPageServices/GiayPhepHanhNghe';
export const DichVu = new DichVuClass();
export const LoaiDichVu = new LoaiDichVuClass();
export const DieuDuong = new DieuDuongClass();
export const TinhThanh = new TinhThanhClass();
export const QuyTrinhDichVu = new QuyTrinhDichVuClass();
export const GPHN = new GiaPhepHanhNgheClass();