package com.isc.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name ="magiamgia")
public class MaGiamGia {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "MGG_ID")
	private int MGG_ID;
	private int USER_ID;
	private String MGG_MA;
	private String MGG_THONGTIN;
	private String MGG_HESOGIAM;
	private int MGG_TINHTRANG;
	
	public MaGiamGia(int mGG_ID, int uSER_ID, String mGG_MA, String mGG_THONGTIN, String mGG_HESOGIAM,
			int mGG_TINHTRANG) {
		super();
		MGG_ID = mGG_ID;
		USER_ID = uSER_ID;
		MGG_MA = mGG_MA;
		MGG_THONGTIN = mGG_THONGTIN;
		MGG_HESOGIAM = mGG_HESOGIAM;
		MGG_TINHTRANG = mGG_TINHTRANG;
	}
	
}
