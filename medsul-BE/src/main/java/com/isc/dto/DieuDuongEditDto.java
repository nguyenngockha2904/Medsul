package com.isc.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

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

	private String tenNganHang;

	///// --CMND--/////
	@NotBlank(message = "vui long nhap so cmnd")
	private String soCMND;

	private String noiCap;

	private LocalDate ngayCap;

	private String diaChiThuongTru;

	private String queQuan;

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
		this.tenNganHang = tenNganHang;
		this.soCMND = soCMND;
		this.noiCap = noiCap;
		this.ngayCap = ngayCap;
		this.diaChiThuongTru = diaChiThuongTru;
		this.queQuan = queQuan;
		this.anhMatTruoc = anhMatTruoc;
		this.anhMatSau = anhMatSau;
	}

	public String getHoTen() {
		return hoTen;
	}

	public void setHoTen(String hoTen) {
		this.hoTen = hoTen;
	}

	public String getGioiTinh() {
		return gioiTinh;
	}

	public void setGioiTinh(String gioiTinh) {
		this.gioiTinh = gioiTinh;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getNgaySinh() {
		return ngaySinh;
	}

	public void setNgaySinh(LocalDate ngaySinh) {
		this.ngaySinh = ngaySinh;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getTrangThai() {
		return trangThai;
	}

	public void setTrangThai(int trangThai) {
		this.trangThai = trangThai;
	}

	public int getTinhThanh_ID() {
		return tinhThanh_ID;
	}

	public void setTinhThanh_ID(int tinhThanh_ID) {
		this.tinhThanh_ID = tinhThanh_ID;
	}

	public int getLaDaoTaoVien() {
		return laDaoTaoVien;
	}

	public void setLaDaoTaoVien(int laDaoTaoVien) {
		this.laDaoTaoVien = laDaoTaoVien;
	}

	public String getDiaChi() {
		return diaChi;
	}

	public void setDiaChi(String diaChi) {
		this.diaChi = diaChi;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getSoTaiKhoanNganHang() {
		return soTaiKhoanNganHang;
	}

	public void setSoTaiKhoanNganHang(String soTaiKhoanNganHang) {
		this.soTaiKhoanNganHang = soTaiKhoanNganHang;
	}

	public String getTenNganHang() {
		return tenNganHang;
	}

	public void setTenNganHang(String tenNganHang) {
		this.tenNganHang = tenNganHang;
	}

	public String getSoCMND() {
		return soCMND;
	}

	public void setSoCMND(String soCMND) {
		this.soCMND = soCMND;
	}

	public String getNoiCap() {
		return noiCap;
	}

	public void setNoiCap(String noiCap) {
		this.noiCap = noiCap;
	}

	public LocalDate getNgayCap() {
		return ngayCap;
	}

	public void setNgayCap(LocalDate ngayCap) {
		this.ngayCap = ngayCap;
	}

	public String getDiaChiThuongTru() {
		return diaChiThuongTru;
	}

	public void setDiaChiThuongTru(String diaChiThuongTru) {
		this.diaChiThuongTru = diaChiThuongTru;
	}

	public String getQueQuan() {
		return queQuan;
	}

	public void setQueQuan(String queQuan) {
		this.queQuan = queQuan;
	}

	public String getAnhMatTruoc() {
		return anhMatTruoc;
	}

	public void setAnhMatTruoc(String anhMatTruoc) {
		this.anhMatTruoc = anhMatTruoc;
	}

	public String getAnhMatSau() {
		return anhMatSau;
	}

	public void setAnhMatSau(String anhMatSau) {
		this.anhMatSau = anhMatSau;
	}

}
