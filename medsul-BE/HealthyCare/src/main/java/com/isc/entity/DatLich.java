package com.isc.entity;

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
@Table(name = "datlich")
public class DatLich {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DL_ID")
	private int DL_ID;

	private int MGG_ID;

	private int USER_ID;

	private int NB_ID;

	private int DD_ID;

	private int TINH_ID;

	private Date DL_NGAYDAT;

	private Double DL_TONGTIEN;

	private String DL_SDT;

	private String DL_HOTEN;

	private String DL_EMAIL;

	private String DL_GHICHU;

	private String DL_DIACHI;

	private String DL_TINHTRANG;

	public DatLich(int dL_ID, int mGG_ID, int uSER_ID, int nB_ID, int dD_ID, int tINH_ID, Date dL_NGAYDAT,
			Double dL_TONGTIEN, String dL_SDT, String dL_HOTEN, String dL_EMAIL, String dL_GHICHU, String dL_DIACHI,
			String dL_TINHTRANG) {
		super();
		DL_ID = dL_ID;
		MGG_ID = mGG_ID;
		USER_ID = uSER_ID;
		NB_ID = nB_ID;
		DD_ID = dD_ID;
		TINH_ID = tINH_ID;
		DL_NGAYDAT = dL_NGAYDAT;
		DL_TONGTIEN = dL_TONGTIEN;
		DL_SDT = dL_SDT;
		DL_HOTEN = dL_HOTEN;
		DL_EMAIL = dL_EMAIL;
		DL_GHICHU = dL_GHICHU;
		DL_DIACHI = dL_DIACHI;
		DL_TINHTRANG = dL_TINHTRANG;
	}

}
