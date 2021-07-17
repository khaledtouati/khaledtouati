import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
 
 
@Injectable()
export class UserService {
 

  constructor (private http:HttpClient){}


  exportpdf():Observable<Blob>  {
    let url = " http://localhost:8081/cont/export";
    return this.http.get(url, { responseType: 'blob' });
  }


  linechar() {
    let url = "http://localhost:8081/api/sayHel";
    return this.http.get(url, { withCredentials: true });
  }
 
  primaryamountbalance() {
    let url = " http://localhost:8081/api/primaryamountbalance";
    return this.http.get(url, { withCredentials: true });
  }
  countbytype() {
    let url = " http://localhost:8081/api/primarySavingsbytype";
    return this.http.get(url, { withCredentials: true });
  }


  primarysavebytype() {
    let url = " http://localhost:8081/api/primarysavebytype";
    return this.http.get(url, { withCredentials: true });
  }

  sumsprimary() {
    let url = " http://localhost:8081/api/sumsprimary";
    return this.http.get(url, { withCredentials: true });
  }



  getTransactionList() {
    let url = "http://localhost:8081/api/hello";
    return this.http.get(url, { withCredentials: true });
  }


  
  print() {
    let url = "http://localhost:8081/api/ret";
    return this.http.get(url, { withCredentials: true });
  }

  getUsers() {
    let url = "http://localhost:8081/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }

   getPrimaryTransactionList(username: string) {
     let url = "http://localhost:8081/api/user/primary/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   getSavingsTransactionList(username: string) {
     let url = "http://localhost:8081/api/user/savings/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
   }

   enableUser (username: string) {
     let url = "http://localhost:8081/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username: string) {
     let url = "http://localhost:8081/api/user/"+username+"/disable";
     return this.http.get(url, { withCredentials: true });
   }

}
