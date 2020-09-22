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
		return new ResponseEntity<List<TinhThanh>>(tinhThanhs, HttpStatus.OK);
	}

	@PostMapping("")
	public Object addNewTinhThanh(@RequestBody AddTinhThanhDto addTinhThanhDto) {
		ModelMapper modelMapper = new ModelMapper();

		TinhThanh tinhThanh = modelMapper.map(addTinhThanhDto, TinhThanh.class);
		TinhThanh maTinh = tinhThanhRepository.GetTinhThanhByMaTinhThanh(addTinhThanhDto.getMaTinhThanh());
		TinhThanh tenTinh = tinhThanhRepository.GetTinhThanhByTenTinhThanh(addTinhThanhDto.getTenTinhThanh());

		if (maTinh == null && tenTinh == null) {
			tinhThanhRepository.save(tinhThanh);
			return new ResponseEntity<TinhThanh>(tinhThanh, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Add Failse!, Ma hoac Ten tinh Da Ton Tai", HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/{tinhThanh_Id}")
	public Object updateTinhThanh(@PathVariable("tinhThanh_Id") int tinhThanh_Id,
			@RequestBody AddTinhThanhDto updateTinhThanhDto) {

		TinhThanh checkTT = tinhThanhRepository.findById(tinhThanh_Id).orElse(null);
		if (checkTT != null) {
			ModelMapper modelMapper = new ModelMapper();
			TinhThanh tinhThanh = modelMapper.map(updateTinhThanhDto, TinhThanh.class);

//			/*
//			 * Kiem tra ma tinh va ten tinh update co trung voi ma va ten co trong database
//			 * hay khong 1.Co => update binh thuong 2.Khong => kiem tra co bi trung hay
//			 * khong +Trung => failed, update that bai +Khong Trung => update
//			 */
//			if (checkTT.getMaTinhThanh().equals(updateTinhThanhDto.getMaTinhThanh())) {
//				if (checkTT.getTenTinhThanh().equals(updateTinhThanhDto.getTenTinhThanh())) {
//					tinhThanh.setTinhThanh_Id(tinhThanh_Id);
//					TinhThanh entity = tinhThanhRepository.save(tinhThanh);
//					return new ResponseEntity<TinhThanh>(entity, HttpStatus.CREATED);
//				} else {
//					if (tinhThanhRepository.GetTinhThanhByTenTinhThanh(updateTinhThanhDto.getTenTinhThanh()) != null) {
//						return new ResponseEntity<String>("Ten Tinh Thanh Da Ton Tai", HttpStatus.BAD_REQUEST);
//					}
//				}
//			} else {
//				if (tinhThanhRepository.GetTinhThanhByMaTinhThanh(updateTinhThanhDto.getMaTinhThanh()) != null) {
//					return new ResponseEntity<String>("Ma Tinh Thanh Da Ton Tai", HttpStatus.BAD_REQUEST);
//				}
//			}
			tinhThanh.setTinhThanh_Id(tinhThanh_Id);
			TinhThanh entity = tinhThanhRepository.save(tinhThanh);
			return new ResponseEntity<TinhThanh>(entity, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Update Failed..!, Loi K xac Dinhi", HttpStatus.BAD_REQUEST);
	}
}
