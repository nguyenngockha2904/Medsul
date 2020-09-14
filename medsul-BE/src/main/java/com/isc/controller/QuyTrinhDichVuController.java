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

import com.isc.dto.QuyTrinhThucHienInsertDto;
import com.isc.dto.QuyTrinhThucHienUpdateDto;
import com.isc.entity.QuyTrinhThucHienDichVu;
import com.isc.repository.DichVuRepository;
import com.isc.repository.QuyTrinhDichVuReponsitory;

@RestController
@RequestMapping("api/quyTrinhThucHienDichVu")
public class QuyTrinhDichVuController {
	@Autowired
	private QuyTrinhDichVuReponsitory quyTrinhRepo;
	@Autowired
	private DichVuRepository dichVuRepo;


	// api lay danh sach tat ca quy trinh
	@GetMapping("")
	public Object GetAllQuyTrinh() {
		List<QuyTrinhThucHienDichVu> lstQuyTrinh = quyTrinhRepo.findAll();
		return new ResponseEntity<List<QuyTrinhThucHienDichVu>>(lstQuyTrinh, HttpStatus.OK);
	}

	// api lay danh sach quy trinh theo id dich vu

	@GetMapping("/{dichVuID}")
	public Object GetQuyTrinhByDichVuId(@PathVariable int dichVuID) {

		List<QuyTrinhThucHienDichVu> lstQuyTrinh = quyTrinhRepo.findByDichVu(dichVuRepo.getOne(dichVuID));

		return new ResponseEntity<List<QuyTrinhThucHienDichVu>>(lstQuyTrinh, HttpStatus.OK);
	}

	// api them Quy trinh
	@PostMapping("")
	public Object AddNewQuyTrinh(@RequestBody QuyTrinhThucHienInsertDto quyTrinhDto) {

		ModelMapper modelMapper = new ModelMapper();
		QuyTrinhThucHienDichVu quyTrinh = modelMapper.map(quyTrinhDto, QuyTrinhThucHienDichVu.class);

		if (quyTrinhRepo.saveAndFlush(quyTrinh) != null) {
			return new ResponseEntity<QuyTrinhThucHienDichVu>(quyTrinh, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("Failed", HttpStatus.BAD_REQUEST);
		}

	}

	// api sua quy trinh
	@PutMapping("/{id}")
	public Object UpdateQuyTrinh(@PathVariable("id") int id, @RequestBody QuyTrinhThucHienUpdateDto dichVuUpdateTdo) {
		if (quyTrinhRepo.findById(id).orElse(null) != null) {

			QuyTrinhThucHienDichVu quyTrinh = quyTrinhRepo.getOne(id);

			// ModelMapper modelMapper = new ModelMapper();
			// quyTrinh= modelMapper.map(dichVuUpdateTdo, QuyTrinhThucHienDichVu.class);

			quyTrinh.setQuyTrinh_Id(id);
			quyTrinh.setQuyTrinh_MoTa(dichVuUpdateTdo.getQuyTrinh_MoTa());
			quyTrinh.setQuyTrinh_ThuTu(dichVuUpdateTdo.getQuyTrinh_ThuTu());
			quyTrinhRepo.saveAndFlush(quyTrinh);
			return new ResponseEntity<QuyTrinhThucHienDichVu>(quyTrinh, HttpStatus.OK);

		} else {
			return new ResponseEntity<String>("Id ko tồn tại!", HttpStatus.BAD_REQUEST);

		}
	}

	// api Xoa Quy Trinh
	@DeleteMapping("/{id}")
	public Object DeleteQuyTrinh(@PathVariable("id") int id) {
		if (quyTrinhRepo.findById(id).orElse(null) != null) {
			QuyTrinhThucHienDichVu quyTrinh = quyTrinhRepo.getOne(id);
			quyTrinhRepo.delete(quyTrinh);
			return new ResponseEntity<String>("Xoa Thanh Cong", HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("Khong tim thay quy trinh co id = " + id + ", Xoa That Bai",
					HttpStatus.BAD_REQUEST);
		}

	}

}
