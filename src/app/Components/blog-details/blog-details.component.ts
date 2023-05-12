import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BlogpostService } from 'src/app/Services/blogpost.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnDestroy, OnInit{
  post: any;
  postSubscription: Subscription = new Subscription();


  constructor(private route: ActivatedRoute, private BlogpostService: BlogpostService,) { }  

  ngOnInit():void  {
    this.route.params.subscribe((params) => {
      const postId = +params['id'];
      this.postSubscription = this.BlogpostService.getPost(postId).subscribe((data: any) => {
        this.post = data;
        console.log(this.post);
      })
    });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
