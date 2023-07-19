import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';


@Component({
  selector: 'app-toolbar-overview-example',
  templateUrl: './toolbar-overview-example.component.html',
  styleUrls: ['./toolbar-overview-example.component.css']
})
export class ToolbarOverviewExampleComponent {


  constructor(private router: Router, private route: ActivatedRoute) { }

  @Output() toggleEvent = new EventEmitter();
 
  goBack() : void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  goForward() : void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toggle() {
    this.toggleEvent.emit();
  }

  openProfile() {
    console.log("open profile");
  }
}
