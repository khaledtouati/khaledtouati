package com.userfront.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.userfront.domain.PrimaryTransaction;


 
public interface ExporttransactionService {

	
	ByteArrayInputStream transactionpdfreport(List<PrimaryTransaction> primaryTransaction);

	ByteArrayInputStream transactionexcelreport(List<PrimaryTransaction> primaryTransaction) throws IOException;
}
