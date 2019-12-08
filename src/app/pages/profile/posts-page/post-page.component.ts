import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/services/candidate-services/posts.service';
import { CommentsService } from 'app/services/candidate-services/comments.service';
import { ReactionsService } from 'app/services/candidate-services/reactions.service';
import { Post } from 'app/services/candidate-services/models/posts.model';
import { Comment } from 'app/services/candidate-services/models/comment.model';
import { Reaction } from 'app/services/candidate-services/models/reaction.model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { threadId } from 'worker_threads';




@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostsPageComponent implements OnInit {

interval: any;
liked: boolean = false;
posts:any[]=[];
unlikedId:number = -1;
likes: number = 0;
removed: number= 0;
closeResult: string;
public post:Post={content:''};
public comment:Comment={idPost:0,content:''};
public reaction:Reaction={idPost:0,type:''};


constructor(private postsService: PostsService,private commentsService: CommentsService,
private reactionsService: ReactionsService,private modalService: NgbModal) { }
ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.posts=posts;
    });
}

    ngOnDestroy() {
    }

  refreshData(){
    this.postsService.getPosts().subscribe(posts => {
      this.posts=posts;
    });
}

  addPost() {
    this.postsService.addPost(this.post.content).subscribe(post=>{
      this.refreshData();
    });
  }

  addComment(idPost: number) {
    this.commentsService.addComment(idPost,this.comment.content).subscribe(post=>{
      this.refreshData();
    });

  }

  addReaction(post: Post) {
    if (this.didLike(post)) {
    this.deleteReaction(post.reactions[0].id);
      this.removed = 1;
      this.unlikedId = post.id;
      this.refreshData();
      console.log('POST UNLIKED ? ' + this.unlikedId + ' ' + post.id);
    //console.log('new likes : ' + this.likes);
    }
    else {
    this.reactionsService.addReaction(post.id, 'Like').subscribe(Post=>{
      this.removed = 0;
      this.unlikedId=-1;
      this.refreshData();
          console.log('issou?');
    });
    }
  }

    didLike(post: Post) {
      if (typeof(post.reactions[0]) === 'undefined') {
        return false;
      } else {
        if(this.removed === 1)
        {
          return false;
        }
        if(post.reactions[0].reactedPost.id === post.id)
        {
        console.log('already liked ====> should remove like');
      }
      return(post.reactions[0].reactedPost.id === post.id);
      }
  }
  removePost(id:number) {
          this.postsService.deletePost(id).subscribe();
  }
    deleteComment(id:number) {
          this.commentsService.deleteComment(id).subscribe();
  }
      deleteReaction(id:number) {
      this.reactionsService.deleteReaction(id).subscribe();
  }

getLikes(reactions:any[]) {
      return reactions.filter(r => (r.type) === 'Like');
}

getDislikes(reactions:any[]) {
      return reactions.filter(r => (r.type) === 'Dislike');
}

private likesNumber(post:Post[]) {
   return (post.reactions.length);
   
}
likesNumberAfterUnlike(post:Post[]) {
   console.log('len == ' + post.reactions.length);
   return (post.reactions.length) - this.removed;
   
}

delete(id:number){
  var i;
    for(i=0;i<this.posts.length;i++)
    {
        if(this.posts[i].id==id)
        {
          this.posts.splice(i,1);
          break;
        }
    }
}

    open(content, type) {
        if (type === 'sm') {
            console.log('aici');
            this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
