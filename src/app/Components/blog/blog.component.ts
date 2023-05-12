import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogpostService } from 'src/app/Services/blogpost.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  postList: any;
  postListSubscription: Subscription = new Subscription();

  constructor(private BlogpostService: BlogpostService, private router: Router ) { }
  
  ngOnInit(): void {
    this.postListSubscription = this.BlogpostService.getPosts().subscribe((data: any) => {
      this.postList = data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.postListSubscription.unsubscribe();
  }

  myFunction(id : number) : void {
    this.router.navigate(['/blog-details', id]); 
  }
}
