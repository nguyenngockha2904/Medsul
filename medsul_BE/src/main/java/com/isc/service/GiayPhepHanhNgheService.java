package com.isc.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.isc.entity.DieuDuong;
import com.isc.entity.GiayPhepHanhNghe;
import com.isc.repository.DieuDuongReponsitory;
import com.isc.repository.GiayPhepHanhNgheRepository;

@Service
public class GiayPhepHanhNgheService {
	@Autowired
	private GiayPhepHanhNgheRepository giayPhepRepo;

	@Autowired
	private DieuDuongReponsitory dieuDuongReponsitory;

	public List<GiayPhepHanhNghe> GetListGiayPhepByDaoTaoVienID(int dieuDuong_Id) {
		DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByID(dieuDuong_Id);
		// return new ResponseEntity<DieuDuong>(dieuDuong2, HttpStatus.OK);
		return giayPhepRepo.findByDaoTaoVien(dieuDuong);

	}
	
	public List<GiayPhepHanhNghe> GetListGiayPhepByDieuDuongID(int dieuDuong_Id) {
		DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByID(dieuDuong_Id);
		// return new ResponseEntity<DieuDuong>(dieuDuong2, HttpStatus.OK);
		return giayPhepRepo.findByDieuDuong(dieuDuong);

	}
	public List<GiayPhepHanhNghe> GetListGiayPhepKhongTrungDieuDuongByDaoTaoVienID(int dieuDuong_Id) {
		DieuDuong dieuDuong = dieuDuongReponsitory.GetDieuDuongByID(dieuDuong_Id);

		List<GiayPhepHanhNghe> lstGiayPhep = giayPhepRepo.findByDaoTaoVien(dieuDuong);

		List<GiayPhepHanhNghe> lstGiayPhepKhongTrung = new ArrayList<>();

		for (int i = 0; i < lstGiayPhep.size(); i++) {
			// System.out.println("soluong vong lap đầu" + i);

			if (lstGiayPhepKhongTrung.size() > 0) {
				// System.out.println("soluong vong lap đầu 2" + i);
				for (int j = 0; j < lstGiayPhepKhongTrung.size(); j++) {
					// System.out.println("soluong vong lap sau" + j);
					if (lstGiayPhep.get(i).getGiayPhep_DieuDuong_Id() != lstGiayPhepKhongTrung.get(j)
							.getGiayPhep_DieuDuong_Id()) {
						lstGiayPhepKhongTrung.add(lstGiayPhep.get(i));

					}
				}
			} else {
				lstGiayPhepKhongTrung.add(lstGiayPhep.get(i));
			}

		}

		return lstGiayPhep;

	}
}
