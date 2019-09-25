import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  myProjects(userId) {
    return this.http.get("https://hostapicrowd.herokuapp.com/userProjects/" + userId);
  }

  myDonations(userId) {
    return this.http.get("https://hostapicrowd.herokuapp.com/userDonations/" + userId);
  }

  myWallet(userId) {
    return this.http.get("https://hostapicrowd.herokuapp.com/userWallet/" + userId);
  }

  topUp(userId, credit, money) {
    const up = {
      credit: credit,
      money: money
    }

    return this.http.put("https://hostapicrowd.herokuapp.com/topup/" + userId, up);
  }
}
