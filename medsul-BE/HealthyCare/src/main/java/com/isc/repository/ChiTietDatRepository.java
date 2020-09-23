package com.isc.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.isc.entity.ChiTietDat;

public interface ChiTietDatRepository extends JpaRepository<ChiTietDat, Integer>{

}
