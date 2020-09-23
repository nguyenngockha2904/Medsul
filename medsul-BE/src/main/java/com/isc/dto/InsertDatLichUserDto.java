package com.isc.dto;

import java.util.Date;

import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class InsertDatLichUserDto {
	@NotBlank(message = "Tên không được bỏ trống!")
	private String DL_HOTEN;
	
	@NotBlank(message = "SDT không được bỏ trống!")
	@Length(max = 10, message ="Tối đa 10 số")
	private String DL_SDT;
	
	@NotBlank(message = "Email không được bỏ trống!")
	private String DL_EMAIL;
	
	@NotBlank(message = "Địa chỉ không được bỏ trống!")
	private String DL_DIACHI;
	@NotBlank(message = "Ngày BD không được bỏ trống!")
	private Date CTD_NGAYBATDAU;
	
	@NotBlank(message = "Giờ BD không được bỏ trống!")
	private Double CTD_GIOBATDAU;
	
	private String DL_GHICHU;
	
	@NotBlank(message = "Ngày đặt không được bỏ trống!")
	private Date DL_NGAYDAT;
	
	@NotBlank(message = "Tình Trạng không được bỏ trống!")
	private int DL_TINHTRANG;
	
	@NotBlank(message = "Tỉnh không được bỏ trống!")
	private Integer TINHT_ID;
	public InsertDatLichUserDto(String dL_HOTEN, String dL_SDT, String dL_EMAIL, String dL_DIACHI,
			Date cTD_NGAYBATDAU, Double cTD_GIOBATDAU, String dL_GHICHU, Date dL_NGAYDAT, int dL_TINHTRANG,
			Integer tINHT_ID) {
		super();
//		DV_ID = dV_ID;
		DL_HOTEN = dL_HOTEN;
		DL_SDT = dL_SDT;
		DL_EMAIL = dL_EMAIL;
		DL_DIACHI = dL_DIACHI;
		CTD_NGAYBATDAU = cTD_NGAYBATDAU;
		CTD_GIOBATDAU = cTD_GIOBATDAU;
		DL_GHICHU = dL_GHICHU;
		DL_NGAYDAT = dL_NGAYDAT;
		DL_TINHTRANG = dL_TINHTRANG;
		TINHT_ID = tINHT_ID;
	}
	
	
	
	
	
	
	
}
