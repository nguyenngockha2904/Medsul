package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isc.entity.CMND_DieuDuong;

@Repository
public interface ChungMinhReponsitory  extends JpaRepository<CMND_DieuDuong, String>{

}
