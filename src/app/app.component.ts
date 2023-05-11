import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clickSubject:Subject<any> = new Subject();
  title = 'AngularProject';
  
  handleEvent() {
    this.clickSubject.next(1);
  }
}
