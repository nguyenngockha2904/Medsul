package com.isc.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "dieuduong")
public class DieuDuong  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="DD_ID")
	private int dieuDuong_Id;

	@Column(name="DD_MA")
	private String maDieuDuong;

	@Column(name="DD_MAGIOITHIEU")
	private String maGioiThieu;
	
	@Column(name="DD_HOTEN")
	private String hoTen;
	
	@Column(name="DD_GIOITINH")
	private String gioiTinh;
	
	@Column(name="DD_NGAYSINH")
	private LocalDate ngaySinh;
	
	@Column(name="DD_SDT")
	private String soDienThoai;
	
	@Column(name="DD_PASSWORD")
	private String password;
	
	@Column(name="DD_EMAIL")
	private String email;
	
	@Column(name="DD_DIACHI")
	private String diaChi;
	
	@Column(name="DD_AVARTAR")
	private String avatar;
	
	@Column(name="DD_LADAOTAOVIEN")
	private int laDaoTaoVien;
	
	@Column(name="DD_TRANGTHAI")
	private int trangThai;
	
	@Column(name = "TINHT_ID")
	private int tinhThanh_ID;

	@ManyToOne()
	@JoinColumn(name = "TINHT_ID", insertable = false, updatable = false)
	@JsonIgnore
	private TinhThanh tinhThanh;
	
	/*@OneToMany(mappedBy = "dieuDuong", fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
	private List<ChungChi> chungChi;*/
	
	@OneToMany(mappedBy = "dieuDuong", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<CMND_DieuDuong> dmnd_dieuDuong;
	
	@OneToMany(mappedBy = "dieuDuong", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<ViDienTu> viDienTu;
}
