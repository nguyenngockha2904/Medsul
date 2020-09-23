package com.isc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dto.ViDienTuEditDto;
import com.isc.entity.ViDienTu;
import com.isc.repository.ViDienTuRepository;


@Service
public class ViDienTuService {

	@Autowired
	private ViDienTuRepository viDienTuReponsitory;
	
	
	public boolean UpdateViDienTuByAdmin(int dieuDuong_ID, ViDienTuEditDto viDienTuEditDto) {
		
		ViDienTu vdt = viDienTuReponsitory.GetViDienTuByDieuDuongID(dieuDuong_ID);
		
		if(vdt != null) {
			
			vdt.setTongTien(vdt.getTongTien() + viDienTuEditDto.getSoTienNapVaoVi());
			viDienTuReponsitory.save(vdt);
			return true;
		}
		
		return false;
	}
}
