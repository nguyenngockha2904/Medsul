package com.isc.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.DichVuEditDto;
import com.isc.dto.DichVuInsertDto;
import com.isc.entity.DichVu;
import com.isc.repository.DichVuRepository;

@RestController
@RequestMapping("api/dichvu")
public class DichVuController {

	@Autowired
	private DichVuRepository dichVuRepository;

	// API - LAY TAT CA DANH SACH DICH VU
	@GetMapping("")
	public Object GetAllService() {
		List<DichVu> dichVu = dichVuRepository.findAll();
		return new ResponseEntity<List<DichVu>>(dichVu, HttpStatus.OK);
	}

	// API - LAY DANH SACH DICH VU THEO LOAI DICH VU(ID)
	@GetMapping("/{loaiDichVu_Id}")
	public Object GetServiceByServiceType(@PathVariable int loaiDichVu_Id) {

		List<DichVu> dichVu = dichVuRepository.GetDichVuByLoaiDichVu(loaiDichVu_Id);
		return new ResponseEntity<List<DichVu>>(dichVu, HttpStatus.OK);
	}

	// API - THEM MOI DICH VU
	@PostMapping("")
	public Object AddNewService(@RequestBody DichVuInsertDto dichVuInsertDto) {

		ModelMapper modelMapper = new ModelMapper();
		DichVu dv = modelMapper.map(dichVuInsertDto, DichVu.class);

		System.out.println("ma dich vu " + dichVuInsertDto.getMaDichVu());
		List<DichVu> listDV = dichVuRepository.GetDichVuByMaDichVu(dichVuInsertDto.getMaDichVu());
		
		if (listDV.isEmpty() == false) {
			return new ResponseEntity<String>("MA DV da ton tai, Kiem tra lai", HttpStatus.BAD_REQUEST);
		}
		if (dichVuRepository.saveAndFlush(dv) != null) {
			return new ResponseEntity<DichVu>(dv, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
	}

	// API CAP NHAT DICH VU
	@PutMapping("/{id}")
	public Object UpdateService(@PathVariable("id") int DichVu_Id, @RequestBody DichVuEditDto dichVuEditDto) {

		if (dichVuRepository.findById(DichVu_Id).orElse(null) != null) {

			ModelMapper modelMapper = new ModelMapper();
			DichVu dichVu = modelMapper.map(dichVuEditDto, DichVu.class);
			dichVu.setDichVu_Id(DichVu_Id);
			DichVu entity = dichVuRepository.save(dichVu);
			return new ResponseEntity<DichVu>(entity, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Id ko tồn tại!", HttpStatus.BAD_REQUEST);
	}

	// API - XOA DICH VU
	@DeleteMapping("/{DichVu_Id}")
	public Object DeleteService(@PathVariable int DichVu_Id) {

		if (dichVuRepository.existsById(DichVu_Id)) {
			dichVuRepository.deleteById(DichVu_Id);
			return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<String>("Id ko tồn tại!", HttpStatus.BAD_REQUEST);
	}
}
