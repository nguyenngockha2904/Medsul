package com.isc.dto;

import java.util.Date;

public class UpdateAdminInformationDto {
	private String ADMIN_SDT;
	private Date ADMIN_NGAYSINH;
	private String ADMIN_PASSWORD;
	private String ADMIN_EMAIL;
	private String ADMIN_DIACHI;

	public UpdateAdminInformationDto(String aDMIN_SDT, Date aDMIN_NGAYSINH, String aDMIN_PASSWORD, String aDMIN_EMAIL,
			String aDMIN_DIACHI) {
		super();
		ADMIN_SDT = aDMIN_SDT;
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
		ADMIN_PASSWORD = aDMIN_PASSWORD;
		ADMIN_EMAIL = aDMIN_EMAIL;
		ADMIN_DIACHI = aDMIN_DIACHI;
	}

	public String getADMIN_SDT() {
		return ADMIN_SDT;
	}

	public void setADMIN_SDT(String aDMIN_SDT) {
		ADMIN_SDT = aDMIN_SDT;
	}

	public Date getADMIN_NGAYSINH() {
		return ADMIN_NGAYSINH;
	}

	public void setADMIN_NGAYSINH(Date aDMIN_NGAYSINH) {
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
	}

	public String getADMIN_PASSWORD() {
		return ADMIN_PASSWORD;
	}

	public void setADMIN_PASSWORD(String aDMIN_PASSWORD) {
		ADMIN_PASSWORD = aDMIN_PASSWORD;
	}

	public String getADMIN_EMAIL() {
		return ADMIN_EMAIL;
	}

	public void setADMIN_EMAIL(String aDMIN_EMAIL) {
		ADMIN_EMAIL = aDMIN_EMAIL;
	}

	public String getADMIN_DIACHI() {
		return ADMIN_DIACHI;
	}

	public void setADMIN_DIACHI(String aDMIN_DIACHI) {
		ADMIN_DIACHI = aDMIN_DIACHI;
	}
}
