package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.isc.dto.AdminInformationDto;
import com.isc.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>{

	@Query(value ="Select new com.isc.dto.AdminInformationDto(ADMIN_HOTEN,ADMIN_SDT,ADMIN_CMND,ADMIN_NGAYSINH,ADMIN_GIOITINH,"
			+ "ADMIN_USERNAME,ADMIN_PASSWORD,ADMIN_EMAIL,ADMIN_DIACHI) from Admin ")
	List<AdminInformationDto> showInformationOfAdminOrManager();
	
//	@Modifying
//	@Query("Update Admin set ADMIN_SDT =?1, ADMIN_NGAYSINH= ?2, ADMIN_PASSWORD= ?3 ,"
//			+ "ADMIN_EMAIL= ?4,ADMIN_DIACHI= ?5 Where ADMIN_ID =:ADMIN_ID ")
//	Admin updateInformationDto();
	
}
