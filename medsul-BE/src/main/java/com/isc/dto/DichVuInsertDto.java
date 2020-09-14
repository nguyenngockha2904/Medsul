package com.isc.dto;

import javax.validation.constraints.NotBlank;

public class DichVuInsertDto {

	@NotBlank(message = "vui long nhap ma dich vu")
	private String maDichVu;

	@NotBlank(message = "vui long nhap ten dich vu")
	private String tenDichVu;

	private String moTaDichVu;

	private String yeuCauCongViec;

	private String khongBaoGom;

	private int thoiGianUocTinh;

	@NotBlank(message = "vui long nhap gia dich vu")
	private float giaDichVu;

	@NotBlank(message = "vui long nhap tinh trang dich vu")
	private int tinhTrangDichVu;

	@NotBlank(message = "vui long nhap id loai dich vu")
	private int loaiDichVuID;

	public DichVuInsertDto() {
	}

	public DichVuInsertDto(String maDichVu, String tenDichVu, String moTaDichVu, String yeuCauCongViec,
			String khongBaoGom, int thoiGianUocTinh, int tinhTrangDichVu, float giaDichVu, int loaiDichVuID) {
		super();
		this.maDichVu = maDichVu;
		this.tenDichVu = tenDichVu;
		this.moTaDichVu = moTaDichVu;
		this.yeuCauCongViec = yeuCauCongViec;
		this.khongBaoGom = khongBaoGom;
		this.thoiGianUocTinh = thoiGianUocTinh;
		this.loaiDichVuID = loaiDichVuID;
		this.tinhTrangDichVu = tinhTrangDichVu;
		this.giaDichVu = giaDichVu;
	}

	public float getGiaDichVu() {
		return giaDichVu;
	}

	public void setGiaDichVu(float giaDichVu) {
		this.giaDichVu = giaDichVu;
	}

	public String getMaDichVu() {
		return maDichVu;
	}

	public void setMaDichVu(String maDichVu) {
		this.maDichVu = maDichVu;
	}

	public String getTenDichVu() {
		return tenDichVu;
	}

	public void setTenDichVu(String tenDichVu) {
		this.tenDichVu = tenDichVu;
	}

	public String getMoTaDichVu() {
		return moTaDichVu;
	}

	public void setMoTaDichVu(String moTaDichVu) {
		this.moTaDichVu = moTaDichVu;
	}

	public String getYeuCauCongViec() {
		return yeuCauCongViec;
	}

	public void setYeuCauCongViec(String yeuCauCongViec) {
		this.yeuCauCongViec = yeuCauCongViec;
	}

	public String getKhongBaoGom() {
		return khongBaoGom;
	}

	public void setKhongBaoGom(String khongBaoGom) {
		this.khongBaoGom = khongBaoGom;
	}

	public int getThoiGianUocTinh() {
		return thoiGianUocTinh;
	}

	public void setThoiGianUocTinh(int thoiGianUocTinh) {
		this.thoiGianUocTinh = thoiGianUocTinh;
	}

	public int getLoaiDichVuID() {
		return loaiDichVuID;
	}

	public void setLoaiDichVuID(int loaiDichVuID) {
		this.loaiDichVuID = loaiDichVuID;
	}

	public int getTinhTrangDichVu() {
		return tinhTrangDichVu;
	}

	public void setTinhTrangDichVu(int tinhTrangDichVu) {
		this.tinhTrangDichVu = tinhTrangDichVu;
	}

}
