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
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "giayphephanhnghe")
public class GiayPhepHanhNghe {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GIAYPHEP_ID")
	private int giayPhep_Id;

	@Column(name = "DV_ID")
	private int giayPhep_DichVu_Id;

	@Column(name = "DD_ID")
	private int giayPhep_DieuDuong_Id;

	@Column(name = "DD_DAOTAOVIEN_ID")
	private int giayPhep_DaoTaoVien_Id;

	@Column(name = "GIAYPHEP_THONGTIN")
	private String giayPhep_ThongTin;

	@Column(name = "GIAYPHEP_XEPLOAI")
	private String giayPhep_XepLoai;

	@Column(name = "GIAYPHEP_TRANGTHAI")
	private int giayPhep_TrangThai;

	@Column(name = "GIAYPHEP_GHICHU")
	private String giayPhep_GhiChu;

	@ManyToOne()
	@JoinColumn(name = "DV_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DichVu dichVu;

	@ManyToOne()
	@JoinColumn(name = "DD_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DieuDuong dieuDuong;

	@ManyToOne()
	@JoinColumn(name = "DD_DAOTAOVIEN_ID", insertable = false, updatable = false)
	@JsonIgnore
	private DieuDuong daoTaoVien;

	public GiayPhepHanhNghe(int giayPhep_DichVu_Id, int giayPhep_DieuDuong_Id, int giayPhep_DaoTaoVien_Id,
			String giayPhep_ThongTin, String giayPhep_XepLoai, int giayPhep_TrangThai, String giayPhep_GhiChu,
			DichVu dichVu, DieuDuong dieuDuong, DieuDuong daoTaoVien) {
		super();
		this.giayPhep_DichVu_Id = giayPhep_DichVu_Id;
		this.giayPhep_DieuDuong_Id = giayPhep_DieuDuong_Id;
		this.giayPhep_DaoTaoVien_Id = giayPhep_DaoTaoVien_Id;
		this.giayPhep_ThongTin = giayPhep_ThongTin;
		this.giayPhep_XepLoai = giayPhep_XepLoai;
		this.giayPhep_TrangThai = giayPhep_TrangThai;
		this.giayPhep_GhiChu = giayPhep_GhiChu;
		this.dichVu = dichVu;
		this.dieuDuong = dieuDuong;
		this.daoTaoVien = daoTaoVien;
	}

	/*
	 * @OneToMany(mappedBy = "giayphephanhnghe", fetch = FetchType.LAZY, cascade =
	 * CascadeType.ALL) private List<DieuDuong> dieuDuong_Id;
	 */

}
