package com.isc.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Builder;
import lombok.Data;

@Data
@Entity
@Builder
@Table(name ="admin")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name ="ADMIN_ID")
	private int ADMIN_ID;
	
	private String ADMIN_HOTEN;
	
	private String ADMIN_EMAIL;
	
	private String ADMIN_GIOITINH;
	
	private String ADMIN_USERNAME;
	
	private String ADMIN_PASSWORD;
	
	@Lob
	private String ADMIN_DIACHI;
	
	private String ADMIN_CMND;
	
	private Date ADMIN_CMNDNGAYCAP;

	private String ADMIN_CMNDNOICAP;
	
	private String ADMIN_CMNDMATTRUOC;
	
	private String ADMIN_CMNDMATSAU;
	
	private String ADMIN_AVATAR;
	
	private String ADMIN_TINHTRANG;
	
	private String ADMIN_SDT;
	
	private String ADMIN_CHUCVU;
	
	private Date ADMIN_NGAYSINH;
	public Admin() {
		
	}

	public Admin(int aDMIN_ID, String aDMIN_HOTEN, String aDMIN_EMAIL, String aDMIN_GIOITINH,
			String aDMIN_USERNAME, String aDMIN_PASSWORD, String aDMIN_DIACHI, String aDMIN_CMND,
			Date aDMIN_CMNDNGAYCAP, String aDMIN_CMNDNOICAP, String aDMIN_CMNDMATTRUOC, String aDMIN_CMNDMATSAU,
			String aDMIN_AVATAR, String aDMIN_TINHTRANG, String aDMIN_SDT, String aDMIN_CHUCVU,Date aDMIN_NGAYSINH) {
		super();
		ADMIN_ID = aDMIN_ID;
		ADMIN_HOTEN = aDMIN_HOTEN;
		ADMIN_EMAIL = aDMIN_EMAIL;
		ADMIN_GIOITINH = aDMIN_GIOITINH;
		ADMIN_USERNAME = aDMIN_USERNAME;
		ADMIN_PASSWORD = aDMIN_PASSWORD;
		ADMIN_DIACHI = aDMIN_DIACHI;
		ADMIN_CMND = aDMIN_CMND;
		ADMIN_CMNDNGAYCAP = aDMIN_CMNDNGAYCAP;
		ADMIN_CMNDNOICAP = aDMIN_CMNDNOICAP;
		ADMIN_CMNDMATTRUOC = aDMIN_CMNDMATTRUOC;
		ADMIN_CMNDMATSAU = aDMIN_CMNDMATSAU;
		ADMIN_AVATAR = aDMIN_AVATAR;
		ADMIN_TINHTRANG = aDMIN_TINHTRANG;
		ADMIN_SDT = aDMIN_SDT;
		ADMIN_CHUCVU = aDMIN_CHUCVU;
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
	}

	public Admin(String aDMIN_EMAIL, String aDMIN_PASSWORD, String aDMIN_DIACHI, String aDMIN_SDT,
			Date aDMIN_NGAYSINH) {
		super();
		ADMIN_EMAIL = aDMIN_EMAIL;
		ADMIN_PASSWORD = aDMIN_PASSWORD;
		ADMIN_DIACHI = aDMIN_DIACHI;
		ADMIN_SDT = aDMIN_SDT;
		ADMIN_NGAYSINH = aDMIN_NGAYSINH;
	}
	
	
}
