import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    try {
      return this.http.get('https://practicefullstackapp.azurewebsites.net/blogposts');
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
  
  getPost(id:number){
    try {
      return this.http.get('https://practicefullstackapp.azurewebsites.net/blogposts/' + id);
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
}
