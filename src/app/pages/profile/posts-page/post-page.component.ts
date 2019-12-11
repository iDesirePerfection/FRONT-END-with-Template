import { Component, OnInit } from '@angular/core';
import { PostsService } from 'app/services/candidate-services/posts.service';
import { CommentsService } from 'app/services/candidate-services/comments.service';
import { ReactionsService } from 'app/services/candidate-services/reactions.service';
import { Post } from 'app/services/candidate-services/models/posts.model';
import { Comment } from 'app/services/candidate-services/models/comment.model';
import { Reaction } from 'app/services/candidate-services/models/reaction.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'app/services/user-services/user.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-posts-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostsPageComponent implements OnInit {



interval: any;
liked: boolean = false;
posts:any[]=[];
mylike: boolean=false;
mydislike: boolean=false;
reactionId:number=0;
likes: number = 0;
likeremoved: number= 0;
showInput = true;
showInputCom = true;
emptyInput:boolean = false;
myContent = 'This is the content';
dislikeremoved: number= 0;
closeResult: string;
test:number;
filename:string='';
public post:Post={content:''};
public comment:Comment={idPost:0,content:''};
public reaction:Reaction={idPost:0,type:''};


constructor(private postsService: PostsService,private commentsService: CommentsService,
private reactionsService: ReactionsService,private modalService: NgbModal,
private userService : UserService,private toastr: ToastrService) { }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
          this.posts=posts.reverse();
});
}


    ngOnDestroy() {
    }

  refreshData(){
    this.postsService.getPosts().subscribe(posts => {
      this.posts=posts.reverse();
    });
}


toggleShowInput = function()
     {
         this.showInput = !this.showInput;
     }
     toggleShowInputCom = function()
     {
         this.showInputCom = !this.showInputCom;
     }
  addPost() {
    console.log('file name ============ ' + this.filename);
    if(this.filename === '')
    {
    this.postsService.addPost(this.post.content).subscribe(post=>{
      this.refreshData();
       const options = {
'positionClass': 'toast-bottom',
  };
      this.toastr.info(null, 'your post was shared!');
    });
    }
    else{
    this.postsService.addPostWithFile(this.post.content, this.filename).subscribe(post=>{
      this.refreshData();
       const options = {
'positionClass': 'toast-bottom',
  };
      this.toastr.info(null, 'your post was shared with a file!');
    });
    }
  this.emptyInput=!this.emptyInput;
  }
    shareAction(id :number) {
    this.postsService.sharePost(id).subscribe(update=>{
      this.refreshData();
    });
  }
    updatePost(id:number,content:string) {
    this.postsService.updatePost(id, content).subscribe(post=>{
      this.refreshData();
    });
      this.toastr.info(null, 'your post was updated!');
  }
     updateComment(id:number,content:string) {
    this.commentsService.updateComment(id, content).subscribe(post=>{
      this.refreshData();
    });
      this.toastr.info(null, 'your comment was updated!');
  }
   removePost(id:number) {
   this.postsService.deletePost(id).subscribe(post=>{
    });
      setTimeout(function(){ this.refreshData(); }.bind(this), 400);
      this.toastr.error(null, 'you deleted your post');

  }
     deleteComment(id:number) {
  this.commentsService.deleteComment(id).subscribe(com=>{
    });
      setTimeout(function(){ this.refreshData(); }.bind(this), 400);
      this.toastr.error(null, 'you deleted your comment');

  }
      deleteReaction(id:number) {
      this.reactionsService.deleteReaction(id).subscribe();
  }


  addComment(idPost: number) {
    this.commentsService.addComment(idPost,this.comment.content).subscribe(post=>{
      this.refreshData();
    });

  }
  addLike(post: Post) {
          this.refreshData();
        if (this.didLike(post)) {
      this.getReactionId(post)
      setTimeout(function(){ this.deleteReaction(this.reactionId);console.log('fasakht like after 1s');}.bind(this), 100);
      setTimeout(function(){ this.refreshData(); }.bind(this), 500);
     this.likeremoved = 1;
    }
      else if (this.didDislike(post)) {
      this.getReactionId(post)
      this.deleteReaction(this.reactionId);console.log('fasakht dislike after 1s,adding like!');
      this.refreshData();
      setTimeout(function(){ this.addLike(post);console.log('zedna like after 1s,refreshing!');}.bind(this), 100);
      setTimeout(function(){ this.refreshData(); }.bind(this), 500);
      this.dislikeremoved = 1;
    }
    else {
      setTimeout(function(){this.reactionsService.addReaction(post.id, 'Like').subscribe(Post=>{
    this.dislikeremoved = 0;
      this.likeremoved = 0;
      this.refreshData();
    }); }.bind(this), 100);
    }
  }
    getReactionId(post:Post) {
          post.reactions.forEach((r) => {
          if(r.reactingUser.id == localStorage.getItem('id') )
          {
            this.reactionId = r.id;
          }
    });
    }
  addDislike(post: Post) {
      this.refreshData();
    if (this.didDislike(post)){
      this.getReactionId(post)
      setTimeout(function(){ this.deleteReaction(this.reactionId);console.log('fasakht dislike after 1s');}.bind(this), 100);
      setTimeout(function(){ this.refreshData(); }.bind(this), 500);
      this.dislikeremoved = 1;
    }
      else if (this.didLike(post)) {
      console.log('you have a like at this point and you clicked dislike');
      this.getReactionId(post)
      this.deleteReaction(this.reactionId);
      this.refreshData();
      this.likeremoved = 1;
      setTimeout(function(){ this.addDislike(post);this.refreshData(); }.bind(this), 100);
    }
    else {
      setTimeout(function(){this.reactionsService.addReaction(post.id, 'Dislike').subscribe(Post=>{
      this.dislikeremoved = 0;
      this.likeremoved = 0;
      this.refreshData();
    });}.bind(this), 100);
    }
  }
    didLike(post: Post) {
        this.mylike=false;
      if (typeof(post.reactions[0]) === 'undefined') {
        return false;
      } else {
        if(this.likeremoved === 1)
        {
          return false;
        }
        post.reactions.forEach((r) => {
          console.log(localStorage.getItem('id'));
          if(r.reactingUser.id == localStorage.getItem('id') && r.type === 'Like')
          {
            this.mylike=true;

          }
        });
          return(this.mylike);
      }
  }

  didDislike(post: Post) {
        this.mydislike=false;
      if (typeof(post.reactions[0]) === 'undefined') {
        return false;
      } else {
        if(this.dislikeremoved === 1)
        {
          return false;
        }
        post.reactions.forEach((r) => {
          if(r.reactingUser.id == localStorage.getItem('id') && r.type === 'Dislike')
          {
            this.mydislike=true;
          }
        });
      return(this.mydislike);
      }
  }
 
getLikes(reactions:any[]) {
      return reactions.filter(r => (r.type) === 'Like');
}

getDislikes(reactions:any[]) {
      return reactions.filter(r => (r.type) === 'Dislike');
}


private likesNumber(post:Post) {
   return (post.reactions.filter(r => (r.type) === 'Like')).length;
}
private dislikesNumber(post:Post) {
   return (post.reactions.filter(r => (r.type) === 'Dislike')).length;
}
likesNumberAfterUnlike(post:Post) {
   if(post.reactions.filter(r => (r.type) === 'Like').length - this.likeremoved < 0 ){
     return 0;
   }
   else {
     return((post.reactions.filter(r => (r.type) === 'Like')).length - this.likeremoved);
   }
}
dislikesNumberAfterUndislike(post:Post) {
   if(post.reactions.filter(r => (r.type) === 'Dislike').length - this.dislikeremoved < 0 ){
     return 0;
   }
   else {
     return((post.reactions.filter(r => (r.type) === 'Dislike')).length - this.dislikeremoved);
   }
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
fileChange(event) {
    this.filename = 'assets/img/' + event;
  }


}
