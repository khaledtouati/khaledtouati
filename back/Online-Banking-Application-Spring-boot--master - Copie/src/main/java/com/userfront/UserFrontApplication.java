package com.userfront;

import java.text.SimpleDateFormat;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling
public class UserFrontApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserFrontApplication.class, args);
	}
	
	

	@Autowired
	private EmailSenderService service;

 
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

	
	@EventListener(ApplicationReadyEvent.class)
	@Scheduled(fixedRate = 1000000)   //10000s
	public void triggerMail() throws MessagingException {

		service.sendEmailWithAttachment("khaledtouatikhaled91@gmail.com",
				"This is Email Body with Attachment...",
				"This email has attachment",
				"C:\\\\Users\\\\khaled\\\\Documents\\\\t.txt");

	}
	
}
