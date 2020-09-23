package com.isc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.DieuDuongGetAllDto;
import com.isc.dto.DieuDuongInsertDto;
import com.isc.entity.DieuDuong;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.service.DieuDuongService;

@RestController
@RequestMapping("api/dieuDuong")
public class DieuDuongController {

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	@Autowired
	private DieuDuongService dieuDuongService;

	@GetMapping("")
	public Object getAllDieuDuong() {

		// List<DieuDuong> listDieuDuong = dieuDuongReponsitory.findAll();
		List<DieuDuongGetAllDto> lstGetAll = dieuDuongService.GetAllDieuDuong();
		return new ResponseEntity<List<DieuDuongGetAllDto>>(lstGetAll, HttpStatus.OK);
	}

	// API - LAY DANH SACH DIEU DUONG THEO LOAI MA DIEU DUONG
	@GetMapping("/{maDieuDuong}")
	public Object getDieuDUongByMaDieuDuong(@PathVariable String maDieuDuong) {

		DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong(maDieuDuong);
		return new ResponseEntity<DieuDuong>(dieuDuong, HttpStatus.OK);
	}

	// API - THEM MOI DICH VU
	@PostMapping("")
	public Object AddNewDieuDuong(@RequestBody DieuDuongInsertDto dieuDuongInsertDto) {

		if (dieuDuongService.AddNewDieuDuong(dieuDuongInsertDto)) {
			return new ResponseEntity<DieuDuongInsertDto>(dieuDuongInsertDto, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
	}
}
