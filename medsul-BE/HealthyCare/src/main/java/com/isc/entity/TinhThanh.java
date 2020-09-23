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
	private Double heSoTinhThanhDieuDuong;

	@Column(name = "TINHT_HESOGIAMUSER")
	private Double heSoTinhThanhUser;
//
//	@OneToMany(mappedBy = "tinhThanh",cascade = CascadeType.ALL)
//	List<DatLich> datLich;
	
	public TinhThanh() {
		
	}
	
	public TinhThanh(int tinhThanh_Id, String maTinhThanh, String tenTinhThanh, Double heSoTinhThanhDieuDuong,
			Double heSoTinhThanhUser) {
		super();
		this.tinhThanh_Id = tinhThanh_Id;
		this.maTinhThanh = maTinhThanh;
		this.tenTinhThanh = tenTinhThanh;
		this.heSoTinhThanhDieuDuong = heSoTinhThanhDieuDuong;
		this.heSoTinhThanhUser = heSoTinhThanhUser;
	}
	
}
