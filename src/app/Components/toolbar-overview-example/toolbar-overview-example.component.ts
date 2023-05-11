import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar-overview-example',
  templateUrl: './toolbar-overview-example.component.html',
  styleUrls: ['./toolbar-overview-example.component.css']
})
export class ToolbarOverviewExampleComponent {
  constructor() { }

  @Output() toggleEvent = new EventEmitter();
 
  toggle() {
    this.toggleEvent.emit();
  }
}
