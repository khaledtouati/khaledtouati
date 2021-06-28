package com.userfront.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
 
import javax.servlet.http.HttpServletResponse;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.userfront.service.TransactionService;
import com.userfront.service.UserServiceImpl.UserExcelExporter;
import com.userfront.domain.PrimaryTransaction;
@RestController
public class excel {
 
	@Autowired
	private TransactionService transactionService;
     
    @GetMapping("/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
         
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=users_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);
        
        List<PrimaryTransaction> listPrimaryTransaction   = transactionService.findall();
    //    List<User> listUsers = service.listAll();
         
        UserExcelExporter excelExporter = new UserExcelExporter(listPrimaryTransaction);
         
        excelExporter.export(response);    
    }  
 
}