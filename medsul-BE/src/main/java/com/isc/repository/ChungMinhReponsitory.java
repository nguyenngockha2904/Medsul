package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isc.entity.CMND_DieuDuong;

@Repository
public interface ChungMinhReponsitory extends JpaRepository<CMND_DieuDuong, String> {

	@Query("SELECT cmnd FROM CMND_DieuDuong cmnd WHERE cmnd.soCMND = :soCMND")
	CMND_DieuDuong getCmndBySoCmnd(@Param("soCMND") String soCMND);
	
	@Query("SELECT cmnd FROM CMND_DieuDuong cmnd WHERE cmnd.DD_ID = :DD_ID")
	CMND_DieuDuong getCmndByDieuDuongID(@Param("DD_ID") int dieuDuongID);

}
