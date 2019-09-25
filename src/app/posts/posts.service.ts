import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  saveProject(data) {
    return this.http.post("https://hostapicrowd.herokuapp.com/createProject",data);
  }

  viewProject() {
    return this.http.get("https://hostapicrowd.herokuapp.com/getProject");
  }

  editProject(postId) {
    return this.http.get("https://hostapicrowd.herokuapp.com/getProjectById/"+ postId);
  }

  updateProject(postId,data) {
    return this.http.put("https://hostapicrowd.herokuapp.com/updateProject/" + postId, data);
  }

  deleteProject(postId) {
    return this.http.delete("https://hostapicrowd.herokuapp.com/deleteProject/" + postId);
  }

  likeProject(postId, userId, name) {
    const userData = {
      userId: userId,
      name: name
    }
    return this.http.put("https://hostapicrowd.herokuapp.com/likeProject/" + postId, userData);
  }

  donateToProject(postId, userId, name, donation) {
    const userData = {
      userId: userId,
      name: name,
      donation: donation
    }

    return this.http.put("https://hostapicrowd.herokuapp.com/donation/" + postId, userData);
  }

  commentProject(comment, postId, userId, name) {
    const userData = {
      comment: comment,
      userId: userId,
      name: name,
    }
    
    return this.http.put("https://hostapicrowd.herokuapp.com/commentProject/" + postId, userData);
  }
}
