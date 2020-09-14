package com.isc.controller;

import java.util.List;
import java.util.stream.Stream;

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

import com.isc.dto.AddManagerDto;
import com.isc.dto.AdminInformationDto;
import com.isc.dto.UpdateAdminInformationDto;
import com.isc.entity.Admin;
import com.isc.entity.LoaiDichVu;
import com.isc.repository.AdminRepository;

@RestController
@RequestMapping("api/admin")
public class AdminController {
	@Autowired
	AdminRepository adminRepository;

	@GetMapping("")
	public Object findAllManager() {
		List<Admin> admin = adminRepository.findAll();
		return new ResponseEntity<List<Admin>>(admin, HttpStatus.OK);
	}

	@GetMapping("/informationAdmin")
	public Object showAdminOrManagerInformation() {
		List<AdminInformationDto> admin = adminRepository.showInformationOfAdminOrManager();
		return new ResponseEntity<List<AdminInformationDto>>(admin, HttpStatus.OK);
	}

	@PostMapping("")
	public Object addNewManager(@RequestBody AddManagerDto addManagerDto) {
		ModelMapper modelMapper = new ModelMapper();
		Admin admin = modelMapper.map(addManagerDto, Admin.class);
		if (adminRepository.save(admin) != null) {
			return new ResponseEntity<Admin>(admin, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Add Manager Failse!", HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/{ADMIN_ID}")
	public Object updateManager(@PathVariable("ADMIN_ID") int ADMIN_ID, @RequestBody AddManagerDto addManagerDto) {
//		if(adminRepository.existsById(ADMIN_ID)) {
//			return new ResponseEntity<String>("Duplicated ID!", HttpStatus.BAD_REQUEST);
//		}
		if (adminRepository.findById(ADMIN_ID).orElse(null) != null) {
			ModelMapper modelMapper = new ModelMapper();
			Admin admin = modelMapper.map(addManagerDto, Admin.class);
			admin.setADMIN_ID(ADMIN_ID);
			Admin entity = adminRepository.save(admin);
			return new ResponseEntity<Admin>(entity, HttpStatus.CREATED);
		}
		return new ResponseEntity<String>("Update Fail!", HttpStatus.BAD_REQUEST);
	}

}
