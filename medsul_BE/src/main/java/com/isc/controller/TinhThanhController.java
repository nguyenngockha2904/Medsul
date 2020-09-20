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

			/*
			 * Kiem tra ma tinh va ten tinh update co trung voi ma va ten co trong database
			 * hay khong 1.Co => update binh thuong 2.Khong => kiem tra co bi trung hay
			 * khong +Trung => failed, update that bai +Khong Trung => update
			 */

			TinhThanh checkValueTinhThanh = tinhThanhRepository.GetTinhThanhByMaTinhThanh(updateTinhThanhDto.getMaTinhThanh());

			// ma tinh thanh update trung voi ma tinh thanh co trong database
			if (checkValueTinhThanh.getMaTinhThanh().equals(updateTinhThanhDto.getMaTinhThanh())) {
				
				//kiem tra tinh thanh update co trung voi trong database hay khong
				if (checkValueTinhThanh.getTenTinhThanh().equals(updateTinhThanhDto.getTenTinhThanh())) {
					//trung => tien  hanh update
					tinhThanh.setTinhThanh_Id(tinhThanh_Id);
					TinhThanh entity = tinhThanhRepository.save(tinhThanh);
					return new ResponseEntity<TinhThanh>(entity, HttpStatus.OK);

				} else {
					// khac => check da ton tai hay khong
					TinhThanh checkTenTinh = tinhThanhRepository.GetTinhThanhByTenTinhThanh(updateTinhThanhDto.getTenTinhThanh());
					if (checkTenTinh == null) {
						// khong ton tai =>  update
						tinhThanh.setTinhThanh_Id(tinhThanh_Id);
						TinhThanh entity = tinhThanhRepository.save(tinhThanh);
						return new ResponseEntity<TinhThanh>(entity, HttpStatus.OK);

					}
				}
			} else {// ma tinh khong trung 
				
				//check ma tinh update co tong tai trong database hay chua
				TinhThanh checkMaTinh = tinhThanhRepository.GetTinhThanhByMaTinhThanh(updateTinhThanhDto.getMaTinhThanh());
				if (checkMaTinh == null) {
					// khong ton tai => check ten tinh thanh
					if (checkValueTinhThanh.getTenTinhThanh().equals(updateTinhThanhDto.getTenTinhThanh())) {
							//ten tinh update trung voi ten tinh trong database => update
						tinhThanh.setTinhThanh_Id(tinhThanh_Id);
						TinhThanh entity = tinhThanhRepository.save(tinhThanh);
						return new ResponseEntity<TinhThanh>(entity, HttpStatus.OK);

					} else { // ten tinh khong trung => check xem co ton tai hay khong

						TinhThanh checkTenTinh = tinhThanhRepository.GetTinhThanhByTenTinhThanh(updateTinhThanhDto.getTenTinhThanh());
						if (checkTenTinh == null) {
							// khong ton tai update	
							tinhThanh.setTinhThanh_Id(tinhThanh_Id);
							TinhThanh entity = tinhThanhRepository.save(tinhThanh);
							return new ResponseEntity<TinhThanh>(entity, HttpStatus.OK);

						}

					}

				}
			}

		}
		return new ResponseEntity<String>("Update Failed..!, Ma Hoac Ten Tinh Da Ton Tai", HttpStatus.BAD_REQUEST);
	}
}
