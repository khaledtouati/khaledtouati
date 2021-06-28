package com.userfront.dao;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.userfront.domain.PrimaryAccount;
import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.SavingsTransaction;
@Repository
public interface PrimaryTransactionDao extends JpaRepository<PrimaryTransaction, Long> {

    List<PrimaryTransaction> findAll();
    
    
    

    @Transactional
    @Query( value = "SELECT * FROM primary_transaction u WHERE u.primary_account_id = 2  " , nativeQuery = true)
    List<PrimaryTransaction> findbyprimaryaccount();
    
   // @Query( value = "SELECT * FROM primary_transaction u WHERE u.primary_account_id = 2  " , nativeQuery = true)
    
    @Transactional
    @Query("SELECT u FROM PrimaryTransaction u GROUP BY  u.type , u.primaryAccount  ")
   List<PrimaryTransaction>  findAllActiveUsers();
    
 
    @Transactional
    @Query("SELECT u FROM SavingsTransaction u ORDER BY amount DESC  ")
   List<SavingsTransaction>  findAllSavingsTransaction();
    
    
    
    @Query("SELECT SUM(amount) FROM SavingsTransaction  where description  LIKE 'Transfer%'   ")
	static
     String  sum() {
		// TODO Auto-generated method stub
		return null;
	}
    
    
    
    
 
	//5//
 //   @Query("SELECT SUM(amount),availableBalance,type  FROM PrimaryTransaction  u GROUP BY  u.type ")

@Query("SELECT SUM(amount),availableBalance,type,COUNT(type),primaryAccount  FROM PrimaryTransaction  u GROUP BY  u.type ")
List<PrimaryTransaction>  amountbalance();


//											//4//
//@Query("SELECT COUNT(type),description FROM SavingsTransaction   where type  LIKE 'Transfer%' ")
@Transactional
@Query("SELECT COUNT(type),description,type FROM PrimaryTransaction  u GROUP BY  u.type ")
List<PrimaryTransaction>  findAllSavingsbytype();

//

////3//
@Query(
value = "SELECT * FROM primary_transaction u ORDER BY  u.type ",  nativeQuery = true)
List<PrimaryTransaction> ordertype();


//1//
@Query("SELECT SUM(amount),type,primaryAccount FROM PrimaryTransaction u where description  LIKE 'Deposit%' GROUP BY u.primaryAccount  ")
List<PrimaryTransaction> nativeQuery();
//
	//2//
@Query("SELECT SUM(amount),type,primaryAccount FROM PrimaryTransaction u GROUP BY  u.type   ")
List<PrimaryTransaction> savebytype();
//

    
    
}
