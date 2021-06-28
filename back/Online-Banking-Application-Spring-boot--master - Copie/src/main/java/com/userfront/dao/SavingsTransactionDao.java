package com.userfront.dao;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.SavingsTransaction;

@Repository
public interface SavingsTransactionDao extends JpaRepository<SavingsTransaction, Long> {

    List<SavingsTransaction> findAll();
    
 
    
//    @Transactional
//    @Query("SELECT u FROM SavingsTransaction u WHERE u.type = 'Transfer'  ")
//   List<SavingsTransaction>  findAllSavingsTransaction();
    
//    @Transactional
//    @Query("SELECT u FROM SavingsTransaction u ORDER BY amount DESC  ")
//   List<SavingsTransaction>  findAllSavingsTransaction();
//    
//    
    
 
    
											//5//
     @Query("SELECT SUM(amount),availableBalance,type  FROM SavingsTransaction  u GROUP BY  u.type ")
   List<SavingsTransaction>  amountbalance();
  
    
    //											//4//
    //@Query("SELECT COUNT(type),description FROM SavingsTransaction   where type  LIKE 'Transfer%' ")
    @Transactional
   @Query("SELECT COUNT(type),description,type FROM SavingsTransaction  u GROUP BY  u.type ")
  List<SavingsTransaction>  findAllSavingsbytype();
   
//    
     
//   					//3//
   @Query(
		   value = "SELECT * FROM savings_transaction u ORDER BY  u.type ", 
		   nativeQuery = true)
   List<SavingsTransaction> ordertype();
    
   
   									//1//
   @Query("SELECT SUM(amount),type,savingsAccount FROM SavingsTransaction u where description  LIKE 'Withdraw%' GROUP BY u.savingsAccount, u.type   ")
 List<SavingsTransaction> nativeQuery();
//    		
   										//2//
  @Query("SELECT SUM(amount),type,savingsAccount FROM SavingsTransaction u GROUP BY  u.type   ")
  List<SavingsTransaction> savebytype();
//   
   
   
   
 
    
}

