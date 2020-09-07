package com.isc.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.isc.entity.ChuyenNganh;
import com.isc.entity.LoaiDichVu;
import com.isc.repository.ChuyenNganhRepository;

@RestController
@RequestMapping("api/chuyenNganh")
public class ChuyenNganhController {

	@Autowired
	private ChuyenNganhRepository chuyenNganhReponsitory;

	// API - LAY DANH SACH TAT CA CHUYEN NGANH
	@GetMapping("")
	public Object GetAllChuyenNganh() {
		List<ChuyenNganh> listChuyenNganh = chuyenNganhReponsitory.findAll();
		return new ResponseEntity<List<ChuyenNganh>>(listChuyenNganh, HttpStatus.OK);
	}

	// API - TIM KIEM CHUYEN NGANH THEO ID
	@GetMapping("/{id}")
	public Object GetChuyenNganhById(@PathVariable("id") int id) {
		ChuyenNganh chuyenNganh = chuyenNganhReponsitory.findById(id).orElse(null);
		if (chuyenNganh != null) {
			return new ResponseEntity<ChuyenNganh>(chuyenNganh, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong tim thay chuyen nganh co id = " + id, HttpStatus.BAD_REQUEST);
	}

	// API - THEM MOI MOT CHUYEN NGANH
	@PostMapping("")
	public Object AddNewChuyenNganh(@Valid @RequestBody ChuyenNganh chuyenNganh, BindingResult errors) {
		if (errors.hasErrors()) {
			return new ResponseEntity<Object>(errors.getAllErrors(), HttpStatus.BAD_REQUEST);
		}
		if (chuyenNganhReponsitory.saveAndFlush(chuyenNganh) != null) {
			return new ResponseEntity<ChuyenNganh>(chuyenNganh, HttpStatus.CREATED);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
	}

	// API - CAP NHAT THONG TIN CHUYEN NGANH
	@PutMapping("/{id}")
	public Object UpdateChuyenNganh(@PathVariable("id") int id, @RequestBody ChuyenNganh chuyenNganh) {
		if (chuyenNganh != null) {
			return new ResponseEntity<ChuyenNganh>(chuyenNganhReponsitory.save(chuyenNganh), HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong tim thay chuyen nganh co id = " + id + ", Cap nhat that bai",
				HttpStatus.BAD_REQUEST);
	}

	// API - XOA LOAI CHUYEN NGANH
	@DeleteMapping("/{id}")
	public Object DeleteChuyenNganh(@PathVariable("id") int id) {
		ChuyenNganh chuyenNganh = chuyenNganhReponsitory.findById(id).orElse(null);

		if (chuyenNganh != null) {
			chuyenNganhReponsitory.delete(chuyenNganh);
			return new ResponseEntity<String>("Xoa Thanh Cong", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Khong tim thay dich vu co id = " + id + ", Xoa That Bai",
				HttpStatus.BAD_REQUEST);
	}
}
