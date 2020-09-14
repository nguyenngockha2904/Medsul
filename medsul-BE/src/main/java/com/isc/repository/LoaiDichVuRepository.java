package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.isc.entity.LoaiDichVu;

@Repository
public interface LoaiDichVuRepository extends JpaRepository<LoaiDichVu, Integer> {

	@Query("SELECT ldv FROM LoaiDichVu ldv WHERE ldv.maLoaiDichVu = :maLoaiDichVu")
	List<LoaiDichVu> GetDanhSachLoaiDichVuByMaLoaiDichVu(@Param("maLoaiDichVu") String maLDV);
}
