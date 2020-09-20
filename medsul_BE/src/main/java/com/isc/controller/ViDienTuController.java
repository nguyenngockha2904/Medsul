package com.isc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.DieuDuongGetAllDto;
import com.isc.dto.ViDienTuEditDto;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.service.ViDienTuService;

@RestController
@RequestMapping("api/vidientu")
public class ViDienTuController { 
	
	
	@Autowired
	private ViDienTuService viDienTuService;
	
	@Autowired
	private DieuDuongReponsitory dieuDuongreponsitory;
	
	@PutMapping("/{dieuDuong_ID}")
	public Object NapTienVaoViDienTuByAdmin(@PathVariable int dieuDuong_ID, @RequestBody ViDienTuEditDto vdtEditDto) {
		
		if(viDienTuService.UpdateViDienTuByAdmin(dieuDuong_ID, vdtEditDto)) {
			
			DieuDuongGetAllDto dieuDuongGetAllDto = dieuDuongreponsitory.GetDieuDuongDtoGetAllById(dieuDuong_ID);
			return new ResponseEntity<DieuDuongGetAllDto>(dieuDuongGetAllDto, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong Tim Thay Vi Dien Tu cua dieu duong co id = "+dieuDuong_ID, HttpStatus.OK);
	}

}
