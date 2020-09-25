package com.isc.dto;

import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import lombok.Data;

@Data
public class DatLichDto {
	private String DL_HOTEN;
	private Date DL_NGAYDAT;
	private String CTD_GIOBATDAU;
	private int DL_TINHTRANG;
	private int DichVu_Id;
	private String DL_SDT;
	private String DL_EMAIL;
	private String DL_DIACHI;
	private String tenTinhThanh;
	private String MGG_HESOGIAM;
	private Float CTD_DONGIA;
	private Date CTD_NGAYBATDAU;
	private String DL_GHICHU;
	private Double DL_TONGTIEN;
	public DatLichDto() {
		
	}
	public DatLichDto(String dL_HOTEN, Date dL_NGAYDAT, String cTD_GIOBATDAU, int dL_TINHTRANG, int dichVu_Id,
			String dL_SDT, String dL_EMAIL, String dL_DIACHI, Double dL_TONGTIEN, String tenTinhThanh, String mGG_HESOGIAM,
			Float cTD_DONGIA, Date cTD_NGAYBATDAU, String dL_GHICHU) {
		super();
		DL_HOTEN = dL_HOTEN;
		DL_NGAYDAT = dL_NGAYDAT;
		CTD_GIOBATDAU = cTD_GIOBATDAU;
		DL_TINHTRANG = dL_TINHTRANG;
		DichVu_Id = dichVu_Id;
		DL_SDT = dL_SDT;
		DL_EMAIL = dL_EMAIL;
		DL_DIACHI = dL_DIACHI;
		this.tenTinhThanh = tenTinhThanh;
		MGG_HESOGIAM = mGG_HESOGIAM;
		CTD_DONGIA = cTD_DONGIA;
		CTD_NGAYBATDAU = cTD_NGAYBATDAU;
		DL_GHICHU = dL_GHICHU;
		DL_TONGTIEN = dL_TONGTIEN;

	}
	

	
	

	

	
	
}
