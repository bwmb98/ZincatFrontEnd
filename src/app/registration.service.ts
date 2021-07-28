import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http: HttpClient) { }

  public logInUserFromRemote(user:User):Observable<any>{
      return this._http.post<any>("http://localhost:8080/userLogin", user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
      console.log(user.email);
      console.log(user.firstname);
      console.log(user.lastname);
      console.log(user.password);
    return this._http.post<any>("http://localhost:8080/userRegister", user)
  }
}
 