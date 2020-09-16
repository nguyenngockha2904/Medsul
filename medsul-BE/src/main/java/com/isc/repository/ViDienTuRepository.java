package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isc.entity.ViDienTu;

@Repository
public interface ViDienTuRepository extends JpaRepository<ViDienTu, Integer> {

	@Query("SELECT vdt FROM ViDienTu vdt WHERE vdt.dieuDuong_ID =:dieuDuong_ID")
	ViDienTu GetViDienTuByDieuDuongID(@Param("dieuDuong_ID") int dieuDuongID);
}
