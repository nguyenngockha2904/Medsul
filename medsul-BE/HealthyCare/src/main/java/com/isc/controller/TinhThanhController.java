package com.isc.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.AddTinhThanhDto;
import com.isc.entity.TinhThanh;
import com.isc.repository.TinhThanhRepository;

@RestController
@RequestMapping("api/tinhthanh")
public class TinhThanhController {

	@Autowired
	TinhThanhRepository tinhThanhRepository;
	
	@GetMapping("")
	public Object getAllTinhThanh() {
		List<TinhThanh> tinhThanhs = tinhThanhRepository.findAll();
		return new ResponseEntity<List<TinhThanh>>(tinhThanhs,HttpStatus.OK);
	}
	@PostMapping("")
	public Object addNewTinhThanh(@RequestBody AddTinhThanhDto addTinhThanhDto) {
		ModelMapper modelMapper = new ModelMapper();
		TinhThanh tinhThanh = modelMapper.map(addTinhThanhDto, TinhThanh.class);
		if(tinhThanhRepository.save(tinhThanh)!=null) {
			return new ResponseEntity<TinhThanh>(tinhThanh,HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Add Manager Failse!", HttpStatus.BAD_REQUEST);
	}
	@PutMapping("/{tinhThanh_Id}")
	public Object updateTinhThanh(@PathVariable("tinhThanh_Id") int tinhThanh_Id,@RequestBody AddTinhThanhDto addTinhThanhDto) {
		
		if (tinhThanhRepository.findById(tinhThanh_Id).orElse(null) != null) {
			ModelMapper modelMapper = new ModelMapper();
			TinhThanh tinhThanh = modelMapper.map(addTinhThanhDto, TinhThanh.class);
			tinhThanh.setTinhThanh_Id(tinhThanh_Id);;
			TinhThanh entity = tinhThanhRepository.save(tinhThanh);
			return new ResponseEntity<TinhThanh>(entity, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Update Fail!", HttpStatus.BAD_REQUEST);
		
	}
	
}
