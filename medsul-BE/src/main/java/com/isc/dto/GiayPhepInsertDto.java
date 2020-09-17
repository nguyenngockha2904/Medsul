package com.isc.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class GiayPhepInsertDto {

	private int giayPhep_DichVu_Id;


	private int giayPhep_DieuDuong_Id;


	private int giayPhep_DaoTaoVien_Id;


	private String giayPhep_ThongTin;


	private String giayPhep_XepLoai;


	private int giayPhep_TrangThai;

}
