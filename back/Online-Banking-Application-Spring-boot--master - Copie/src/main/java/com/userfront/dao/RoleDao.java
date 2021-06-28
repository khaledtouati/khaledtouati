package com.userfront.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userfront.domain.security.Role;
@Repository
public interface RoleDao extends JpaRepository<Role, Integer> {
    Role findByName(String name);
}
