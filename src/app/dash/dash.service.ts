import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http: HttpClient) { }

  crowdFunding() {
    return this.http.get("https://hostapicrowd.herokuapp.com/crowdFunding");
  }

  projectSuccess() {
    return this.http.get("https://hostapicrowd.herokuapp.com/success");
  }

  totalNoOfProject() {
    return this.http.get("https://hostapicrowd.herokuapp.com/totalProject");
  }
}
