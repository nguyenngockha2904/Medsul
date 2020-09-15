package com.isc.dto;

import javax.persistence.Column;

import lombok.Data;

@Data
public class AddTinhThanhDto {
	
	private String maTinhThanh;

	
	private String tenTinhThanh;


	private String heSoTinhThanhDieuDuong;

	
	private String heSoTinhThanhUser;


	public AddTinhThanhDto(String maTinhThanh, String tenTinhThanh, String heSoTinhThanhDieuDuong,
			String heSoTinhThanhUser) {
		super();
		this.maTinhThanh = maTinhThanh;
		this.tenTinhThanh = tenTinhThanh;
		this.heSoTinhThanhDieuDuong = heSoTinhThanhDieuDuong;
		this.heSoTinhThanhUser = heSoTinhThanhUser;
	}
	
	
}
