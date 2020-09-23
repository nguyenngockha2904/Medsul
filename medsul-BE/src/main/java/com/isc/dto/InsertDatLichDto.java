package com.isc.dto;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "datlich")
@SecondaryTable(name = "chitietdat", pkJoinColumns = @PrimaryKeyJoinColumn(name = "DL_ID"))
public class InsertDatLichDto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DL_ID")
	private int DL_ID;

	@Column(nullable = true, updatable = true, insertable = true, name = "MGG_ID", table = "datlich")
	private Integer MGG_ID;

	@Column(name = "USER_ID")
	private Integer USER_ID;

	@Column(name = "NB_ID")
	private Integer NB_ID;

	@Column(nullable = true, name = "DD_ID")
	private Integer DD_ID;

	@Column(name = "TINHT_ID")
	private int TINHT_ID;

	@Column(name = "DL_NGAYDAT")
	private Date DL_NGAYDAT;

	@Column(name = "DL_TONGTIEN")
	private Double DL_TONGTIEN;

	@Column(name = "DL_SDT")
	private String DL_SDT;

	@Column(name = "DL_HOTEN")
	private String DL_HOTEN;

	@Column(name = "DL_EMAIL")
	private String DL_EMAIL;

	@Column(name = "DL_GHICHU")
	private String DL_GHICHU;

	@Column(name = "DL_DIACHI")
	private String DL_DIACHI;

	@Column(name = "DL_TINHTRANG")
	private String DL_TINHTRANG;	

	@Column(name = "CTD_NGAYBATDAU", table = "chitietdat")
	private Date CTD_NGAYBATDAU;

	@Column(name = "CTD_DONGIA", table = "chitietdat")
	private Double CTD_DONGIA;

	@Column(name = "CTD_GIOBATDAU", table = "chitietdat")
	private Double CTD_GIOBATDAU;
}
