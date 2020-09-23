package com.isc.dto;

import java.time.LocalDate;

import lombok.Data;

@Data

public class DieuDuongGetAllDto {

	private int dieuDuong_Id;

	private String maDieuDuong;

	// private String maGioiThieu;

	private String hoTen;

	private String gioiTinh;

	private LocalDate ngaySinh;

	private String soDienThoai;

	private String password;

	private String email;

	private String diaChi;

	private String avatar;

	private int laDaoTaoVien;

	private int trangThai;
	private int tinhThanh_ID;

	// vi dien tu

	// @Column(name = "VI_TONGTIEN")
	private double tongTien;

	// @Column(name = "VI_NGANGHANGLIENKET")
	private String nganHangLienKet;

	// @Column(name = "VI_SOTAIKHOANNGANHANG")
	private String soTaiKhoanNganHang;

	// @Column(name = "VI_TENTKNGANHANG")
	// private String tenKhachHang;

	// @Column(name = "VI_GHICHU")
	// private String ghiChu;

	// @Column(name = "DD_ID")
	// private int dieuDuong_ID;

	// cmnd

	private String soCMND;

	// @Column(name="CMND_HOTEN")
	// private String hoTen;

	// @Column(name="CMND_QUOCTICH")
	// private String quocTich;
//
	// @Column(name="CMND_NOICAP")
	private String noiCap;

	// @Column(name="CMND_DIACHITT")
	private String diaChiThuongTruCMND;

	// @Column(name="CMND_QUEQUAN")
	private String queQuanCMND;

	// @Column(name="CMND_NGAYCAP")
	private LocalDate ngayCapCMND;

	// @Column(name="CMND_DACDIEMNHANDANG")
	// private String DacDiemNhanDang;

	// @Column(name="CMND_ANHMATTRUOC")
	private String anhMatTruoc;

	// @Column(name="CMND_ANHMATSAU")
	private String anhMatSau;

	// private int dieuDuong_id;
}
