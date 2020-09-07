package com.isc.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.isc.dto.DichVuDto;
import com.isc.entity.DichVu;

@Repository
public interface DichVuRepository extends JpaRepository<DichVu, Integer> {
	@Query("SELECT new com.isc.dto.DichVuDto(d.DichVu_Id, d.maDichVu, d.tenDichVu, d.moTaDichVu, d.yeuCauCongViec, d.khongBaoGom, d.thoiGianUocTinh) FROM DichVu d ")
	List<DichVuDto> getAllDTO();
}
