package com.isc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "vidientu")
public class ViDienTu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "VI_ID")
	private int Id;
	
	@Column(name = "VI_TONGTIEN")
	private double tongTien;
	
	@Column(name = "VI_NGANGHANGLIENKET")
	private String nganHangLienKet;
	
	@Column(name = "VI_SOTAIKHOANNGANHANG")
	private String soTaiKhoanNganHang;
	
	@Column(name = "VI_TENTKNGANHANG")
	private String tenKhachHang;
	
	@Column(name = "VI_GHICHU")
	private String ghiChu;
	
	@Column(name = "DD_ID")
	private int dieuDuong_ID;
	
	@ManyToOne
	@JoinColumn(name = "DD_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DieuDuong dieuDuong;
}
