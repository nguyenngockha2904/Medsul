package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.DichVu;
import com.isc.entity.QuyTrinhThucHienDichVu;

@Repository
public interface QuyTrinhDichVuReponsitory extends JpaRepository<QuyTrinhThucHienDichVu, Integer>{
	public List<QuyTrinhThucHienDichVu> findByDichVu(DichVu dichvu);
}
