package com.isc.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

public class DieuDuongInsertDto {

	@NotBlank(message = "vui long nhap ho ten dieu duong")
	private String hoTen;

	@NotBlank(message = "vui long nhap gioi tinh dieu duong")
	private String gioiTinh;

	private LocalDate ngaySinh;

	@NotBlank(message = "vui long nhap sdt dieu duong")
	private String soDienThoai;

	@NotBlank(message = "vui long nhap email dieu duong")
	private String email;

	private String diaChi;

	private String avatar;

	@NotBlank(message = "vui long nhap tinh thanh dieu duong")
	private int tinhThanh_ID;

	///// --CMND--/////

	@NotBlank(message = "vui long nhap so cmnd")
	private String soCMND;

	private String noiCap;

	private String diaChiThuongTru;

	private String queQuan;

	private LocalDate ngayCap;

	private String anhMatTruoc;

	private String anhMatSau;

	public DieuDuongInsertDto() {
	}

	public DieuDuongInsertDto(@NotBlank(message = "vui long nhap ho ten dieu duong") String hoTen,
			@NotBlank(message = "vui long nhap gioi tinh dieu duong") String gioiTinh, LocalDate ngaySinh,
			@NotBlank(message = "vui long nhap sdt dieu duong") String soDienThoai,
			@NotBlank(message = "vui long nhap email dieu duong") String email, String diaChi, String avatar,
			@NotBlank(message = "vui long nhap tinh thanh dieu duong") int tinhThanh_ID,
			@NotBlank(message = "vui long nhap so cmnd") String soCMND, String noiCap, String diaChiThuongTru,
			String queQuan, LocalDate ngayCap, String anhMatTruoc, String anhMatSau) {
		super();
		this.hoTen = hoTen;
		this.gioiTinh = gioiTinh;
		this.ngaySinh = ngaySinh;
		this.soDienThoai = soDienThoai;
		this.email = email;
		this.diaChi = diaChi;
		this.avatar = avatar;
		this.tinhThanh_ID = tinhThanh_ID;
		this.soCMND = soCMND;
		this.noiCap = noiCap;
		this.diaChiThuongTru = diaChiThuongTru;
		this.queQuan = queQuan;
		this.ngayCap = ngayCap;
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

	public LocalDate getNgaySinh() {
		return ngaySinh;
	}

	public void setNgaySinh(LocalDate ngaySinh) {
		this.ngaySinh = ngaySinh;
	}

	public String getSoDienThoai() {
		return soDienThoai;
	}

	public void setSoDienThoai(String soDienThoai) {
		this.soDienThoai = soDienThoai;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public int getTinhThanh_ID() {
		return tinhThanh_ID;
	}

	public void setTinhThanh_ID(int tinhThanh_ID) {
		this.tinhThanh_ID = tinhThanh_ID;
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

	public LocalDate getNgayCap() {
		return ngayCap;
	}

	public void setNgayCap(LocalDate ngayCap) {
		this.ngayCap = ngayCap;
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
