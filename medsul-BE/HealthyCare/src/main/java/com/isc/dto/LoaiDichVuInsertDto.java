package com.isc.dto;

import javax.validation.constraints.NotBlank;

public class LoaiDichVuInsertDto {

	@NotBlank(message = "vui long nhap ma loai dich vu")
	private String maLoaiDichVu;

	@NotBlank(message = "vui long nhap ten loai dich vu")
	private String tenLoaiDichVu;

	private int tinhTrangLoaiDichVu;

	public LoaiDichVuInsertDto() {
	}

	public LoaiDichVuInsertDto(String maLoaiDichVu, String tenLoaiDichVu, int tinhTrangLoaiDichVu) {
		super();
		this.maLoaiDichVu = maLoaiDichVu;
		this.tenLoaiDichVu = tenLoaiDichVu;
		this.tinhTrangLoaiDichVu = tinhTrangLoaiDichVu;
	}

	public int getTinhTrangLoaiDichVu() {
		return tinhTrangLoaiDichVu;
	}

	public void setTinhTrangLoaiDichVu(int tinhTrangLoaiDichVu) {
		this.tinhTrangLoaiDichVu = tinhTrangLoaiDichVu;
	}

	public String getMaLoaiDichVu() {
		return maLoaiDichVu;
	}

	public void setMaLoaiDichVu(String maLoaiDichVu) {
		this.maLoaiDichVu = maLoaiDichVu;
	}

	public String getTenLoaiDichVu() {
		return tenLoaiDichVu;
	}

	public void setTenLoaiDichVu(String tenLoaiDichVu) {
		this.tenLoaiDichVu = tenLoaiDichVu;
	}

}
