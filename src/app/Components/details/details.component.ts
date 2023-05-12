import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectsService } from 'src/app/Services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnDestroy, OnInit{
  project: any;
  projectListSubscription: Subscription = new Subscription();
  
  constructor(private route: ActivatedRoute, private ProjectsService: ProjectsService,) { }    

  ngOnInit():void  {
    this.route.params.subscribe((params) => {
      const projectId = +params['id'];
      this.projectListSubscription = this.ProjectsService.getProject(projectId).subscribe((data: any) => {
        this.project = data;
      })
    });
  }

  ngOnDestroy(): void {
    this.projectListSubscription.unsubscribe();
  }
}
