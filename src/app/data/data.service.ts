import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor( private http: HttpClient) { }

  // getSubscriptionTypes(): Observable<string[]> {
  //   return of(['Monthly', 'Annual', 'Lifetime']);
  // }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/renUw00w1aaGaFZB5Tqa', userSettings); 
    
    //return of(userSettings);
  }
}

