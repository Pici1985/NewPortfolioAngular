import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CharacterListService {

  constructor(private http: HttpClient){ }

  getCharacterList(){
    try {
      return this.http.get('https://practicefullstackapp.azurewebsites.net/characters');
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
  
  deleteCharacter(id: number){
    try {
      return this.http.delete(`https://practicefullstackapp.azurewebsites.net/characters/${id}`);
    } catch (error: any) {
      console.log(error.toString());
      return error;
    }
  }
}
