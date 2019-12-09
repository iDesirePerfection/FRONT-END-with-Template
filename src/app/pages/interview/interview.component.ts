import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewService } from 'app/services/interview-services/interview.service';
import { QuizService } from 'app/services/interview-services/quiz.service';
import { Quiz } from 'app/services/interview-services/models/quiz';
import { Interview } from 'app/services/interview-services/models/interview';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxAgoraService, AgoraClient, Stream, ClientEvent, StreamEvent } from 'ngx-agora';


@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

  constructor(private ngxAgoraService:NgxAgoraService,private activatedroute: ActivatedRoute,private interviewService:InterviewService,private quizService:QuizService,private modalService: NgbModal) { 
    this.uid = Math.floor(Math.random() * 100);
  }
id:number;
quiz:Quiz=null;
closeResult;
localCallId = 'agora_local';
remoteCalls: string[] = [];

private client: AgoraClient;
private localStream: Stream;
private uid: number;
show:boolean=true;
livechat(){
  this.show=!this.show;
  this.client = this.ngxAgoraService.createClient({ mode: 'rtc', codec: 'h264' });
    this.assignClientHandlers();

    this.localStream = this.ngxAgoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.assignLocalStreamHandlers();
    this.initLocalStream(() => this.join(uid => this.publish(), error => console.error(error))); 
}
  ngOnInit() {
    this.activatedroute.paramMap.subscribe(result => this.id = Number(result.get('id')));
    this.quizService.displayQuiz(this.id).subscribe(q=>this.quiz=q);
     }

  opena(content) {

  
    this.modalService.open(content, {ariaLabelledBy: 'modal1-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
    join(onSuccess?: (uid: number | string) => void, onFailure?: (error: Error) => void): void {
      this.client.join(null, 'foo-bar', this.uid, onSuccess, onFailure);
    }
    publish(): void {
      this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
    }
    private assignClientHandlers(): void {
      this.client.on(ClientEvent.LocalStreamPublished, evt => {
        console.log('Publish local stream successfully');
      });
  
      this.client.on(ClientEvent.Error, error => {
        console.log('Got error msg:', error.reason);
        if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
          this.client.renewChannelKey(
            '',
            () => console.log('Renewed the channel key successfully.'),
            renewError => console.error('Renew channel key failed: ', renewError)
          );
        }
      });
  
      this.client.on(ClientEvent.RemoteStreamAdded, evt => {
        const stream = evt.stream as Stream;
        this.client.subscribe(stream, { audio: true, video: true }, err => {
          console.log('Subscribe stream failed', err);
        });
      });
  
      this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
        const stream = evt.stream as Stream;
        const id = this.getRemoteId(stream);
        if (!this.remoteCalls.length) {
          this.remoteCalls.push(id);
          setTimeout(() => stream.play(id), 1000);
        }
      });
  
      this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
        const stream = evt.stream as Stream;
        if (stream) {
          stream.stop();
          this.remoteCalls = [];
          console.log(`Remote stream is removed ${stream.getId()}`);
        }
      });
  
      this.client.on(ClientEvent.PeerLeave, evt => {
        const stream = evt.stream as Stream;
        if (stream) {
          stream.stop();
          this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
          console.log(`${evt.uid} left from this channel`);
        }
      });
    }
  
    private getRemoteId(stream: Stream): string {
      return `agora_remote-${stream.getId()}`;
    }
    private assignLocalStreamHandlers(): void {
      this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
        console.log('accessAllowed');
      });
  
      // The user has denied access to the camera and mic.
      this.localStream.on(StreamEvent.MediaAccessDenied, () => {
        console.log('accessDenied');
      });
    }
  
  private initLocalStream(onSuccess?: () => any): void {
    this.localStream.init(
      () => {
         // The user has granted access to the camera and mic.
         this.localStream.play(this.localCallId);
         if (onSuccess) {
           onSuccess();
         }
      },
      err => console.error('getUserMedia failed', err)
    );
  }

}
