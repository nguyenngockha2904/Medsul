package com.isc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dto.DieuDuongGetAllDto;
import com.isc.dto.DieuDuongInsertDto;
import com.isc.entity.CMND_DieuDuong;
import com.isc.entity.DieuDuong;
import com.isc.repository.ChungMinhReponsitory;
import com.isc.repository.DieuDuongReponsitory;

@Service
public class DieuDuongService {

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	@Autowired
	private ChungMinhReponsitory chungMinhReponsitory;

	// get all
	public List<DieuDuongGetAllDto> GetAllDieuDuong() {
		List<DieuDuong> lstDieuDuong = dieuDuongReponsitory.findAll();
		List<DieuDuongGetAllDto> lstDTO = new ArrayList<>();
		for (int i = 0; i < lstDieuDuong.size(); i++) {
			DieuDuongGetAllDto dieuDuongDTO = new DieuDuongGetAllDto();
			dieuDuongDTO.setDieuDuong_Id(lstDieuDuong.get(i).getDieuDuong_Id());
			dieuDuongDTO.setMaDieuDuong(lstDieuDuong.get(i).getMaDieuDuong());
			dieuDuongDTO.setHoTen(lstDieuDuong.get(i).getHoTen());
			dieuDuongDTO.setGioiTinh(lstDieuDuong.get(i).getGioiTinh());
			dieuDuongDTO.setNgaySinh(lstDieuDuong.get(i).getNgaySinh());
			dieuDuongDTO.setSoDienThoai(lstDieuDuong.get(i).getSoDienThoai());
			dieuDuongDTO.setPassword(lstDieuDuong.get(i).getPassword());
			dieuDuongDTO.setEmail(lstDieuDuong.get(i).getEmail());
			dieuDuongDTO.setDiaChi(lstDieuDuong.get(i).getDiaChi());
			dieuDuongDTO.setAvatar(lstDieuDuong.get(i).getAvatar());
			dieuDuongDTO.setLaDaoTaoVien(lstDieuDuong.get(i).getLaDaoTaoVien());
			dieuDuongDTO.setTinhThanh_ID(lstDieuDuong.get(i).getTinhThanh_ID());

			// vi
			dieuDuongDTO.setTrangThai(lstDieuDuong.get(i).getTrangThai());
			dieuDuongDTO.setTongTien(lstDieuDuong.get(i).getViDienTu().get(0).getTongTien());
			dieuDuongDTO.setNganHangLienKet(lstDieuDuong.get(i).getViDienTu().get(0).getNganHangLienKet());
			dieuDuongDTO.setSoTaiKhoanNganHang(lstDieuDuong.get(i).getViDienTu().get(0).getSoTaiKhoanNganHang());

			// cmnd
			dieuDuongDTO.setSoCMND(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getSoCMND());
			dieuDuongDTO.setNoiCap(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getNoiCap());
			dieuDuongDTO.setNgayCapCMND(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getNgayCap());
			dieuDuongDTO.setDiaChiThuongTruCMND(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getDiaChi());
			dieuDuongDTO.setQueQuanCMND(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getQueQuan());
			dieuDuongDTO.setAnhMatTruoc(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getAnhMatTruoc());
			dieuDuongDTO.setAnhMatSau(lstDieuDuong.get(i).getDmnd_dieuDuong().get(0).getAnhMatSau());

			lstDTO.add(dieuDuongDTO);
		}
		return lstDTO;
	}

	public boolean AddNewDieuDuong(DieuDuongInsertDto dieuDuongInsertDto) {
		System.out.println("1");
		DieuDuong checkDD = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong(dieuDuongInsertDto.getMaDieuDuong());
		System.out.println("2");
		if (checkDD == null) {

			DieuDuong dd = new DieuDuong();
			CMND_DieuDuong cmnd = new CMND_DieuDuong();

			System.out.println("chay vo day dc r");
			dd.setMaDieuDuong(dieuDuongInsertDto.getMaDieuDuong());
			dd.setHoTen(dieuDuongInsertDto.getHoTen());
			dd.setGioiTinh(dieuDuongInsertDto.getGioiTinh());
			dd.setSoDienThoai(dieuDuongInsertDto.getSoDienThoai());
			dd.setPassword(dieuDuongInsertDto.getPassword());
			dd.setNgaySinh(dieuDuongInsertDto.getNgaySinh());
			dd.setEmail(dieuDuongInsertDto.getEmail());
			dd.setTrangThai(dieuDuongInsertDto.getTrangThai());
			dd.setTinhThanh_ID(dieuDuongInsertDto.getTinhThanh_ID());
			dd.setLaDaoTaoVien(dieuDuongInsertDto.getLaDaoTaoVien());
			dd.setDiaChi(dieuDuongInsertDto.getDiaChi());
			dd.setAvatar(dieuDuongInsertDto.getAvatar());
			dieuDuongReponsitory.save(dd);

			System.out.println("save duoc dd");

			DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong(dieuDuongInsertDto.getMaDieuDuong());

			cmnd.setSoCMND(dieuDuongInsertDto.getSoCMND());
			cmnd.setDD_ID(dieuDuong.getDieuDuong_Id());
			cmnd.setNoiCap(dieuDuongInsertDto.getNoiCap());
			cmnd.setNgayCap(dieuDuongInsertDto.getNgayCap());
			cmnd.setDiaChi(dieuDuongInsertDto.getDiaChi());
			cmnd.setQueQuan(dieuDuongInsertDto.getQueQuan());
			cmnd.setAnhMatTruoc(dieuDuongInsertDto.getAnhMatTruoc());
			cmnd.setAnhMatSau(dieuDuongInsertDto.getAnhMatSau());
			chungMinhReponsitory.save(cmnd);

			return true;
		}
		return false;
	}
}
