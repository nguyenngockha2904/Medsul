package com.isc.controller;

import java.util.Date;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isc.dto.InsertDatLichUserDto;
import com.isc.entity.ChiTietDat;
import com.isc.entity.DatLich;
import com.isc.entity.DichVu;
import com.isc.entity.TinhThanh;
import com.isc.repository.ChiTietDatRepository;
import com.isc.repository.DatLichRepository;
import com.isc.repository.DichVuRepository;
import com.isc.repository.TinhThanhRepository;
import com.isc.repository.UserReposity;

@RestController
@RequestMapping("api/user")
public class UserController {
	
	@Autowired
	DatLichRepository datLichRepository;
	
	@Autowired
	ChiTietDatRepository ctdRepository;
	
	@Autowired
	TinhThanhRepository tinhThanhRepository;
	
	@Autowired
	DichVuRepository dichVuRepository;
	@Autowired
	UserReposity userRepository;
	@PostMapping("/user/{DV_ID}")
	public Object addNewDatLich(@Valid @PathVariable("DV_ID") int DV_ID,@RequestBody InsertDatLichUserDto insertDatLichUserDto, BindingResult erros) {
		
		DatLich datLich = new DatLich();
		ChiTietDat chiTietDat = new ChiTietDat();
		DichVu dichVu = dichVuRepository.getDVByDichVuID(DV_ID);
		TinhThanh tinhThanh = tinhThanhRepository.findById(insertDatLichUserDto.getTINHT_ID()).orElse(null);
		datLich.setDL_HOTEN(insertDatLichUserDto.getDL_HOTEN());
		datLich.setDL_SDT(insertDatLichUserDto.getDL_SDT());
		datLich.setDL_EMAIL(insertDatLichUserDto.getDL_EMAIL());
		datLich.setDL_DIACHI(insertDatLichUserDto.getDL_DIACHI());
		datLich.setDL_GHICHU(insertDatLichUserDto.getDL_GHICHU());
	
		datLich.setDL_NGAYDAT(insertDatLichUserDto.getDL_NGAYDAT());
		datLich.setDL_TINHTRANG(insertDatLichUserDto.getDL_TINHTRANG());
		datLich.setTINHT_ID(insertDatLichUserDto.getTINHT_ID());
		System.out.println("tong tien: " +dichVu.getGiaDichVu() +" - "+tinhThanh.getHeSoTinhThanhUser());
		datLich.setDL_TONGTIEN(dichVu.getGiaDichVu()-((dichVu.getGiaDichVu() * tinhThanh.getHeSoTinhThanhUser()/100)));
		
		datLichRepository.save(datLich);

		chiTietDat.setDV_ID(DV_ID);
		chiTietDat.setDL_ID(datLich.getDL_ID());
		chiTietDat.setCTD_DONGIA(dichVu.getGiaDichVu());
		chiTietDat.setCTD_NGAYBATDAU(insertDatLichUserDto.getCTD_NGAYBATDAU());
		chiTietDat.setCTD_GIOBATDAU(insertDatLichUserDto.getCTD_GIOBATDAU());

		ctdRepository.save(chiTietDat);
	
		return new ResponseEntity<DatLich>(datLich, HttpStatus.CREATED);
		
	}
}
