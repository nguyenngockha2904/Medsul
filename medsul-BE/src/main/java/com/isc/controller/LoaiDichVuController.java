package com.isc.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.LoaiDichVuEditDto;
import com.isc.dto.LoaiDichVuInsertDto;
import com.isc.entity.DichVu;
import com.isc.entity.LoaiDichVu;
import com.isc.repository.LoaiDichVuRepository;

@RestController
@RequestMapping("api/loaiDichVu")
public class LoaiDichVuController {

	@Autowired
	private LoaiDichVuRepository loaiDichVuRepository;

	// API - LAY DANH SACH TAT CA LOAI DICH VU
	@GetMapping("")
	public Object GetAllServiceType() {
		List<LoaiDichVu> listServiceType = loaiDichVuRepository.findAll();
		return new ResponseEntity<List<LoaiDichVu>>(listServiceType, HttpStatus.OK);
	}

	// API - TIM KIEM LOAI DICH VU THEO ID
	@GetMapping("/{id}")
	public Object GetServiceTypeById(@PathVariable("id") int id) {
		LoaiDichVu serviceType = loaiDichVuRepository.findById(id).orElse(null);
		if (serviceType != null) {
			return new ResponseEntity<LoaiDichVu>(serviceType, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong tim thay loai dich vu co id = " + id, HttpStatus.BAD_REQUEST);
	}

	// API - THEM MOI MOT LOAI DICH VU
	@PostMapping("")
	public Object AddNewServiceType( @RequestBody LoaiDichVuInsertDto serviceType, BindingResult errors) {
		if (errors.hasErrors()) {
			return new ResponseEntity<Object>(errors.getAllErrors(), HttpStatus.BAD_REQUEST);
		}
		ModelMapper modelMapper = new ModelMapper();
		LoaiDichVu loaiDV = modelMapper.map(serviceType, LoaiDichVu.class);

		System.out.println("ma dich vu " + serviceType.getMaLoaiDichVu());
		List<LoaiDichVu> listLDV = loaiDichVuRepository.GetDanhSachLoaiDichVuByMaLoaiDichVu(serviceType.getMaLoaiDichVu());

		if (listLDV.isEmpty() == false) {
			return new ResponseEntity<String>("MA LDV da ton tai, Kiem tra lai", HttpStatus.BAD_REQUEST);
		}

		if (loaiDichVuRepository.save(loaiDV) != null) {
			return new ResponseEntity<LoaiDichVu>(loaiDV, HttpStatus.CREATED);
		}

		return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
	}

	// API - CAP NHAT THONG TIN DICH VU
	@PutMapping("/{id}")
	public Object UpdateServiceType(@PathVariable("id") int id, @RequestBody LoaiDichVuEditDto loaiDVEditDto) {
		if (loaiDichVuRepository.findById(id).orElse(null) != null) {

			ModelMapper modelMapper = new ModelMapper();
			LoaiDichVu loaiDV = modelMapper.map(loaiDVEditDto, LoaiDichVu.class);
			loaiDV.setLoaiDichVu_Id(id);
			LoaiDichVu entity = loaiDichVuRepository.save(loaiDV);
			return new ResponseEntity<LoaiDichVu>(entity, HttpStatus.OK);
		}

		return new ResponseEntity<String>("Id khong ton tai", HttpStatus.BAD_REQUEST);
	}

	// API - XOA LOAI DICH VU
	@DeleteMapping("/{id}")
	public Object DeleteServiceType(@PathVariable("id") int id) {
		LoaiDichVu serviceType = loaiDichVuRepository.findById(id).orElse(null);

		if (serviceType != null) {
			loaiDichVuRepository.delete(serviceType);
			return new ResponseEntity<String>("Xoa Thanh Cong", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong tim thay dich vu co id = " + id + ", Xoa That Bai",
				HttpStatus.BAD_REQUEST);
	}

}
