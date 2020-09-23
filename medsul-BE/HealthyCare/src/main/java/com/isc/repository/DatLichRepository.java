package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.isc.dto.DatLichDto;
import com.isc.entity.DatLich;


public interface DatLichRepository extends JpaRepository<DatLich, Integer> {
	@Query("Select new com.isc.dto.DatLichDto ("
			+ "dl.DL_HOTEN, "
			+ "dl.DL_NGAYDAT, "
			+ "ctd.CTD_GIOBATDAU, "
			+ "dl.DL_TINHTRANG, "
			+ "dv.DichVu_Id, "
			+ "dl.DL_SDT, "
			+ "dl.DL_EMAIL, "
			+ "dl.DL_DIACHI, "
			+ "dl.DL_TONGTIEN, "
			+ "tt.tenTinhThanh, "
			+ "mgg.MGG_HESOGIAM, "
			+ "ctd.CTD_DONGIA, "
			+ "ctd.CTD_NGAYBATDAU, "
			+ "dl.DL_GHICHU) "
			+ "from DatLich dl "
			+ "join TinhThanh tt on dl.TINHT_ID = tt.tinhThanh_Id "
			+ "join ChiTietDat ctd on dl.DL_ID = ctd.DL_ID "
			+ "join DichVu dv on dv.DichVu_Id = ctd.DV_ID "
			+ "left join MaGiamGia mgg on dl.MGG_ID = mgg.MGG_ID"
			)
		List<DatLichDto> datLichDto();

	
}
