package com.isc.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.DatLichDto;
import com.isc.dto.InsertDatLichUserDto;
import com.isc.entity.Admin;
import com.isc.entity.ChiTietDat;
import com.isc.entity.DatLich;
import com.isc.entity.DichVu;
import com.isc.entity.TinhThanh;
import com.isc.repository.ChiTietDatRepository;
import com.isc.repository.DatLichRepository;
import com.isc.repository.TinhThanhRepository;

@RestController
@RequestMapping("api/datlich")
public class DatLichController {

	@Autowired
	DatLichRepository datLichRepository;
	
	@Autowired
	ChiTietDatRepository ctdRepository;
	
	@Autowired
	TinhThanhRepository tinhThanhRepository;
	
	@GetMapping("")	
	public Object finAllDatLich() {
		List<DatLichDto> chiTietDat = datLichRepository.datLichDto();
		return new ResponseEntity<List<DatLichDto>>(chiTietDat,HttpStatus.OK);
	}

}
