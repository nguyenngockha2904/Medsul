package com.isc.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import lombok.Data;
@Data
public class DieuDuongEditDto {

	@NotBlank(message = "vui long nhap ho ten dieu duong")
	private String hoTen;

	@NotBlank(message = "vui long nhap gioi tinh dieu duong")
	private String gioiTinh;

	@NotBlank(message = "vui long password dieu duong")
	private String password;

	private LocalDate ngaySinh;

	@NotBlank(message = "vui long nhap email dieu duong")
	private String email;

	@NotBlank(message = "vui long nhap trang thai dieu duong")
	private int trangThai;

	@NotBlank(message = "vui long nhap tinh thanh dieu duong")
	private int tinhThanh_ID;

	@NotBlank(message = "cho biet co phai la dao tao vien hay khong ( 2-khong ; 1-co )")
	private int laDaoTaoVien;

	private String diaChi;

	private String avatar;

	//// --Vi dien Tu--////

	private String soTaiKhoanNganHang;

	private String nganHangLienKet;

	///// --CMND--/////
	@NotBlank(message = "vui long nhap so cmnd")
	private String soCMND;

	private String noiCap;

	private LocalDate ngayCapCMND;

	private String diaChiThuongTruCMND;

	private String queQuanCMND;

	private String anhMatTruoc;

	private String anhMatSau;

	public DieuDuongEditDto() {
	}

	public DieuDuongEditDto(
			@NotBlank(message = "vui long nhap ho ten dieu duong") String hoTen,
			@NotBlank(message = "vui long nhap gioi tinh dieu duong") String gioiTinh,
			@NotBlank(message = "vui long password dieu duong") String password, LocalDate ngaySinh,
			@NotBlank(message = "vui long nhap email dieu duong") String email,
			@NotBlank(message = "vui long nhap trang thai dieu duong") int trangThai,
			@NotBlank(message = "vui long nhap tinh thanh dieu duong") int tinhThanh_ID,
			@NotBlank(message = "cho biet co phai la dao tao vien hay khong ( 2-khong ; 1-co )") int laDaoTaoVien,
			String diaChi, String avatar, String soTaiKhoanNganHang, String tenNganHang,
			@NotBlank(message = "vui long nhap so cmnd") String soCMND, String noiCap, LocalDate ngayCap,
			String diaChiThuongTru, String queQuan, String anhMatTruoc, String anhMatSau) {
		super();
		this.hoTen = hoTen;
		this.gioiTinh = gioiTinh;
		this.password = password;
		this.ngaySinh = ngaySinh;
		this.email = email;
		this.trangThai = trangThai;
		this.tinhThanh_ID = tinhThanh_ID;
		this.laDaoTaoVien = laDaoTaoVien;
		this.diaChi = diaChi;
		this.avatar = avatar;
		this.soTaiKhoanNganHang = soTaiKhoanNganHang;
		this.nganHangLienKet = tenNganHang;
		this.soCMND = soCMND;
		this.noiCap = noiCap;
		this.ngayCapCMND = ngayCap;
		this.diaChiThuongTruCMND = diaChiThuongTru;
		this.queQuanCMND = queQuan;
		this.anhMatTruoc = anhMatTruoc;
		this.anhMatSau = anhMatSau;
	}



}
