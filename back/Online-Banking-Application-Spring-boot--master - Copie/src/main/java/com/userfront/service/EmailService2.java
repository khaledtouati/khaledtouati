/*
 * package com.userfront.service;
 * 
 * 
 * import java.io.File; import java.util.List;
 * 
 * import javax.mail.internet.MimeMessage;
 * 
 * import org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.mail.SimpleMailMessage; import
 * org.springframework.mail.javamail.JavaMailSender; import
 * org.springframework.mail.javamail.MimeMessageHelper; import
 * org.springframework.stereotype.Service;
 * 
 * import com.userfront.dao.PrimaryTransactionDao; import
 * com.userfront.dao.UserDao; import com.userfront.domain.PrimaryTransaction;
 * import com.userfront.domain.User;
 * 
 * @Service public class EmailService2 {
 * 
 * 
 * 
 * @Autowired JavaMailSender javaMailSender;
 * 
 * 
 * 
 * public String sendEmail() { SimpleMailMessage message = new
 * SimpleMailMessage();
 * 
 * message.setFrom("khaledtouatikhaled91@gmail.com");
 * message.setTo("khaledtouatikhaled91@gmail.com");
 * message.setSubject("Test Subject"); message.setText("ss");
 * 
 * javaMailSender.send(message);
 * 
 * return "Mail sent successfully"; }
 * 
 * public String sendEmailwithAttachment() { try { MimeMessage message =
 * javaMailSender.createMimeMessage();
 * 
 * MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
 * 
 * messageHelper.setFrom("khaledtouatikhaled91@gmail.com");
 * messageHelper.setTo("khaled.touaiti@ensi-uma.tn");
 * messageHelper.setSubject("Test Subject"); messageHelper.setText("atch");
 * 
 * 
 * File file = new File("C:\\Users\\khaled\\Downloads\\myp.pdf");
 * 
 * messageHelper.addAttachment(file.getName(), file);
 * 
 * javaMailSender.send(message);
 * 
 * return "Mail sent successfully";
 * 
 * } catch (Exception e) { return "Mail sent failed"; } } }
 */