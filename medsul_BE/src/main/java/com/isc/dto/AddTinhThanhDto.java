package com.isc.dto;

import lombok.Data;

@Data
public class AddTinhThanhDto {

	private String maTinhThanh;

	private String tenTinhThanh;

	private double heSoTinhThanhDieuDuong;

	private double heSoTinhThanhUser;

	public AddTinhThanhDto(String maTinhThanh, String tenTinhThanh, double heSoTinhThanhDieuDuong,
			double heSoTinhThanhUser) {
		super();
		this.maTinhThanh = maTinhThanh;
		this.tenTinhThanh = tenTinhThanh;
		this.heSoTinhThanhDieuDuong = heSoTinhThanhDieuDuong;
		this.heSoTinhThanhUser = heSoTinhThanhUser;
	}

}
