package com.userfront.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.email.model.EmailRequest;
import com.email.model.EmailResponse;
import com.userfront.domain.PrimaryTransaction;
import com.userfront.domain.SavingsTransaction;
import com.userfront.domain.User;
import com.userfront.service.TransactionService;
import com.userfront.service.UserService;

@RestController
@RequestMapping("/api")
//@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin(origins = "*" , allowedHeaders ="*")
public class UserResource {

    @Autowired
    private UserService userService;

    @Autowired
    private TransactionService transactionService;

    @RequestMapping(value = "/ret", method = RequestMethod.GET)
    public List<User> ret() {
        System.out.println("kk");
        String a = "hello";
        return userService.findUserList();
    }
    
    
    @RequestMapping(value = "/user/all", method = RequestMethod.GET)
    public List<User> userList() {
        return userService.findUserList();
    }

    @RequestMapping(value = "/user/primary/transaction", method = RequestMethod.GET)
    public List<PrimaryTransaction> getPrimaryTransactionList(@RequestParam("username") String username) {
        return transactionService.findPrimaryTransactionList(username);
    }

    
//    @RequestMapping(value = "/user/savings/transaction/{username}", method = RequestMethod.GET)
//    public List<SavingsTransaction> getSavingsTransactionList(@PathVariable("username") String username) {
//        return transactionService.findSavingsTransactionList(username);
//    }
//
//    
    
    @RequestMapping(value = "/user/savings/transaction", method = RequestMethod.GET)
    public List<SavingsTransaction> getSavingsTransactionList(@RequestParam("username") String username) {
        return transactionService.findSavingsTransactionList(username);
    }

    @RequestMapping("/user/{username}/enable")
    public void enableUser(@PathVariable("username") String username) {
        userService.enableUser(username);
    }

    @RequestMapping("/user/{username}/disable")
    public void diableUser(@PathVariable("username") String username) {
        userService.disableUser(username);
    }
    
    
    

    @Autowired
    private EmailService emailService;


    @RequestMapping("/welcome")
    public  String welcome(){
        return  "Hello";
    }
    //api to send email
    @RequestMapping(value = "/sendemail",method = RequestMethod.POST)
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request)
    {
        boolean result=this.emailService.sendEmail(request.getSubject(),request.getMessage(),request.getTo());
        if (result)
        {
            return ResponseEntity.ok(new EmailResponse("Email Sent Successfully...."));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new EmailResponse("Email Not Send"));
        }
    }
	
 
 

}
