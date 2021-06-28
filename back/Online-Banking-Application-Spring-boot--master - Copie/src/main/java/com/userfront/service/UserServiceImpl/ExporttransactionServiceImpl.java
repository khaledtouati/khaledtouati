package com.userfront.service.UserServiceImpl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Stream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.userfront.domain.PrimaryTransaction;
import com.userfront.service.ExporttransactionService;

@Service
public class ExporttransactionServiceImpl implements ExporttransactionService {

	
public ByteArrayInputStream transactionpdfreport(List<PrimaryTransaction> primaryTransaction) {
	 
	Document document = new Document();
	
	ByteArrayOutputStream out = new ByteArrayOutputStream();
	
	try {
		
		PdfWriter.getInstance(document, out);
		document.open();
		
		com.itextpdf.text.Font font = FontFactory.getFont(FontFactory.COURIER,14, BaseColor.BLACK); 
		Paragraph para = new Paragraph("trasaction liste", font);
		para.setAlignment(Element.ALIGN_CENTER);
		document.add(para);
		document.add(Chunk.NEWLINE);
		
		PdfPTable table = new PdfPTable(7);
		
		// make Co
		
		Stream.of("id","amount","description","date","type" ,"status","AvailableBalance")
		.forEach(HeaderTitle -> {
			PdfPCell header = new PdfPCell();
			com.itextpdf.text.Font heaFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
			header.setPhrase(new Phrase(HeaderTitle, font));
			table.addCell(header);
		
		});
		
		for (PrimaryTransaction pt: primaryTransaction) {
			
	        String toStringBigDec=  pt.getAvailableBalance().toString();
	        
	        String id=  pt.getId().toString();
			
	        String	amoun  = String.valueOf(pt.getAmount());
	        	 
	        String		datee = 	pt.getDate().toString();
	        
			
			PdfPCell titleCell = new PdfPCell(new Phrase(id));
			titleCell.setPaddingLeft(1);
			titleCell.setVerticalAlignment(Element.ALIGN_CENTER);
			titleCell.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(titleCell);
				
			
			PdfPCell amount = new PdfPCell(new Phrase(amoun));
			amount.setPaddingLeft(1);
			amount.setVerticalAlignment(Element.ALIGN_CENTER);
			amount.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(amount);
				
			PdfPCell description = new PdfPCell(new Phrase(pt.getDescription()));
			description.setPaddingLeft(1);
			description.setVerticalAlignment(Element.ALIGN_CENTER);
			description.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(description);
				

			PdfPCell date = new PdfPCell(new Phrase(datee));
			date.setPaddingLeft(1);
			date.setVerticalAlignment(Element.ALIGN_CENTER);
			date.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(date);
				
			
			
	        
	        
		
			

			

			
			PdfPCell type = new PdfPCell(new Phrase(pt.getType()));
			type.setPaddingLeft(1);
			type.setVerticalAlignment(Element.ALIGN_CENTER);
			type.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(type);
				
			
			
			PdfPCell status = new PdfPCell(new Phrase(pt.getStatus()));
			status.setPaddingLeft(1);
			status.setVerticalAlignment(Element.ALIGN_CENTER);
			status.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(status);
			
			PdfPCell AvailableBalance = new PdfPCell(new Phrase(toStringBigDec));
			AvailableBalance.setPaddingLeft(1);
			AvailableBalance.setVerticalAlignment(Element.ALIGN_CENTER);
			AvailableBalance.setHorizontalAlignment(Element.ALIGN_LEFT);
			table.addCell(AvailableBalance);
				
			
//			
//			PdfPCell primary_account_id = new PdfPCell();
//			status.setPaddingLeft(1);
//			status.setVerticalAlignment(Element.ALIGN_CENTER);
//			status.setHorizontalAlignment(Element.ALIGN_LEFT);
//			table.addCell(status);
			
		}
		document.add(table);
		document.close();
		
		
	} catch (DocumentException e) {
		 
		e.printStackTrace();
	}
	
	return new ByteArrayInputStream(out.toByteArray());
	 
}

private Phrase toString(BigDecimal availableBalance) {
	// TODO Auto-generated method stub
	return null;
}


public ByteArrayInputStream transactionexcelreport(List<PrimaryTransaction> primaryTransaction) throws IOException {
	
		String[] columns = {"id","amount","description","date","type" ,"status","AvailableBalance"};
		 Workbook workbook = new XSSFWorkbook();
				 
				
				/* Workbook workbook = new XSSFWorkbook(); */
				
				
		ByteArrayOutputStream out = new ByteArrayOutputStream();	 
		
		CreationHelper creationHelper = workbook.getCreationHelper();
		
	Sheet sheet = workbook.createSheet("trans");
				 
		sheet.autoSizeColumn(columns.length);
		
	Font headerfont = workbook.createFont();
		
		headerfont.setBold(true);
		headerfont.setColor(IndexedColors.BLUE.getIndex());
	
		
		CellStyle cellStyle = workbook.createCellStyle();
	cellStyle.setFont(headerfont);
 		
		// row 
		
		Row headerrow = sheet.createRow(0);
		
		//header

		for(int col=0; col<columns.length; col++) {
			
			Cell cell =  headerrow.createCell(col);
			cell.setCellValue(columns[col]);
			cell.setCellStyle(cellStyle);
			
		}
		CellStyle cellStyle2 = workbook.createCellStyle();
		cellStyle2.setDataFormat(creationHelper.createDataFormat().getFormat("#"));
		int rowindex = 1;
		for (PrimaryTransaction pt: primaryTransaction) {
			
			Row row = sheet.createRow(rowindex++);
			
			row.createCell(0).setCellValue(pt.getId());
			row.createCell(0).setCellValue(pt.getDescription());
			
		}
		
		workbook.write(out);
	 	return new ByteArrayInputStream(out.toByteArray());
//	} catch (Exception e) {
//		// TODO: handle exception
//	}
//		return null;
//  		
}
}
