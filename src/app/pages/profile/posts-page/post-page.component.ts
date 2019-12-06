import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/services/candidate-services/posts.service';
import { Post } from 'app/services/candidate-services/models/posts.model';


@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostsPageComponent implements OnInit {


posts:Post[]=[];
public post:Post={content:''};


constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts=posts;
      console.log(posts);
    });

  }
  addPost() {
    console.log('adding post : ' + this.post.content);
    this.postsService.addPost(this.post.content).subscribe(Post=>{
    this.posts.push(Post);
    });

  }

  deletePost(id:number)
  {
    var i;
    for(i=0;i<this.posts.length;i++)
    {
        if(this.posts[i].id===id)
        {
          this.posts.splice(i,1);
          this.postsService.deletePost(id).subscribe();
          break;
        }
    }
  }





}
