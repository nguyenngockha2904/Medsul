package com.isc.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int USER_ID;
	private int TINHT_ID;
	private String USER_EMAIL;
	private String USER_HOTEN;
	private String USER_SDT;
	private String USER_PASSWORD;
	private String USER_MAGIOITHIEU;
	private String USER_GIOITINH;
	private String USER_DIACHI;
	private Date USER_NGAYSINH;
	private String USER_AVARTAR;
	private int USER_TINHTRANG;
	public User(int uSER_ID, int tINHT_ID, String uSER_EMAIL, String uSER_HOTEN, String uSER_SDT, String uSER_PASSWORD,
			String uSER_MAGIOITHIEU, String uSER_GIOITINH, String uSER_DIACHI, Date uSER_NGAYSINH, String uSER_AVARTAR,
			int uSER_TINHTRANG) {
		super();
		USER_ID = uSER_ID;
		TINHT_ID = tINHT_ID;
		USER_EMAIL = uSER_EMAIL;
		USER_HOTEN = uSER_HOTEN;
		USER_SDT = uSER_SDT;
		USER_PASSWORD = uSER_PASSWORD;
		USER_MAGIOITHIEU = uSER_MAGIOITHIEU;
		USER_GIOITINH = uSER_GIOITINH;
		USER_DIACHI = uSER_DIACHI;
		USER_NGAYSINH = uSER_NGAYSINH;
		USER_AVARTAR = uSER_AVARTAR;
		USER_TINHTRANG = uSER_TINHTRANG;
	}
	
	
}
