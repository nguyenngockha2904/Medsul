package com.isc.entity;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "chuyennganh")
public class ChuyenNganh{
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CN_ID")
	private int CN_ID;
	
	public ChuyenNganh(String maChuyenNganh, String tenChuyenNganh) {
		super();
		this.maChuyenNganh = maChuyenNganh;
		this.tenChuyenNganh = tenChuyenNganh;
	}

	@Column(name = "CN_MA")
	private String maChuyenNganh;
	
	@Column(name = "CN_TENCN")
	private String tenChuyenNganh;
	
	@OneToMany(mappedBy = "chuyenNganh", fetch = FetchType.LAZY)
	
	private List<DichVu> dichVu;

	public ChuyenNganh() {}
	
	public int getCN_ID() {
		return CN_ID;
	}

	public void setCN_ID(int cN_ID) {
		CN_ID = cN_ID;
	}
	
	public String getMaChuyenNganh() {
		return maChuyenNganh;
	}

	public void setMaChuyenNganh(String maChuyenNganh) {
		this.maChuyenNganh = maChuyenNganh;
	}

	public String getTenChuyenNganh() {
		return tenChuyenNganh;
	}

	public void setTenChuyenNganh(String tenChuyenNganh) {
		this.tenChuyenNganh = tenChuyenNganh;
	}


	
}
