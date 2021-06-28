package com.userfront.dao;

import com.userfront.domain.PrimaryAccount;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by z00382545 on 10/21/16.
 */
@Repository
public interface PrimaryAccountDao extends JpaRepository<PrimaryAccount,Long> {

    PrimaryAccount findByAccountNumber (int accountNumber);
}
