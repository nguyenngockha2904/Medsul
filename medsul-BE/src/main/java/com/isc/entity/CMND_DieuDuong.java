package com.isc.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "cmnd_dieuduong")
public class CMND_DieuDuong   {
	
	@Id
	@Column(name="SOCMND")
	private String soCMND;
	
	@Column(name="CMND_HOTEN")
	private String hoTen;
	
	@Column(name="CMND_QUOCTICH")
	private String quocTich;
	
	@Column(name="CMND_NOICAP")
	private String noiCap;
	
	@Column(name="CMND_DIACHITT")
	private String diaChiThuongTruCMND;
	
	@Column(name="CMND_QUEQUAN")
	private String queQuanCMND;

	@Column(name="CMND_NGAYCAP")
	private LocalDate ngayCapCMND;
	
	@Column(name="CMND_DACDIEMNHANDANG")
	private String DacDiemNhanDang;
	
	@Column(name="CMND_ANHMATTRUOC")
	private String anhMatTruoc;
	
	@Column(name="CMND_ANHMATSAU")
	private String anhMatSau;
	
	private int DD_ID;
	
	@ManyToOne()
	@JoinColumn(name = "DD_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DieuDuong dieuDuong;
}
