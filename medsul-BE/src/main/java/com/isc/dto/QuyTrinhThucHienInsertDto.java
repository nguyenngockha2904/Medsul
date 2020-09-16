package com.isc.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuyTrinhThucHienInsertDto {
	private int dichVuID;

	private String quyTrinh_ThuTu;

	private String quyTrinh_MoTa;

}
