package com.isc.dto;

public class DichVuEditDto {

	private String maDichVu;
	private String tenDichVu;
	private String moTaDichVu;
	private String yeuCauCongViec;
	private String khongBaoGom;
	private int thoiGianUocTinh;
	private int loaiDichVuID;

	public DichVuEditDto() {
	}

	public DichVuEditDto(String maDichVu, String tenDichVu, String moTaDichVu, String yeuCauCongViec,
			String khongBaoGom, int thoiGianUocTinh, int loaiDichVuID) {
		super();
		this.maDichVu = maDichVu;
		this.tenDichVu = tenDichVu;
		this.moTaDichVu = moTaDichVu;
		this.yeuCauCongViec = yeuCauCongViec;
		this.khongBaoGom = khongBaoGom;
		this.thoiGianUocTinh = thoiGianUocTinh;
		this.loaiDichVuID = loaiDichVuID;
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

	
}
