package com.isc.controller;

import java.util.List;

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

import com.isc.dto.DieuDuongEditDto;
import com.isc.dto.DieuDuongGetAllDto;
import com.isc.dto.DieuDuongInsertDto;
import com.isc.entity.CMND_DieuDuong;
import com.isc.entity.DieuDuong;
import com.isc.repository.ChungMinhReponsitory;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.service.DieuDuongService;

@RestController
@RequestMapping("api/dieuDuong")
public class DieuDuongController {

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	@Autowired
	private DieuDuongService dieuDuongService;

	@Autowired
	private ChungMinhReponsitory chungMinhReponsitory;

	/*
	 * // API - LAY TAT CA DANH SACH DIEU DUONG THEO FORM
	 * 
	 * @GetMapping("") public Object getAllDieuDuong() { List<DieuDuongGetAllDto>
	 * lstGetAll = dieuDuongService.GetAllDieuDuong(); return new
	 * ResponseEntity<List<DieuDuongGetAllDto>>(lstGetAll, HttpStatus.OK); }
	 */

	// API - LAY TAT CA DANH SACH DIEU DUONG THEO FORM
	@GetMapping("")
	public Object getAllDieuDuong() {
		List<DieuDuongGetAllDto> lstGetAll = dieuDuongReponsitory.getDieuDuongDtoGetAll();
		if (lstGetAll.isEmpty()) {
			return new ResponseEntity<String>("Danh Sach Trong", HttpStatus.OK);
		}
		return new ResponseEntity<List<DieuDuongGetAllDto>>(lstGetAll, HttpStatus.OK);
	}

	@GetMapping("/loginByPhoneNumber/{sdtDieuDuong}/{passDieuDuong}")
	public Object LoginDieuDuongBySDT(@PathVariable String sdtDieuDuong, @PathVariable String passDieuDuong) {

		DieuDuongGetAllDto loginDieuDuong = dieuDuongReponsitory.GetDieuDuongDtoGetAllBySDT(sdtDieuDuong);

		if (loginDieuDuong != null) {
			if (loginDieuDuong.getPassword().equals(passDieuDuong)) {
				return new ResponseEntity<DieuDuongGetAllDto>(loginDieuDuong, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("Sai Pass", HttpStatus.BAD_REQUEST);
			}
		}
		return new ResponseEntity<String>("Khong tim thay dieu duong co sdt la: " + sdtDieuDuong, HttpStatus.OK);
	}

	// lay danh sach dieu duong theo dao tao vien
	@GetMapping("/getDieuDUongByDaoTaoVienId/{daoTaoVien_ID}")
	public Object getDieuDUongByDaoTaoVienId(@PathVariable("daoTaoVien_ID") int daoTaoVien_ID) {
		List<DieuDuongGetAllDto> listDieuDuong = dieuDuongReponsitory
				.GetDieuDuongDtoGetAllByDaoTaoVienID(daoTaoVien_ID);
		if (listDieuDuong.isEmpty()) {
			return new ResponseEntity<String>("[NULL] - Danh Sach Trong", HttpStatus.OK);
		}
		return new ResponseEntity<List<DieuDuongGetAllDto>>(listDieuDuong, HttpStatus.OK);
	}

	// API - LAY TAT CA DANH SACH DIEU DUONG THEO FORM
	@GetMapping("/dieuDUong_ID/{dieuDuong_Id}")
	public Object getDieuDuongById(int dieuDuong_Id) {
		DieuDuongGetAllDto dieuDuong = dieuDuongReponsitory.GetDieuDuongDtoGetAllById(dieuDuong_Id);
		if (dieuDuong == null) {
			return new ResponseEntity<String>("[NULL] , Khong Tim Thay", HttpStatus.OK);
		}
		return new ResponseEntity<DieuDuongGetAllDto>(dieuDuong, HttpStatus.OK);
	}

	// API - LAY DANH SACH DIEU DUONG THEO LOAI MA DIEU DUONG
	@GetMapping("/maDieuDuong/{maDieuDuong}")
	public Object getDieuDUongByMaDieuDuong(String maDieuDuong) {
		DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong(maDieuDuong);
		return new ResponseEntity<DieuDuong>(dieuDuong, HttpStatus.OK);
	}

	// API - THEM MOI DIEU DUONG
	@PostMapping("")
	public Object AddNewDieuDuong(@RequestBody DieuDuongInsertDto dieuDuongInsertDto) {

		// check so dien thoai
		if (dieuDuongReponsitory.GetDieuDuongBySDT(dieuDuongInsertDto.getSoDienThoai()) != null) {
			return new ResponseEntity<String>("SDT Dieu Duong Da Ton Tai", HttpStatus.BAD_REQUEST);
		}

		// check email
		if (dieuDuongReponsitory.GetDieuDuongByEmail(dieuDuongInsertDto.getEmail()) != null) {
			return new ResponseEntity<String>("Email Dieu Duong Da Ton Tai", HttpStatus.BAD_REQUEST);
		}

		// check cmnd
		if (chungMinhReponsitory.getCmndBySoCmnd(dieuDuongInsertDto.getSoCMND()) != null) {
			return new ResponseEntity<String>("So CMND Da Ton Tai", HttpStatus.BAD_REQUEST);
		}

		if (dieuDuongService.AddNewDieuDuong(dieuDuongInsertDto)) {

			// tim dieu duong vua moi them de tra ve
			DieuDuongGetAllDto entity = dieuDuongReponsitory
					.GetDieuDuongDtoGetAllByEmail(dieuDuongInsertDto.getEmail());
			return new ResponseEntity<DieuDuongGetAllDto>(entity, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Insert Failed, Loi Khong Xac Dinh...", HttpStatus.BAD_REQUEST);
	}

	// API - CAP NHAT THONG TIN(FORM) DIEU DUONG
	@PutMapping("/{dieuDuong_ID}")
	public Object UpdateDieuDuong(@PathVariable("dieuDuong_ID") int dieuDuong_ID,
			@RequestBody DieuDuongEditDto dieuDuongEditDto) {
		DieuDuong dd = dieuDuongReponsitory.findById(dieuDuong_ID).orElse(null);
		CMND_DieuDuong cmnd = chungMinhReponsitory.getCmndByDieuDuongID(dieuDuong_ID);

		/*
		 * kiem tra email update co trung vs email co san => trung => update binh thuong
		 * => khac => chay ham check xem co ton tai email vua cap nhat trong database
		 * hay khong
		 */

		System.out.println("email co san: " + dd.getEmail());
		System.out.println("email update: " + dieuDuongEditDto.getEmail());

		if (dieuDuongEditDto.getEmail().equals(dd.getEmail())) {
			System.out.println("da trung email");
			/*
			 * kiem tra cmnd update co trung vs cmnd co san => trung => update binh thuong
			 * => khac => chay ham check xem co ton tai cmnd vua cap nhat trong database hay
			 * khong
			 */
			if (dieuDuongEditDto.getSoCMND().equals(cmnd.getSoCMND())) {
				// neu email va cmnd dieu trung => UPDATE
				System.out.println("da trung cmnd");
				if (dieuDuongService.UpdateDieuDuong(dieuDuong_ID, dieuDuongEditDto)) {

					// tim dieu duong vua update tra ve
					DieuDuongGetAllDto entity = dieuDuongReponsitory.GetDieuDuongDtoGetAllById(dieuDuong_ID);
					return new ResponseEntity<DieuDuongGetAllDto>(entity, HttpStatus.OK);
				}
			} else {
				// cmnd cap nhat khac voi cmnd co san => check cmnd
				if (chungMinhReponsitory.getCmndBySoCmnd(dieuDuongEditDto.getSoCMND()) != null) {
					return new ResponseEntity<String>("So CMND Da Ton Tai", HttpStatus.BAD_REQUEST);
				}
			}
		} else {
			// email cap nhat khac voi email co san => check email
			if (dieuDuongReponsitory.GetDieuDuongByEmail(dieuDuongEditDto.getEmail()) != null) {
				return new ResponseEntity<String>("Email Dieu Duong Da Ton Tai", HttpStatus.BAD_REQUEST);
			}
		}

		if (dieuDuongService.UpdateDieuDuong(dieuDuong_ID, dieuDuongEditDto)) {
			// tim dieu duong vua update tra ve
			DieuDuongGetAllDto entity = dieuDuongReponsitory.GetDieuDuongDtoGetAllById(dieuDuong_ID);
			return new ResponseEntity<DieuDuongGetAllDto>(entity, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Cap Nhat That Bai, Loi Khong Xac Dinh..." + dieuDuong_ID,
				HttpStatus.BAD_REQUEST);
	}

	// API - XOA DIEU DUONG
	@DeleteMapping("/{dieuDuong_ID}")
	public Object DeleteDieuDuong(@PathVariable int dieuDuong_ID) {
		if (dieuDuongReponsitory.existsById(dieuDuong_ID)) {
			dieuDuongService.DeleteDieuDuong(dieuDuong_ID);
			return new ResponseEntity<String>("Da Xoa", HttpStatus.OK);
		}
		return new ResponseEntity<String>("Xoa That Bai ,Id ko tồn tại!", HttpStatus.BAD_REQUEST);
	}
}
