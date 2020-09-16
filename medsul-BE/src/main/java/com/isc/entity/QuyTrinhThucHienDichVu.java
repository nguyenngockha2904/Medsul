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

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
//@EqualsAndHashCode(exclude = {"quytrinh_id"})
@Table(name = "quytrinhthuchiendichvu")
public class QuyTrinhThucHienDichVu  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "QUYTRINH_ID")
	private int quyTrinh_Id;

	@Column(name = "QUYTRINH_THUTU")
	private String quyTrinh_ThuTu;

	@Column(name = "QUYTRINH_MOTA")
	private String quyTrinh_MoTa;
	
	@Column(name = "DV_ID")
	private int dichVuID;
	
	@ManyToOne
	@JoinColumn(name = "DV_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DichVu dichVu;

	public QuyTrinhThucHienDichVu(String quyTrinh_ThuTu, String quyTrinh_MoTa, DichVu dichVu) {
		super();
		this.quyTrinh_ThuTu = quyTrinh_ThuTu;
		this.quyTrinh_MoTa = quyTrinh_MoTa;
		this.dichVu = dichVu;
	}
	
}
