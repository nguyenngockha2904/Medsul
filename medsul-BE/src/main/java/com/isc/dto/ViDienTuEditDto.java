package com.isc.dto;

import lombok.Data;

@Data
public class ViDienTuEditDto {

	private double soTienNapVaoVi;

	public ViDienTuEditDto() {
	}

	public ViDienTuEditDto(double soTienNapVaoVi) {
		super();
		this.soTienNapVaoVi = soTienNapVaoVi;
	}

}
