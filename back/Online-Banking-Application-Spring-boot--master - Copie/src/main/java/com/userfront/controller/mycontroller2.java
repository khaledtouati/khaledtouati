package com.userfront.controller;

import java.security.Principal;
import java.util.List;
import com.email.model.EmailRequest;
import com.email.model.EmailResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.Recipient;
import com.userfront.domain.SavingsTransaction;
import com.userfront.resource.EmailService;
//import com.userfront.service.EmailService2;
import com.userfront.service.TransactionService;
import com.userfront.service.UserServiceImpl.TransactionServiceImpl;

@RestController
@RequestMapping("/api")
public class mycontroller2 {
	
	
	
	
	
	
//	@Autowired
//	EmailService2 emailService;
//
//	@GetMapping("/sendEmail")
//	public String sendEmail() {
//		return emailService.sendEmail();
//	}
//	
//	@GetMapping("/sendEmailwithAttachment")
//	public String sendEmailwithAttachment() {
//		return emailService.sendEmailwithAttachment();
//	}
//	
//	
	
	@Autowired
	private TransactionService transactionService;
	@Autowired
	private TransactionService savingsTransaction;


	@Autowired
	private TransactionServiceImpl transactionServiceImpl;
	
	
	 @GetMapping(path = "/hello")
	    public ResponseEntity<Object> sayHello()
	    {
	         //Get data from service layer into entityList.
		 List<PrimaryTransaction> primaryTransaction = transactionService.findall();
		 
 	      
	        return new ResponseEntity<Object>(primaryTransaction, HttpStatus.OK);
	    }
	
	 
	 
	 @GetMapping(path = "/sayHel")
	    public ResponseEntity<Object> sayHel()
	    {
	         //Get data from service layer into entityList.
		 List<PrimaryTransaction> primaryTransaction = transactionService.findAllActiveUsers();
		 
	      
	        return new ResponseEntity<Object>(primaryTransaction, HttpStatus.OK);
	    }
	

	 
	 @GetMapping(path = "/Saving")
	    public ResponseEntity<Object> Saving()
	    {
	         //Get data from service layer into entityList.
		 List<SavingsTransaction> savingsTransaction = transactionService.findallsavings();
		 
	      
	        return new ResponseEntity<Object>(savingsTransaction, HttpStatus.OK);
	    }
	 
	 
//	 
//	 
//	 @GetMapping(path = "/SavingsTransaction")
//	    public ResponseEntity<Object> SavingsTransaction()
//	    {
//	         //Get data from service layer into entityList.
//		 List<SavingsTransaction> savingsTransaction = transactionService.findAllSavingsTransaction();
//		 
//	      
//	        return new ResponseEntity<Object>(savingsTransaction, HttpStatus.OK);
//	    }
//	 
//	 
//	 
	 //4
	 @GetMapping(path = "/findAllSavingsbytype")
	    public List<SavingsTransaction> Savings()
	    {
	         //Get data from service layer into entityList.
 		 
	      
	        return transactionServiceImpl.findAllSavingsbytype();
	    }
	 
	 //5
	 
	 @GetMapping(path = "/amountbalance")
	    public List<SavingsTransaction> amountbalance()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionServiceImpl.amountbalance();
	    }
	 
	 
	 
	 
	 @GetMapping(path = "/Savi")
	    public List<SavingsTransaction> Savi()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionService.findallsavings();
	    }
	
	 
	 
	 @GetMapping(path = "/sorteed")
	    public List<PrimaryTransaction>  sorteed()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return savingsTransaction.sorteed();
	    }
	
	//1 
	 @GetMapping(path = "/sumsavings")
	    public List<SavingsTransaction>  nativeQuery()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return savingsTransaction.nativeQuery();
	    }
	
	 //2
	 @GetMapping(path = "/savebytype")
	    public List<SavingsTransaction>  savebytype()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionServiceImpl.savebytype();
	    }
	 
	 
	 //3
	 @GetMapping(path = "/ordertype")
	    public List<SavingsTransaction>  ordertype()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionServiceImpl.ordertype();
	    }
	 
	 
	 
	 
	 @GetMapping(path = "/Sav")
	    public List<Recipient> Sav(Principal ahmed)
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionService.findRecipientList(ahmed);
	    }
	 
	 
	 
	 
	 
	 
	 
	 
	
	  
	 @GetMapping(path = "/amount")
	    public double amount()
	    {
	         //Get data from service layer into entityList.
		 
	      
	        return transactionService.amount();
	    }
	
	 
	 
	 
	 
	 
	 
	
//	  @RequestMapping("/my") 
//	  public String findall() {
//	  
//	  List<PrimaryTransaction> primaryTransaction = transactionService.findall();
//	  
//	  
//	  return "mycon";
//	  }
//	
//	@RequestMapping("/primaryAccount")
//	public String primaryAccount(Model model, Principal principal) {
//		List<PrimaryTransaction> primaryTransactionList = transactionService.findall();
//		
//	 
//        model.addAttribute("primaryTransactionList", primaryTransactionList);
//		
//		return "mycon";
//	}
	
 
	
	
	//1 p
		 @GetMapping(path = "/sumsprimary")
		    public List<PrimaryTransaction>  pnativeQuery()
		    {
		         //Get data from service layer into entityList.
			 
		      
		        return transactionServiceImpl.pnativeQuery();
		    }
		
		 //2 p
		 @GetMapping(path = "/primarysavebytype")
		    public List<PrimaryTransaction>  psavebytype()
		    {
		         //Get data from service layer into entityList.
			 
		      
		        return transactionServiceImpl.psavebytype();
		    }
		 
		 
		 //3 p
		 @GetMapping(path = "/primaryordertype")
		    public List<PrimaryTransaction>  pordertype()
		    {
		         //Get data from service layer into entityList.
			 
		      
		        return transactionServiceImpl.pordertype();
		    }
	
		 
		 //4  p
		 @GetMapping(path = "/primarySavingsbytype")
		    public List<PrimaryTransaction> primarySavings()
		    {
   
		        return transactionServiceImpl.pfindAllSavingsbytype();
		    }
		 
		 //5
		 
		 @GetMapping(path = "/primaryamountbalance")
		    public List<PrimaryTransaction> pamountbalance()
		    {
		         //Get data from service layer into entityList.
			 
		      
		        return transactionServiceImpl.pamountbalance();
		    }
		 
 
	
}
