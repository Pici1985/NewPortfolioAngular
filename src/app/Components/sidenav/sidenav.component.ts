import { Component, Input, OnInit, HostBinding, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input('clickSubject') clickSubject:Subject<any> = new Subject();
  
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor() {
    
  }

  ngOnInit(): void {
    this.clickSubject.subscribe(e => {
      this.drawer.toggle();
    });     
  }

  ngOnDestroy() {
    this.clickSubject.unsubscribe();
}

}
