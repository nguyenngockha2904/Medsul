package com.isc.entity;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "chitietdat")
public class ChiTietDat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CTD_ID")
	private int CTD_ID;
	private int DV_ID;
	private int DL_ID;
	private Date CTD_NGAYBATDAU;
	private Float CTD_DONGIA;
	private String CTD_GIOBATDAU;
	
}
