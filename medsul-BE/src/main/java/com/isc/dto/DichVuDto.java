package com.isc.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.isc.entity.LoaiDichVu;

public class DichVuDto {
	
	private int DichVu_Id;
	
	private String maDichVu;
	
	private String tenDichVu;
	
	private String moTaDichVu;

	private String yeuCauCongViec;

	private String khongBaoGom;
	
	private int thoiGianUocTinh;
	
	public DichVuDto(int dichVu_Id, String maDichVu, String tenDichVu, String moTaDichVu, String yeuCauCongViec,
			String khongBaoGom, int thoiGianUocTinh) {
		super();
		DichVu_Id = dichVu_Id;
		this.maDichVu = maDichVu;
		this.tenDichVu = tenDichVu;
		this.moTaDichVu = moTaDichVu;
		this.yeuCauCongViec = yeuCauCongViec;
		this.khongBaoGom = khongBaoGom;
		this.thoiGianUocTinh = thoiGianUocTinh;
	}

	public int getDichVu_Id() {
		return DichVu_Id;
	}

	public void setDichVu_Id(int dichVu_Id) {
		DichVu_Id = dichVu_Id;
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


}
