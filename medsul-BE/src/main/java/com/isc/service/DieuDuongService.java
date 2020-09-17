package com.isc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.dto.DieuDuongEditDto;
import com.isc.dto.DieuDuongGetAllDto;
import com.isc.dto.DieuDuongInsertDto;
import com.isc.entity.CMND_DieuDuong;
import com.isc.entity.DieuDuong;
import com.isc.entity.ViDienTu;
import com.isc.repository.ChungMinhReponsitory;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.repository.ViDienTuRepository;

@Service
public class DieuDuongService {

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	@Autowired
	private ChungMinhReponsitory chungMinhReponsitory;

	@Autowired
	private ViDienTuRepository viDienTuReponsitory;

	// xu ly lay danh sach tat ca dieu duong
	public List<DieuDuongGetAllDto> GetAllDieuDuong() {
//		List<DieuDuong> lstDieuDuong = dieuDuongReponsitory.findAll();
//		List<DieuDuongGetAllDto> lstDTO = new ArrayList<>();
//		for (int i = 0; i < lstDieuDuong.size(); i++) {
//			DieuDuongGetAllDto dieuDuongDTO = new DieuDuongGetAllDto();
//			dieuDuongDTO.setDieuDuong_Id(lstDieuDuong.get(i).getDieuDuong_Id());
//			dieuDuongDTO.setMaDieuDuong(lstDieuDuong.get(i).getMaDieuDuong());
//			dieuDuongDTO.setHoTen(lstDieuDuong.get(i).getHoTen());
//			dieuDuongDTO.setGioiTinh(lstDieuDuong.get(i).getGioiTinh());
//			dieuDuongDTO.setNgaySinh(lstDieuDuong.get(i).getNgaySinh());
//			dieuDuongDTO.setSoDienThoai(lstDieuDuong.get(i).getSoDienThoai());
//			dieuDuongDTO.setPassword(lstDieuDuong.get(i).getPassword());
//			dieuDuongDTO.setEmail(lstDieuDuong.get(i).getEmail());
//			dieuDuongDTO.setDiaChi(lstDieuDuong.get(i).getDiaChi());
//			dieuDuongDTO.setAvatar(lstDieuDuong.get(i).getAvatar());
//			dieuDuongDTO.setLaDaoTaoVien(lstDieuDuong.get(i).getLaDaoTaoVien());
//			dieuDuongDTO.setTinhThanh_ID(lstDieuDuong.get(i).getTinhThanh_ID());
//
//			// vi dien tu
//			dieuDuongDTO.setTrangThai(lstDieuDuong.get(i).getTrangThai());
//			dieuDuongDTO.setTongTien(lstDieuDuong.get(i).getViDienTu().get(0).getTongTien());
//			dieuDuongDTO.setNganHangLienKet(lstDieuDuong.get(i).getViDienTu().get(0).getNganHangLienKet());
//			dieuDuongDTO.setSoTaiKhoanNganHang(lstDieuDuong.get(i).getViDienTu().get(0).getSoTaiKhoanNganHang());
//
//			// cmnd
//			dieuDuongDTO.setSoCMND(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getSoCMND());
//			dieuDuongDTO.setNoiCap(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getNoiCap());
//			dieuDuongDTO.setNgayCapCMND(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getNgayCap());
//			dieuDuongDTO.setDiaChiThuongTruCMND(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getDiaChiThuongChu());
//			dieuDuongDTO.setQueQuanCMND(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getQueQuan());
//			dieuDuongDTO.setAnhMatTruoc(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getAnhMatTruoc());
//			dieuDuongDTO.setAnhMatSau(lstDieuDuong.get(i).getCmnd_dieuDuong().get(0).getAnhMatSau());
//
//			lstDTO.add(dieuDuongDTO);
//		}
//		return lstDTO;
		return null;
	}

	public DieuDuongGetAllDto GetAllDieuDuongByID(int dieuDuong_Id) {

		DieuDuong dieuDuong = dieuDuongReponsitory.getOne(dieuDuong_Id);

		DieuDuongGetAllDto dieuDuongDTO = new DieuDuongGetAllDto();
		dieuDuongDTO.setDieuDuong_Id(dieuDuong.getDieuDuong_Id());
		dieuDuongDTO.setMaDieuDuong(dieuDuong.getMaDieuDuong());
		dieuDuongDTO.setHoTen(dieuDuong.getHoTen());
		dieuDuongDTO.setGioiTinh(dieuDuong.getGioiTinh());
		dieuDuongDTO.setNgaySinh(dieuDuong.getNgaySinh());
		dieuDuongDTO.setSoDienThoai(dieuDuong.getSoDienThoai());
		dieuDuongDTO.setPassword(dieuDuong.getPassword());
		dieuDuongDTO.setEmail(dieuDuong.getEmail());
		dieuDuongDTO.setDiaChi(dieuDuong.getDiaChi());
		dieuDuongDTO.setAvatar(dieuDuong.getAvatar());
		dieuDuongDTO.setLaDaoTaoVien(dieuDuong.getLaDaoTaoVien());
		dieuDuongDTO.setTinhThanh_Id(dieuDuong.getTinhThanh_Id());

		// vi
		dieuDuongDTO.setTrangThai(dieuDuong.getTrangThai());
		dieuDuongDTO.setTongTien(dieuDuong.getViDienTu().get(0).getTongTien());
		dieuDuongDTO.setNganHangLienKet(dieuDuong.getViDienTu().get(0).getNganHangLienKet());
		dieuDuongDTO.setSoTaiKhoanNganHang(dieuDuong.getViDienTu().get(0).getSoTaiKhoanNganHang());

		// cmnd
		dieuDuongDTO.setSoCMND(dieuDuong.getCmnd_dieuDuong().get(0).getSoCMND());
		dieuDuongDTO.setNoiCap(dieuDuong.getCmnd_dieuDuong().get(0).getNoiCap());
		dieuDuongDTO.setNgayCapCMND(dieuDuong.getCmnd_dieuDuong().get(0).getNgayCapCMND());
		dieuDuongDTO.setDiaChiThuongTruCMND(dieuDuong.getCmnd_dieuDuong().get(0).getDiaChiThuongTruCMND());
		dieuDuongDTO.setQueQuanCMND(dieuDuong.getCmnd_dieuDuong().get(0).getQueQuanCMND());
		dieuDuongDTO.setAnhMatTruoc(dieuDuong.getCmnd_dieuDuong().get(0).getAnhMatTruoc());
		dieuDuongDTO.setAnhMatSau(dieuDuong.getCmnd_dieuDuong().get(0).getAnhMatSau());

		return dieuDuongDTO;
	}

	// xu ly them moi mot dieu duong
	public boolean AddNewDieuDuong(DieuDuongInsertDto dieuDuongInsertDto) {

		int maxDieuDuongID = dieuDuongReponsitory.maxDieuDuong_ID();

		System.out.println("id max: " + maxDieuDuongID);
		DieuDuong checkDD = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong("DD000" + (maxDieuDuongID + 1));
		System.out.println("ma dieu duong " + "DD000" + (maxDieuDuongID + 1));

		if (checkDD == null) {

			DieuDuong dd = new DieuDuong();
			CMND_DieuDuong cmnd = new CMND_DieuDuong();
			ViDienTu viDienTu = new ViDienTu();

			// LAY THONG TIN DIEU DUONG => SAVE
			dd.setMaDieuDuong("DD000" + (maxDieuDuongID + 1));
			dd.setHoTen(dieuDuongInsertDto.getHoTen());
			dd.setGioiTinh(dieuDuongInsertDto.getGioiTinh());
			dd.setSoDienThoai(dieuDuongInsertDto.getSoDienThoai());
			dd.setPassword("123");
			dd.setNgaySinh(dieuDuongInsertDto.getNgaySinh());
			dd.setEmail(dieuDuongInsertDto.getEmail());
			dd.setTrangThai(1);
			dd.setTinhThanh_Id(dieuDuongInsertDto.getTinhThanh_ID());
			dd.setLaDaoTaoVien(2);
			dd.setDiaChi(dieuDuongInsertDto.getDiaChi());
			dd.setAvatar(dieuDuongInsertDto.getAvatar());
			dieuDuongReponsitory.save(dd);

			// lay thong tin dieu duong vua save vao => lay id
			DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByMaDieuDuong("DD000" + (maxDieuDuongID + 1));

			System.out.println("ma dieu duong " + dieuDuong.getMaDieuDuong());
			System.out.println("id dieu duong " + dieuDuong.getDieuDuong_Id());

			// SAVE THONG TIN CMND DIEU DUONG VUA THEM
			cmnd.setSoCMND(dieuDuongInsertDto.getSoCMND());
			cmnd.setDD_ID(dieuDuong.getDieuDuong_Id());
			cmnd.setNoiCap(dieuDuongInsertDto.getNoiCap());
			cmnd.setNgayCapCMND(dieuDuongInsertDto.getNgayCapCMND());
			cmnd.setDiaChiThuongTruCMND(dieuDuongInsertDto.getDiaChi());
			cmnd.setQueQuanCMND(dieuDuongInsertDto.getQueQuanCMND());
			cmnd.setAnhMatTruoc(dieuDuongInsertDto.getAnhMatTruoc());
			cmnd.setAnhMatSau(dieuDuongInsertDto.getAnhMatSau());
			chungMinhReponsitory.save(cmnd);

			// TAO VI DIEN TU CHO DIEU DUONG VUA THEM VAO
			viDienTu.setDieuDuong_ID(dieuDuong.getDieuDuong_Id());
			viDienTu.setTongTien(0);
			viDienTuReponsitory.save(viDienTu);

			return true;
		}
		return false;
	}

	//
	public boolean UpdateDieuDuong(int dieuDuong_ID, DieuDuongEditDto dieuDuongEditDto) {

		DieuDuong dieuDuong = dieuDuongReponsitory.findById(dieuDuong_ID).orElse(null);
		if (dieuDuong != null) {

			dieuDuong.setHoTen(dieuDuongEditDto.getHoTen());
			dieuDuong.setGioiTinh(dieuDuongEditDto.getGioiTinh());
			dieuDuong.setPassword(dieuDuongEditDto.getPassword());
			dieuDuong.setNgaySinh(dieuDuongEditDto.getNgaySinh());
			dieuDuong.setEmail(dieuDuongEditDto.getEmail());
			dieuDuong.setTrangThai(dieuDuongEditDto.getTrangThai());
			dieuDuong.setTinhThanh_Id(dieuDuongEditDto.getTinhThanh_ID());
			dieuDuong.setLaDaoTaoVien(dieuDuongEditDto.getLaDaoTaoVien());
			dieuDuong.setDiaChi(dieuDuongEditDto.getDiaChi());
			dieuDuong.setAvatar(dieuDuongEditDto.getAvatar());
			dieuDuongReponsitory.save(dieuDuong);

			CMND_DieuDuong cmnd = chungMinhReponsitory.getCmndByDieuDuongID(dieuDuong_ID);
			cmnd.setSoCMND(dieuDuongEditDto.getSoCMND());
			cmnd.setNoiCap(dieuDuongEditDto.getNoiCap());
			cmnd.setNgayCapCMND(dieuDuongEditDto.getNgayCapCMND());
			cmnd.setDiaChiThuongTruCMND(dieuDuongEditDto.getDiaChi());
			cmnd.setQueQuanCMND(dieuDuongEditDto.getQueQuanCMND());
			cmnd.setAnhMatTruoc(dieuDuongEditDto.getAnhMatTruoc());
			cmnd.setAnhMatSau(dieuDuongEditDto.getAnhMatSau());
			chungMinhReponsitory.save(cmnd);

			ViDienTu vdt = viDienTuReponsitory.GetViDienTuByDieuDuongID(dieuDuong_ID);
			vdt.setSoTaiKhoanNganHang(dieuDuongEditDto.getSoTaiKhoanNganHang());
			vdt.setNganHangLienKet(dieuDuongEditDto.getNganHangLienKet());
			viDienTuReponsitory.save(vdt);

			return true;
		}

		return false;
	}
}
