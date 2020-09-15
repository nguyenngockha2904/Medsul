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

@Data
@Entity
@Table(name = "tinhthanh")
public class TinhThanh {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "TINHT_ID")
	private int tinhThanh_Id;

	@Column(name = "TINHT_MATINHTHANH")
	private String maTinhThanh;

	@Column(name = "TINHT_TENTINH")
	private String tenTinhThanh;

	@Column(name = "TINHT_HESOGIAMDD")
	private String heSoTinhThanhDieuDuong;

	@Column(name = "TINHT_HESOGIAMUSER")
	private String heSoTinhThanhUser;
	
//	@OneToMany(mappedBy = "tinhThanh", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//	private List<DieuDuong> dieuDuong;
	
}
