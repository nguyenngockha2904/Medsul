package com.isc.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import lombok.Data;
@Data
public class DieuDuongInsertDto {

	@NotBlank(message = "vui long nhap ho ten dieu duong")
	private String hoTen;

	@NotBlank(message = "vui long nhap gioi tinh dieu duong")
	private String gioiTinh;

	private LocalDate ngaySinh;

	@NotBlank(message = "vui long nhap sdt dieu duong")
	private String soDienThoai;

	@NotBlank(message = "vui long nhap email dieu duong")
	private String email;

	private String diaChi;

	private String avatar;

	@NotBlank(message = "vui long nhap tinh thanh dieu duong")
	private int tinhThanh_ID;

	///// --CMND--/////

	@NotBlank(message = "vui long nhap so cmnd")
	private String soCMND;

	private String noiCap;

	private String diaChiThuongTruCMND;

	private String queQuanCMND;

	private LocalDate ngayCapCMND;

	private String anhMatTruoc;

	private String anhMatSau;

	public DieuDuongInsertDto() {
	}

	public DieuDuongInsertDto(@NotBlank(message = "vui long nhap ho ten dieu duong") String hoTen,
			@NotBlank(message = "vui long nhap gioi tinh dieu duong") String gioiTinh, LocalDate ngaySinh,
			@NotBlank(message = "vui long nhap sdt dieu duong") String soDienThoai,
			@NotBlank(message = "vui long nhap email dieu duong") String email, String diaChi, String avatar,
			@NotBlank(message = "vui long nhap tinh thanh dieu duong") int tinhThanh_ID,
			@NotBlank(message = "vui long nhap so cmnd") String soCMND, String noiCap, String diaChiThuongTru,
			String queQuan, LocalDate ngayCap, String anhMatTruoc, String anhMatSau) {
		super();
		this.hoTen = hoTen;
		this.gioiTinh = gioiTinh;
		this.ngaySinh = ngaySinh;
		this.soDienThoai = soDienThoai;
		this.email = email;
		this.diaChi = diaChi;
		this.avatar = avatar;
		this.tinhThanh_ID = tinhThanh_ID;
		this.soCMND = soCMND;
		this.noiCap = noiCap;
		this.diaChiThuongTruCMND = diaChiThuongTru;
		this.queQuanCMND = queQuan;
		this.ngayCapCMND = ngayCap;
		this.anhMatTruoc = anhMatTruoc;
		this.anhMatSau = anhMatSau;
	}


}
