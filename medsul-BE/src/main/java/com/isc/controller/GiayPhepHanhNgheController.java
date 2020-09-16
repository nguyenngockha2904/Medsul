package com.isc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.entity.GiayPhepHanhNghe;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.repository.GiayPhepHanhNgheRepository;
import com.isc.service.GiayPhepHanhNgheService;

@RestController
@RequestMapping("api/giayPhepHanhNghe")
public class GiayPhepHanhNgheController {
	@Autowired
	private GiayPhepHanhNgheRepository giayPhepRepo;

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	@Autowired
	private GiayPhepHanhNgheService giayPhepService;

	@GetMapping("")
	public Object GetAllGiayPhep() {
		List<GiayPhepHanhNghe> giayphep = giayPhepRepo.findAll();
		return new ResponseEntity<List<GiayPhepHanhNghe>>(giayphep, HttpStatus.OK);
	}

	@GetMapping("/GetGiayPhepByTaoTaoVienID/{dieuDuong_Id}")
	public Object GetGiayPhepByTaoTaoVienID(@PathVariable int dieuDuong_Id) {

		List<GiayPhepHanhNghe> giayphep = giayPhepService.GetListGiayPhepByDaoTaoVienID(dieuDuong_Id);
		return new ResponseEntity<List<GiayPhepHanhNghe>>(giayphep, HttpStatus.OK);
	}

	@GetMapping("/GetByGiayPhepID/{giayPhep_ID}")
	public Object GetByGiayPhepByID(@PathVariable int giayPhep_ID) {
		
	GiayPhepHanhNghe giayphep = giayPhepRepo.findById(giayPhep_ID).orElse(null);
		
		return new ResponseEntity<GiayPhepHanhNghe>(giayphep, HttpStatus.OK);
	}
	
	
}
