package com.userfront.service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import com.userfront.domain.PrimaryAccount;
import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.Recipient;
import com.userfront.domain.SavingsAccount;
import com.userfront.domain.SavingsTransaction;

public interface TransactionService {
	
	
	List<PrimaryTransaction> findAllActiveUsers();
	
	List<PrimaryTransaction> findall();
	
	
	List<PrimaryTransaction> findAllByPrimaryAccount();
	
	List<PrimaryTransaction> findPrimaryTransactionList(String username);

    List<SavingsTransaction> findSavingsTransactionList(String username);

    void savePrimaryDepositTransaction(PrimaryTransaction primaryTransaction);

    void saveSavingsDepositTransaction(SavingsTransaction savingsTransaction);
    
    void savePrimaryWithdrawTransaction(PrimaryTransaction primaryTransaction);
    void saveSavingsWithdrawTransaction(SavingsTransaction savingsTransaction);
    
    void betweenAccountsTransfer(String transferFrom, String transferTo, String amount, PrimaryAccount primaryAccount, SavingsAccount savingsAccount) throws Exception;
    
    List<Recipient> findRecipientList(Principal principal);

    Recipient saveRecipient(Recipient recipient);

    Recipient findRecipientByName(String recipientName);

    void deleteRecipientByName(String recipientName);
    
    void toSomeoneElseTransfer(Recipient recipient, String accountType, String amount, PrimaryAccount primaryAccount, SavingsAccount savingsAccount);

 	
	List<SavingsTransaction> findallsavings();
	List<SavingsTransaction> findAllSavingsTransaction();
	
	
	double amount();

	List<PrimaryTransaction> sorteed();

	List<SavingsTransaction> nativeQuery();  
	
}
