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

import com.isc.dto.DichVuDto;
import com.isc.entity.DichVu;
import com.isc.repository.DichVuRepository;


@RestController
@RequestMapping("api/dichvu")
public class DichVuController {

	@Autowired
	DichVuRepository dichVuRepository;
	
	@GetMapping("")
	public Object get() {
		List<DichVu> dichVu = dichVuRepository.findAll();
		return new ResponseEntity<List<DichVu>>(dichVu, HttpStatus.OK);
	}
	
	@GetMapping("/getDto")
	public Object getDV() {
		List<DichVuDto> dichVuDto = dichVuRepository.getAllDTO();
		return new ResponseEntity<List<DichVuDto>>(dichVuDto, HttpStatus.OK);
	}
	
	@PostMapping("")
	public Object post(@RequestBody DichVu dichVu) {
		DichVu entity = dichVuRepository.save(dichVu);
		return new ResponseEntity<DichVu>(entity,HttpStatus.CREATED);
	}
	@PutMapping("")
	public Object put( @RequestBody DichVu dichVu) {
		if(dichVuRepository.existsById(dichVu.getDichVu_Id())) {
			DichVu entity = dichVuRepository.save(dichVu);
			return new ResponseEntity<DichVu>(entity, HttpStatus.OK);	
		}
		return new ResponseEntity<String>("Id ko tồn tại!", HttpStatus.BAD_REQUEST);
	}
	@DeleteMapping("/{DichVu_Id}")
	public Object delete(@PathVariable int DichVu_Id) {
		
		if(dichVuRepository.existsById(DichVu_Id)) {
			dichVuRepository.deleteById(DichVu_Id);
			return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);	
		}
		return new ResponseEntity<String>("Id ko tồn tại!", HttpStatus.BAD_REQUEST);
	}
	
}
