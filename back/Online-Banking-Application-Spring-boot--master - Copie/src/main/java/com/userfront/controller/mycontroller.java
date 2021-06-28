package com.userfront.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userfront.dao.PrimaryTransactionDao;
import com.userfront.domain.PrimaryAccount;
import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.User;
import com.userfront.service.TransactionService;
import com.userfront.service.UserServiceImpl.TransactionServiceImpl;

@Controller
@RequestMapping("/cont")
public class mycontroller {
	
	@Autowired
	private TransactionService transactionService;

	@Autowired
	private TransactionServiceImpl transactionServiceImpl;
	
	
//	  @RequestMapping("/my") 
//	  public String findall() {
//	  
//	  List<PrimaryTransaction> primaryTransaction = transactionService.findall();
//	  
//	  
//	  return "primaryTransaction";
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
	
	@RequestMapping("/custom")
	public String findAllActiveUsers(Model model, Principal principal) {
		List<PrimaryTransaction> primaryTransactionList = transactionService.findAllActiveUsers();
		
	 
        model.addAttribute("primaryTransactionList", primaryTransactionList);
		
		return "mycon";
	}
	
	
	
}
