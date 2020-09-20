package com.isc.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "chungchi")
public class ChungChi {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="CNGANH_ID")
	private int chungChi_Id;
	
	@Column(name="CNGANH_TENCN")
	private String tenchungChi;
	
	@Column(name = "CNGANH_LOAI")
	private String loaichungChi;
	
	@Column(name="CNGANH_NGAYTOTNGHIEP")
	private LocalDate ngayTotNghiep;
	
	@Column(name="CNGANH_SOHIEU")
	private String soHieu;
	
	@Column(name="CNGANH_ANHMATTRUOC")
	private String anhMatTruoc;
	
	@Column(name="CNGANH_ANHMATSAU")
	private String anhMatSau;
	
	@Column(name="CNGANH_GHICHU")
	private String ghiChu;
	
	@Column(name = "DD_ID")
	private int dieuDuong_ID;

	@ManyToOne()
	@JoinColumn(name = "DD_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DieuDuong dieuDuong;
}
