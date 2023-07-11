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
  nrOfColumns : number;

  constructor(private ProjectsService: ProjectsService, private router: Router ) {
    this.nrOfColumns = 4;
  }  

  ngOnInit(): void {
    this.projectListSubscription = this.ProjectsService.getProjects().subscribe((data: any) => {
      this.projectList = data;
    })
  }

  onResize(event: any) {
    if(event.target.innerWidth > 1025){
      this.nrOfColumns = 4;
    } else if(event.target.innerWidth > 768 && event.target.innerWidth < 1025){
      this.nrOfColumns = 3;
    } else if(event.target.innerWidth > 481 && event.target.innerWidth < 768){
      this.nrOfColumns = 2;
    } else {
      this.nrOfColumns = 1;
    }
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
