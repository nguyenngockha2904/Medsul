package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.ViDienTu;

@Repository
public interface ViDienTuRepository extends JpaRepository<ViDienTu, Integer> {

}
