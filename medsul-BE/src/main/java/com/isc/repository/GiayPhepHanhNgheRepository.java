package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.DieuDuong;
import com.isc.entity.GiayPhepHanhNghe;

@Repository
public interface GiayPhepHanhNgheRepository extends JpaRepository<GiayPhepHanhNghe, Integer> {
	public List<GiayPhepHanhNghe> findByDaoTaoVien(DieuDuong daoTaoVien);

}
