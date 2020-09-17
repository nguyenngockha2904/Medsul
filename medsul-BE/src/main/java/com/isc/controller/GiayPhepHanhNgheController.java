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
import com.isc.dto.GiayPhepInsertDto;
import com.isc.entity.GiayPhepHanhNghe;
import com.isc.entity.TinhThanh;
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

	@GetMapping("/GetGiayPhepByDaoTaoVienID/{daoTaoVien_Id}")
	public Object GetGiayPhepByDaoTaoVienID(@PathVariable int daoTaoVien_Id) {

		List<GiayPhepHanhNghe> giayphep = giayPhepService.GetListGiayPhepByDaoTaoVienID(daoTaoVien_Id);
		return new ResponseEntity<List<GiayPhepHanhNghe>>(giayphep, HttpStatus.OK);
	}

	@GetMapping("/GetByGiayPhepID/{giayPhep_ID}")
	public Object GetByGiayPhepByID(@PathVariable int giayPhep_ID) {

		GiayPhepHanhNghe giayphep = giayPhepRepo.findById(giayPhep_ID).orElse(null);

		return new ResponseEntity<GiayPhepHanhNghe>(giayphep, HttpStatus.OK);
	}

	// Get Giay Phep By DieuDuong ID
	@GetMapping("/GetGiayPhepByDieuDuongID/{dieuDuong_Id}")
	public Object GetGiayPhepByDieuDuongID(@PathVariable int dieuDuong_Id) {

		List<GiayPhepHanhNghe> giayphep = giayPhepService.GetListGiayPhepByDieuDuongID(dieuDuong_Id);
		return new ResponseEntity<List<GiayPhepHanhNghe>>(giayphep, HttpStatus.OK);
	}

	// Add Giay Phep

	@PostMapping("")
	public Object AddNewGiayPhep(@RequestBody GiayPhepInsertDto giayPhepInsertDto) {

		GiayPhepHanhNghe giayPhep = new GiayPhepHanhNghe();
		giayPhep.setGiayPhep_DichVu_Id(giayPhepInsertDto.getGiayPhep_DichVu_Id());
		giayPhep.setGiayPhep_DieuDuong_Id(giayPhepInsertDto.getGiayPhep_DieuDuong_Id());
		giayPhep.setGiayPhep_DaoTaoVien_Id(giayPhepInsertDto.getGiayPhep_DaoTaoVien_Id());
		giayPhep.setGiayPhep_ThongTin(giayPhepInsertDto.getGiayPhep_ThongTin());
		giayPhep.setGiayPhep_XepLoai(giayPhepInsertDto.getGiayPhep_XepLoai());
		giayPhep.setGiayPhep_TrangThai(giayPhepInsertDto.getGiayPhep_TrangThai());

		// return new ResponseEntity<GiayPhepHanhNghe>(giayPhep,HttpStatus.CREATED);
		/*
		 * ModelMapper modelMapper = new ModelMapper(); GiayPhepHanhNghe giayPhep =
		 * modelMapper.map(giayPhepInsertDto, GiayPhepHanhNghe.class); return new
		 * ResponseEntity<GiayPhepHanhNghe>(giayPhep,HttpStatus.CREATED);
		 */

		if (giayPhepRepo.saveAndFlush(giayPhep) != null) {
			return new ResponseEntity<GiayPhepHanhNghe>(giayPhep, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Add Manager Failse!", HttpStatus.BAD_REQUEST);

	}
	
	@PutMapping("/{giayPhep_ID}")
	public Object updateGiayPhep(@PathVariable("giayPhep_ID") int giayPhep_ID,@RequestBody GiayPhepInsertDto giayPhepInsertDto) {
		
		if (giayPhepRepo.findById(giayPhep_ID).orElse(null) != null) {
			
			GiayPhepHanhNghe giayPhep = new GiayPhepHanhNghe();
			giayPhep.setGiayPhep_DichVu_Id(giayPhepInsertDto.getGiayPhep_DichVu_Id());
			giayPhep.setGiayPhep_DieuDuong_Id(giayPhepInsertDto.getGiayPhep_DieuDuong_Id());
			giayPhep.setGiayPhep_DaoTaoVien_Id(giayPhepInsertDto.getGiayPhep_DaoTaoVien_Id());
			giayPhep.setGiayPhep_ThongTin(giayPhepInsertDto.getGiayPhep_ThongTin());
			giayPhep.setGiayPhep_XepLoai(giayPhepInsertDto.getGiayPhep_XepLoai());
			giayPhep.setGiayPhep_TrangThai(giayPhepInsertDto.getGiayPhep_TrangThai());
			giayPhep.setGiayPhep_Id(giayPhep_ID);
			
			GiayPhepHanhNghe entity = giayPhepRepo.save(giayPhep);
			return new ResponseEntity<GiayPhepHanhNghe>(entity, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Update Fail!", HttpStatus.BAD_REQUEST);
		
	}

}
