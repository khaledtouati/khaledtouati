package com.userfront.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userfront.domain.User;
@Repository
public interface UserDao extends JpaRepository<User, Long> {
	User findByUsername(String username);
    User findByEmail(String email);
    @Transactional
    List<User> findAll();
    
    User findByPhone(String phone);
    
}
