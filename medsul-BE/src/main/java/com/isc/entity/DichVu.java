package com.isc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "dichvu")
public class DichVu {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="DV_ID")
	private int DichVu_Id;
	
	@Column(name = "DV_MA")
	private String maDichVu;

	@Column(name = "DV_TEN")
	private String tenDichVu;

	@Column(name = "DV_MOTA")
	private String moTaDichVu;

	@Column(name = "DV_YEUCAUCV")
	private String yeuCauCongViec;

	@Column(name = "DV_KHONGBAOGOM")
	private String khongBaoGom;

	@Column(name = "DV_THOIGIANUOCTINH")
	private int thoiGianUocTinh;

	@Column(name = "LOAIDV_ID")
	private int loaiDichVuID;

	@ManyToOne()
	@JoinColumn(name = "LOAIDV_ID", insertable = false, updatable = false)
	@JsonIgnore
	private LoaiDichVu loaiDichVu;
	
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

	public int getLoaiDichVuID() {
		return loaiDichVuID;
	}

	public void setLoaiDichVuID(int loaiDichVuID) {
		this.loaiDichVuID = loaiDichVuID;
	}


	public LoaiDichVu getLoaiDichVu() {
		return loaiDichVu;
	}

	public void setLoaiDichVu(LoaiDichVu loaiDichVu) {
		this.loaiDichVu = loaiDichVu;
	}
	
}
