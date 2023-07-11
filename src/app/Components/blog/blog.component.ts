import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogpostService } from 'src/app/Services/blogpost.service';
import { Router } from '@angular/router';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  postList: any;
  postListSubscription: Subscription = new Subscription();
  nrOfColumns : number; 
      
  constructor(private BlogpostService: BlogpostService, private router: Router) {
    this.nrOfColumns = 4; 
  }
  
  ngOnInit(): void {
    this.postListSubscription = this.BlogpostService.getPosts().subscribe((data: any) => {
      this.postList = data;
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
    this.postListSubscription.unsubscribe();
  }

  myFunction(id : number) : void {
    this.router.navigate(['/blog-details', id]); 
  }
}
