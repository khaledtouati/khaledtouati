package com.userfront.controller;

 
import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.springframework.http.HttpHeaders;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.SavingsTransaction;
import com.userfront.service.TransactionService;
import com.userfront.service.ExporttransactionService;

@RestController
@RequestMapping("/cont")
public class mycontroller3 {
	
	@Autowired
	private TransactionService transactionService;
 
	@Autowired
	private com.userfront.service.ExporttransactionService exporttransactionService;
 


	 
	
	 @GetMapping(path = "/export")
	  public ResponseEntity<InputStreamResource> exportpdf()
	    { 
	    List<PrimaryTransaction> primaryTransaction =
	    		(List<PrimaryTransaction>) transactionService.findall();
	    
	 ByteArrayInputStream   bais = exporttransactionService.transactionpdfreport(primaryTransaction);
	 
	  org.springframework.http.HttpHeaders headers = new HttpHeaders();
	 	 
	 headers.add("Content-Disposition", "inline; filename=trans.pdf");
	 
     return  ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF)
    		 .body(new InputStreamResource(bais) );
	 
	    }
	 
	 @GetMapping(path = "/ex")
 
	  public ResponseEntity<InputStreamResource> excel() throws IOException
	    { 
	    List<PrimaryTransaction> primaryTransaction =
	    		(List<PrimaryTransaction>) transactionService.findall();
	    
	 ByteArrayInputStream   bais = exporttransactionService.transactionexcelreport(primaryTransaction);
	 
	  org.springframework.http.HttpHeaders headers = new HttpHeaders();
	 	 
	 headers.add("Content-Disposition", "inline; filename=trans.xlsx");
	 
    return  ResponseEntity.ok().headers(headers).body(new InputStreamResource(bais) );
	 
	    }
	 
	
	
	
		/*
		 * @GetMapping(path = "/SavingsTransaction") public List<SavingsTransaction>
		 * Savings() { //Get data from service layer into entityList.
		 * 
		 * 
		 * return transactionService.findAllSavingsTransaction(); }
		 */
	
//	 
//  @RequestMapping(value = "/transaction/{id}", method = RequestMethod.GET)
//   public Optional<PrimaryTransaction> getSavingsTransactionList(@PathVariable("id") Long id) {
//       return transactionService.findAllById(id);
//   }
//	 
	 
	 
  @RequestMapping(value = "/transaction", method = RequestMethod.GET)
  public List<PrimaryTransaction> getSavingsTransactionList() {
      return transactionService.findAllByPrimaryAccount();
  }
	 
	 
	 
	 
//	 
//	 
//	
//	 @GetMapping(path = "/hello")
//	    public ResponseEntity<Object> sayHello()
//	    {
//	         //Get data from service layer into entityList.
//		 List<PrimaryTransaction> primaryTransaction = transactionService.findall();
//		 
// 	      
//	        return new ResponseEntity<Object>(primaryTransaction, HttpStatus.OK);
//	    }
//	
//	 
//	 
//	 @GetMapping(path = "/sayHel")
//	    public ResponseEntity<Object> sayHel()
//	    {
//	         //Get data from service layer into entityList.
//		 List<PrimaryTransaction> primaryTransaction = transactionService.findAllActiveUsers();
//		 
//	      
//	        return new ResponseEntity<Object>(primaryTransaction, HttpStatus.OK);
//	    }
//	
//
//	 
//	 @GetMapping(path = "/Saving")
//	    public ResponseEntity<Object> Saving()
//	    {
//	         //Get data from service layer into entityList.
//		 List<SavingsTransaction> savingsTransaction = transactionService.findallsavings();
//		 
//	      
//	        return new ResponseEntity<Object>(savingsTransaction, HttpStatus.OK);
//	    }
//	 
//	 
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
	
}
	 