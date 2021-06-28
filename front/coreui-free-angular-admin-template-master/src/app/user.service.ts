import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
 
 
@Injectable()
export class UserService {
 

  constructor (private http:HttpClient){}


  exportpdf():Observable<Blob>  {
    let url = " http://localhost:8080/cont/export";
    return this.http.get(url, { responseType: 'blob' });
  }


  linechar() {
    let url = "http://localhost:8080/api/sayHel";
    return this.http.get(url, { withCredentials: true });
  }
 
  primaryamountbalance() {
    let url = " http://localhost:8080/api/primaryamountbalance";
    return this.http.get(url, { withCredentials: true });
  }
  countbytype() {
    let url = " http://localhost:8080/api/primarySavingsbytype";
    return this.http.get(url, { withCredentials: true });
  }


  primarysavebytype() {
    let url = " http://localhost:8080/api/primarysavebytype";
    return this.http.get(url, { withCredentials: true });
  }

  sumsprimary() {
    let url = " http://localhost:8080/api/sumsprimary";
    return this.http.get(url, { withCredentials: true });
  }



  getTransactionList() {
    let url = "http://localhost:8080/api/hello";
    return this.http.get(url, { withCredentials: true });
  }


  
  print() {
    let url = "http://localhost:8080/api/ret";
    return this.http.get(url, { withCredentials: true });
  }

  getUsers() {
    let url = "http://localhost:8080/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }

   getPrimaryTransactionList(username: string) {
     let url = "http://localhost:8080/api/user/primary/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   getSavingsTransactionList(username: string) {
     let url = "http://localhost:8080/api/user/savings/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   enableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8080/api/user/"+username+"/disable";
     return this.http.get(url, { withCredentials: true });
   }

}
