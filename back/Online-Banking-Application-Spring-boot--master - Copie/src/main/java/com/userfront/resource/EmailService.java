package com.userfront.resource;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import java.io.File;
import java.util.Properties;
@Service
public class EmailService {
	  @Autowired
	  JavaMailSender javaMailSender;
	  
	  
    public boolean sendEmail(String subject,String message,String to)
    {
            boolean f=false;

            String from="khaledtouatikhaled91@gmail.com";
            //variable for gmail
            String host="smtp.gmail.com";

            //get the system properties
        Properties properties=System.getProperties();
        System.out.println("PROPERTIES"+properties);

        //set host
        properties.put("mail.smtp.host",host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");

        //step:1 to get the session object
        Session session=Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("khaledtouatikhaled91@gmail.com","rkupwewzjgdnwnfe");
            }
        });

        session.setDebug(true);

        //step : 2 compose the message [text,multi media]
        MimeMessage m = new MimeMessage(session);

        try {
 

            //from email
            m.setFrom(from);

            //adding recipient to message
            m.addRecipient(Message.RecipientType.TO,new InternetAddress(to));

            //adding subject to message
            m.setSubject(subject);

            //adding text to message
            m.setText(message);

            //3) create MimeBodyPart object and set your message text     
            BodyPart messageBodyPart1 = new MimeBodyPart();  
            messageBodyPart1.setText("This is message body"); 
            //4) create new MimeBodyPart object and set DataHandler object to this object      
            MimeBodyPart messageBodyPart2 = new MimeBodyPart();  
        
       //     String filename = "C:\\\\\\\\Users\\\\\\\\khaled\\\\\\\\Documents\\\\\\\\t.txt";//change accordingly  
            String filename = "C:\\Users\\khaled\\Downloads\\"+message;//change accordingly  
            DataSource source = new FileDataSource(filename);  
            messageBodyPart2.setDataHandler(new DataHandler(source));  
            messageBodyPart2.setFileName(filename);
            //5) create Multipart object and add MimeBodyPart objects to this object      
            Multipart multipart = new MimeMultipart();  
            multipart.addBodyPart(messageBodyPart1);  
            multipart.addBodyPart(messageBodyPart2);  
          
            //6) set the multiplart object to the message object  
            m.setContent(multipart );  
            //7 send message using Transport class
            Transport.send(m);

            System.out.println("Sent Success.......");
            f=true;

        }
        catch (Exception e){
            e.printStackTrace();
        }
        return f;
    }
    

     
}
