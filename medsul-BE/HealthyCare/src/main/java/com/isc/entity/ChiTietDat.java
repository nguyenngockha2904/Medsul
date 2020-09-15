package com.isc.entity;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "chitietdat")
public class ChiTietDat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CTD_ID")
	private int CTD_ID;
	private int DV_ID;
	private int DL_ID;
	private Date CTD_NGAYBATDAU;
	private Double CTD_DONGIA;
	private Time CTD_GIOBATDAU;
	
	public ChiTietDat(int cTD_ID, int dV_ID, int dL_ID, Date cTD_NGAYBATDAU, Double cTD_DONGIA, Time cTD_GIOBATDAU) {
		super();
		CTD_ID = cTD_ID;
		DV_ID = dV_ID;
		DL_ID = dL_ID;
		CTD_NGAYBATDAU = cTD_NGAYBATDAU;
		CTD_DONGIA = cTD_DONGIA;
		CTD_GIOBATDAU = cTD_GIOBATDAU;
	}
	
	
}
