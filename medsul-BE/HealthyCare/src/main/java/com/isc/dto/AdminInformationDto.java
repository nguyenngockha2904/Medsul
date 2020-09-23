package com.isc.dto;

import java.util.Date;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Data;
@JsonPropertyOrder({"ADMIN_USERNAME","ADMIN_EMAIL","ADMIN_GIOITINH","ADMIN_DIACHI","ADMIN_NGAYSINH","ADMIN_HOTEN","ADMIN_CMND","ADMIN_SDT","ADMIN_PASSWORD"})
public class AdminInformationDto {
	private String ADMIN_HOTEN;
	private String ADMIN_SDT;
	private String ADMIN_CMND;
	private Date ADMIN_NGAYSINH;
	private String ADMIN_GIOITINH;
	private String ADMIN_USERNAME;
	private String ADMIN_PASSWORD;
	private String ADMIN_EMAIL;
	private String ADMIN_DIACHI;
	
	
	public AdminInformationDto(String aDMIN_HOTEN, String aDMIN_SDT, String aDMIN_CMND, Date aDMIN_NGAYSINH,
			String aDMIN_GIOITINH, String aDMIN_USERNAME, String aDMIN_PASSWORD, String aDMIN_EMAIL,
			String aDMIN_DIACHI) {
		super();
		ADMIN_HOTEN = aDMIN_HOTEN;
		ADMIN_SDT = aDMIN_SDT;
		ADMIN_CMND = aDMIN_CMND;
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
		ADMIN_GIOITINH = aDMIN_GIOITINH;
		ADMIN_USERNAME = aDMIN_USERNAME;
		ADMIN_PASSWORD = aDMIN_PASSWORD;
		ADMIN_EMAIL = aDMIN_EMAIL;
		ADMIN_DIACHI = aDMIN_DIACHI;
	}


	public String getADMIN_HOTEN() {
		return ADMIN_HOTEN;
	}


	public void setADMIN_HOTEN(String aDMIN_HOTEN) {
		ADMIN_HOTEN = aDMIN_HOTEN;
	}


	public String getADMIN_SDT() {
		return ADMIN_SDT;
	}


	public void setADMIN_SDT(String aDMIN_SDT) {
		ADMIN_SDT = aDMIN_SDT;
	}


	public String getADMIN_CMND() {
		return ADMIN_CMND;
	}


	public void setADMIN_CMND(String aDMIN_CMND) {
		ADMIN_CMND = aDMIN_CMND;
	}


	public Date getADMIN_NGAYSINH() {
		return ADMIN_NGAYSINH;
	}


	public void setADMIN_NGAYSINH(Date aDMIN_NGAYSINH) {
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
	}


	public String getADMIN_GIOITINH() {
		return ADMIN_GIOITINH;
	}


	public void setADMIN_GIOITINH(String aDMIN_GIOITINH) {
		ADMIN_GIOITINH = aDMIN_GIOITINH;
	}


	public String getADMIN_USERNAME() {
		return ADMIN_USERNAME;
	}


	public void setADMIN_USERNAME(String aDMIN_USERNAME) {
		ADMIN_USERNAME = aDMIN_USERNAME;
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
