import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarOverviewExampleComponent } from './toolbar-overview-example.component';

describe('ToolbarOverviewExampleComponent', () => {
  let component: ToolbarOverviewExampleComponent;
  let fixture: ComponentFixture<ToolbarOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarOverviewExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
