import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent { 
    
    constructor() {
      this.cardId = 0; // or any other initial value
    }

    @Input() cardId: number;
}
