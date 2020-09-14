package com.isc.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuyTrinhThucHienUpdateDto {

	private String quyTrinh_ThuTu;

	private String quyTrinh_MoTa;
}
