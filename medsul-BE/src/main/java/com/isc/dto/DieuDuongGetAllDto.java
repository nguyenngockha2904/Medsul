package com.isc.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class DieuDuongGetAllDto {

	
	//--Dieu Duong--//
	private int dieuDuong_Id;

	private String maDieuDuong;

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
	
	
	
	//--Tinh Thanh--//
	private int tinhThanh_Id;
	
	
	
	//--Vi Dien Tu--//
	private double tongTien;
	
	private String nganHangLienKet;
	
	private String soTaiKhoanNganHang;
	
	
	
	//--CMND--//
	private String soCMND;
	
	private String noiCap;
	
	private String diaChiThuongTruCMND;
	
	private String queQuanCMND;
	
	private LocalDate ngayCapCMND;
	
	private String anhMatTruoc;
	
	private String anhMatSau;
	
	
	public DieuDuongGetAllDto() {
		
	}


	public DieuDuongGetAllDto(int dieuDuong_Id, String maDieuDuong, String hoTen, String gioiTinh, LocalDate ngaySinh,
			String soDienThoai, String password, String email, String diaChi, String avatar, int laDaoTaoVien,
			int trangThai, int tinhThanh_Id, double tongTien, String nganHangLienKet, String soTaiKhoanNganHang,
			String soCMND, String noiCap, String diaChiThuongTruCMND, String queQuanCMND, LocalDate ngayCapCMND,
			String anhMatTruoc, String anhMatSau) {
		super();
		this.dieuDuong_Id = dieuDuong_Id;
		this.maDieuDuong = maDieuDuong;
		this.hoTen = hoTen;
		this.gioiTinh = gioiTinh;
		this.ngaySinh = ngaySinh;
		this.soDienThoai = soDienThoai;
		this.password = password;
		this.email = email;
		this.diaChi = diaChi;
		this.avatar = avatar;
		this.laDaoTaoVien = laDaoTaoVien;
		this.trangThai = trangThai;
		this.tinhThanh_Id = tinhThanh_Id;
		this.tongTien = tongTien;
		this.nganHangLienKet = nganHangLienKet;
		this.soTaiKhoanNganHang = soTaiKhoanNganHang;
		this.soCMND = soCMND;
		this.noiCap = noiCap;
		this.diaChiThuongTruCMND = diaChiThuongTruCMND;
		this.queQuanCMND = queQuanCMND;
		this.ngayCapCMND = ngayCapCMND;
		this.anhMatTruoc = anhMatTruoc;
		this.anhMatSau = anhMatSau;
	}
	
	
}
