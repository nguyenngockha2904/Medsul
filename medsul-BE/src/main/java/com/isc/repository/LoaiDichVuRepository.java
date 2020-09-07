package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.LoaiDichVu;

@Repository
public interface LoaiDichVuRepository extends JpaRepository<LoaiDichVu, Integer> {
	
}
