package com.isc.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.isc.entity.TinhThanh;

@Repository
public interface TinhThanhRepository extends JpaRepository<TinhThanh,Integer>{

	@Query("SELECT tt FROM TinhThanh tt WHERE tt.maTinhThanh =:maTinhThanh")
	TinhThanh GetTinhThanhByMaTinhThanh(@Param("maTinhThanh") String maTinhThanh);
	
	@Query("SELECT tt FROM TinhThanh tt WHERE tt.tenTinhThanh =:tenTinhThanh")
	TinhThanh GetTinhThanhByTenTinhThanh(@Param("tenTinhThanh") String tenTinhThanh);
}
