import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(){
    try {
      return this.http.get('https://practicefullstackapp.azurewebsites.net/projects');
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
  
  getProject(id:number){
    try {
      return this.http.get('https://practicefullstackapp.azurewebsites.net/projects/' + id);
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
}
