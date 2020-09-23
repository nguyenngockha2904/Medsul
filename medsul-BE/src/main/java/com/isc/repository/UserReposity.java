package com.isc.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.isc.entity.DichVu;
import com.isc.entity.User;

public interface UserReposity extends JpaRepository<User, Integer> {

	
}
