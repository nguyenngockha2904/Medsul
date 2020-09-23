package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isc.dto.DieuDuongGetAllDto;
import com.isc.entity.DieuDuong;

@Repository
public interface DieuDuongReponsitory extends JpaRepository<DieuDuong, Integer> {

	@Query("SELECT dd FROM DieuDuong dd WHERE dd.maDieuDuong = :maDieuDuong")
	DieuDuong GetDieuDuongByMaDieuDuong(@Param("maDieuDuong") String maDieuDuong);

	@Query("SELECT dd2 FROM DieuDuong dd2 WHERE dd2.dieuDuong_Id = :dieuDuong_Id")
	DieuDuong GetDieuDuongByID(@Param("dieuDuong_Id") int dieuDuong_Id);

	@Query("SELECT MAX(dd.dieuDuong_Id) FROM DieuDuong dd")
	int maxDieuDuong_ID();

	@Query("SELECT dd FROM DieuDuong dd WHERE dd.soDienThoai = :soDienThoai")
	DieuDuong GetDieuDuongBySDT(@Param("soDienThoai") String soDienThoaiDieuDuong);

	@Query("SELECT dd FROM DieuDuong dd WHERE dd.email = :email")
	DieuDuong GetDieuDuongByEmail(@Param("email") String emailDD);

	@Query("SELECT NEW com.isc.dto.DieuDuongGetAllDto (" + "dd.dieuDuong_Id, " + "dd.maDieuDuong," + "dd.hoTen,"
			+ "dd.gioiTinh, " + "dd.ngaySinh," + "dd.soDienThoai," + "dd.password," + "dd.email," + "dd.diaChi,"
			+ "dd.avatar," + "dd.laDaoTaoVien," + "dd.trangThai," + "tt.tinhThanh_Id," + "vdt.tongTien,"
			+ "vdt.nganHangLienKet," + "vdt.soTaiKhoanNganHang," + "cm.soCMND," + "cm.noiCap,"
			+ "cm.diaChiThuongTruCMND," + "cm.queQuanCMND," + "cm.ngayCapCMND," + "cm.anhMatTruoc," + "cm.anhMatSau"
			+ ") FROM DieuDuong dd " + "JOIN dd.cmnd_dieuDuong cm " + "JOIN dd.tinhThanh tt " + "JOIN dd.viDienTu vdt")
	List<DieuDuongGetAllDto> getDieuDuongDtoGetAll();

	@Query("SELECT NEW com.isc.dto.DieuDuongGetAllDto (" + "dd.dieuDuong_Id, " + "dd.maDieuDuong," + "dd.hoTen,"
			+ "dd.gioiTinh, " + "dd.ngaySinh," + "dd.soDienThoai," + "dd.password," + "dd.email," + "dd.diaChi,"
			+ "dd.avatar," + "dd.laDaoTaoVien," + "dd.trangThai," + "tt.tinhThanh_Id," + "vdt.tongTien,"
			+ "vdt.nganHangLienKet," + "vdt.soTaiKhoanNganHang," + "cm.soCMND," + "cm.noiCap,"
			+ "cm.diaChiThuongTruCMND," + "cm.queQuanCMND," + "cm.ngayCapCMND," + "cm.anhMatTruoc," + "cm.anhMatSau"
			+ ") FROM DieuDuong dd " + "JOIN dd.cmnd_dieuDuong cm " + "JOIN dd.tinhThanh tt "
			+ "JOIN dd.viDienTu vdt WHERE dd.dieuDuong_Id =:dieuDuong_Id")
	DieuDuongGetAllDto GetDieuDuongDtoGetAllById(@Param("dieuDuong_Id") int dieuDuong_Id);

	@Query("SELECT NEW com.isc.dto.DieuDuongGetAllDto (" + "dd.dieuDuong_Id, " + "dd.maDieuDuong," + "dd.hoTen,"
			+ "dd.gioiTinh, " + "dd.ngaySinh," + "dd.soDienThoai," + "dd.password," + "dd.email," + "dd.diaChi,"
			+ "dd.avatar," + "dd.laDaoTaoVien," + "dd.trangThai," + "tt.tinhThanh_Id," + "vdt.tongTien,"
			+ "vdt.nganHangLienKet," + "vdt.soTaiKhoanNganHang," + "cm.soCMND," + "cm.noiCap,"
			+ "cm.diaChiThuongTruCMND," + "cm.queQuanCMND," + "cm.ngayCapCMND," + "cm.anhMatTruoc," + "cm.anhMatSau"
			+ ") FROM DieuDuong dd " + "JOIN dd.cmnd_dieuDuong cm " + "JOIN dd.tinhThanh tt "
			+ "JOIN dd.viDienTu vdt WHERE dd.email =:email")
	DieuDuongGetAllDto GetDieuDuongDtoGetAllByEmail(@Param("email") String email);

	@Query("SELECT NEW com.isc.dto.DieuDuongGetAllDto ("
			+ "dd.dieuDuong_Id, "
			+ "dd.maDieuDuong,"
			+ "dd.hoTen,"
			+ "dd.gioiTinh, "
			+ "dd.ngaySinh,"
			+ "dd.soDienThoai,"
			+ "dd.password,"
			+ "dd.email,"
			+ "dd.diaChi,"
			+ "dd.avatar,"
			+ "dd.laDaoTaoVien,"
			+ "dd.trangThai,"
			+ "tt.tinhThanh_Id,"
			+ "vdt.tongTien,"
			+ "vdt.nganHangLienKet,"
			+ "vdt.soTaiKhoanNganHang,"
			+ "cm.soCMND,"
			+ "cm.noiCap,"
			+ "cm.diaChiThuongTruCMND,"
			+ "cm.queQuanCMND,"
			+ "cm.ngayCapCMND,"
			+ "cm.anhMatTruoc,"
			+ "cm.anhMatSau"
		+ ") FROM DieuDuong dd "
		+ "JOIN dd.cmnd_dieuDuong cm "
		+ "JOIN dd.tinhThanh tt "
		+ "JOIN dd.viDienTu vdt WHERE dd.soDienThoai =:soDienThoai")
	DieuDuongGetAllDto GetDieuDuongDtoGetAllBySDT(@Param("soDienThoai") String sdtDieuDuong);
	
	@Query(" SELECT DISTINCT NEW com.isc.dto.DieuDuongGetAllDto ("
			+ "dd.dieuDuong_Id, "
			+ "dd.maDieuDuong,"
			+ "dd.hoTen,"
			+ "dd.gioiTinh, "
			+ "dd.ngaySinh,"
			+ "dd.soDienThoai,"
			+ "dd.password,"
			+ "dd.email,"
			+ "dd.diaChi,"
			+ "dd.avatar,"
			+ "dd.laDaoTaoVien,"
			+ "dd.trangThai,"
			+ "tt.tinhThanh_Id,"
			+ "vdt.tongTien,"
			+ "vdt.nganHangLienKet,"
			+ "vdt.soTaiKhoanNganHang,"
			+ "cm.soCMND,"
			+ "cm.noiCap,"
			+ "cm.diaChiThuongTruCMND,"
			+ "cm.queQuanCMND,"
			+ "cm.ngayCapCMND,"
			+ "cm.anhMatTruoc,"
			+ "cm.anhMatSau"
		+ ") FROM GiayPhepHanhNghe gphn "
		+ "JOIN DieuDuong dd ON dd.dieuDuong_Id = gphn.giayPhep_DieuDuong_Id "
		+ "JOIN CMND_DieuDuong cm ON dd.dieuDuong_Id = cm.DD_ID "
		+ "JOIN ViDienTu vdt ON vdt.dieuDuong_ID = dd.dieuDuong_Id "
		+ "JOIN TinhThanh tt ON tt.tinhThanh_Id = dd.tinhThanh_Id "
		+ "WHERE gphn.giayPhep_DaoTaoVien_Id =:giayPhep_DaoTaoVien_Id"
		)
	List<DieuDuongGetAllDto> GetDieuDuongDtoGetAllByDaoTaoVienID(@Param("giayPhep_DaoTaoVien_Id") int daoTaoVienID);

}
