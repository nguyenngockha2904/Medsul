package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isc.entity.DieuDuong;

@Repository
public interface DieuDuongReponsitory extends JpaRepository<DieuDuong, Integer>{
	
//	@Query("SELECT new com.isc.dto.DieuDuongInsertDto(d.dieuDuong_Id, d.hoTen, d.maDieuDuong, d.soDienThoai, cm.soCMND , cm.ngayCap) FROM DieuDuong d JOIN d.CMND_DieuDuong cm")
//	List<DieuDuongInsertDto> listDieuDuong();

	@Query("SELECT dd FROM DieuDuong dd WHERE dd.maDieuDuong = :maDieuDuong")
	DieuDuong GetDieuDuongByMaDieuDuong(@Param("maDieuDuong") String maDieuDuong);
	
}
