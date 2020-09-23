package com.isc.dto;

import javax.validation.constraints.NotBlank;

public class LoaiDichVuEditDto {
	
	@NotBlank(message = "vui long nhap ma loai dich vu")
	private String maLoaiDichVu;
	
	@NotBlank(message = "vui long nhap ten loai dich vu")
	private String tenLoaiDichVu;
	
	@NotBlank(message = "vui long nhap tinh trang loai dich vu")
	private int tinhTrangLoaiDichVu;

	public LoaiDichVuEditDto() {
	}

	public LoaiDichVuEditDto(String maLoaiDichVu, String tenLoaiDichVu, int tinhTrangLoaiDichVu) {
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
