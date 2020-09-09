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

import jdk.jfr.DataAmount;
import lombok.Data;

@Data
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
	
}
