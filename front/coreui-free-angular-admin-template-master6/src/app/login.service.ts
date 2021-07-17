import { Injectable } from '@angular/core';
 import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LoginService {

  loggedIn: boolean;  
  username: string;
  password: string;
  constructor (private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    let url = "http://localhost:8081/index";
    let params = 'username='+username+'&password='+password;
    let headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
      // 'Access-Control-Allow-Credentials' : true
    });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  logout() {
     let url = "http://localhost:8081/logout";
     return this.http.get(url, { withCredentials: true });
   }


   getUsers() {
    let url = "http://localhost:8081/api/user/all";
    return this.http.get(url, { withCredentials: true });
  }
}
