import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/Services/projects.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projectList: any;
  projectList$: any = [];
  projectListSubscription: Subscription = new Subscription();

  constructor(private ProjectsService: ProjectsService, private router: Router ) { }

  

  ngOnInit(): void {
    this.projectListSubscription = this.ProjectsService.getProjects().subscribe((data: any) => {
      this.projectList = data;
    })
  }

  ngOnDestroy(): void {
    this.projectListSubscription.unsubscribe();
  }

  // alternativs solution for getting data from service
  // ngOnInit(): void {
  //   this.projectList$ = this.ProjectsService.getProjects();
  //   console.log("works");
  // }

  myFunction(id : number) : void {
    this.router.navigate(['/details', id]); 
  }
}
