import { Component, OnInit } from '@angular/core';
import { CharacterListService } from 'src/app/Services/character-list.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characterList: any;
  characterList$: any = [];

  constructor(private characterListService: CharacterListService ) { }

  // option one - needs unsubscribeing
  // ngOnInit(): void {
  //   this.characterListService.getCharacterList().subscribe((data: any) => {
  //     this.characterList = data;
  //   })
  // }

  // option two - doesn't need unsubscribeing
  ngOnInit(): void {
   this.characterList$ = this.characterListService.getCharacterList()
  }

  deleteCard(id: number): void {
    console.log(id)
    this.characterListService.deleteCharacter(id)
      .subscribe((data: any) => {
        this.characterList$ = [];
        this.characterList$ = this.characterListService.getCharacterList()
      });
  }

}


