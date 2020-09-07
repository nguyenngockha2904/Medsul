package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.ChuyenNganh;

@Repository
public interface ChuyenNganhRepository extends JpaRepository<ChuyenNganh, Integer> {

}
