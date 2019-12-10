import { Component, OnInit } from '@angular/core';
import { ChatAdapter, IChatGroupAdapter, User, Group, Message,
ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { User as U } from 'app/services/user-services/models/user';
import { UserService } from 'app/services/user-services/user.service';
import { delay } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent extends ChatAdapter implements OnInit {

  mockedParticipants: IChatParticipant[] = [
    {
      participantType: ChatParticipantType.User,
      id: 1,
      displayName: "Arya Stark",
      avatar: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
      status: ChatParticipantStatus.Online
    },
    {
      participantType: ChatParticipantType.User,
      id: 2,
      displayName: "Cersei Lannister",
      avatar: null,
      status: ChatParticipantStatus.Online
    },
    {
      participantType: ChatParticipantType.User,
      id: 3,
      displayName: "Daenerys Targaryen",
      avatar: "https://68.media.tumblr.com/avatar_d28d7149f567_128.png",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 4,
      displayName: "Eddard Stark",
      avatar: "https://pbs.twimg.com/profile_images/600707945911844864/MNogF757_400x400.jpg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 5,
      displayName: "Hodor",
      avatar: "https://pbs.twimg.com/profile_images/378800000449071678/27f2e27edd119a7133110f8635f2c130.jpeg",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 6,
      displayName: "Jaime Lannister",
      avatar: "https://pbs.twimg.com/profile_images/378800000243930208/4fa8efadb63777ead29046d822606a57.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 7,
      displayName: "John Snow",
      avatar: "https://pbs.twimg.com/profile_images/3456602315/aad436e6fab77ef4098c7a5b86cac8e3.jpeg",
      status: ChatParticipantStatus.Busy
    },
    {
      participantType: ChatParticipantType.User,
      id: 8,
      displayName: "Lorde Petyr 'Littlefinger' Baelish",
      avatar: "http://68.media.tumblr.com/avatar_ba75cbb26da7_128.png",
      status: ChatParticipantStatus.Offline
    },
    {
      participantType: ChatParticipantType.User,
      id: 9,
      displayName: "Sansa Stark",
      avatar: "http://pm1.narvii.com/6201/dfe7ad75cd32130a5c844d58315cbca02fe5b804_128.jpg",
      status: ChatParticipantStatus.Online
    },
    {
      participantType: ChatParticipantType.User,
      id: 10,
      displayName: "Theon Greyjoy",
      avatar: "https://thumbnail.myheritageimages.com/502/323/78502323/000/000114_884889c3n33qfe004v5024_C_64x64C.jpg",
      status: ChatParticipantStatus.Away
    }];

users:any;
friends:any;


  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

    replacer(key:string,value:string){
      console.log('heeeeeeeyyyyyyy');
    if (key == 'reactions') {console.log('deleted reactions');return undefined;}
    else if (key == 'comments'){return undefined;}
    else if (key == 'email'){return undefined;}
    else if (key == 'password'){return undefined;}
    else if (key == 'comments'){return undefined;}
    else if (key == 'recieveMailNotifs'){return undefined;}
    else if (key == 'gender'){return ChatParticipantType.User;}
    else if (key == 'enable'){return undefined;}
    else if (key == 'confirm'){return undefined;}
    else if (key == 'address'){return undefined;}
    else if (key == 'token'){return undefined;}
    else if (key == 'role'){return undefined;}
    else if (key == 'claimOn'){return undefined;}
    else if (key == 'birthDate'){return undefined;}
    else if (key == 'whoclaim'){return undefined;}
    else if (key == 'messages'){return undefined;}
    else if (key == 'accountCreationDate'){return undefined;}
    else if (key == 'enterprise'){return undefined;}
    else if (key == 'notifications'){return undefined;}
    else if (key == 'firstName'){return undefined;}
    else if (key == 'interests'){return null;}
    else if (key == 'lastName'){return ChatParticipantStatus.Online;}

    return value;
}
  constructor() {
    super();

  }
    listFriends(): Observable<ParticipantResponse[]> {
     const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', environment.backend_url + 'user/all', false ); // false for synchronous request
    xmlHttp.send( null );

    const json =JSON.parse(xmlHttp.responseText);
    
    let obj = JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(json, this.replacer))));
    console.log(obj[0]);
    console.log(obj[0].username);
    console.log(obj[0].gender)
    obj.forEach(element => {
      element.avatar = element.interests;
      delete element.interests;
      element.displayName = element.username;
      delete element.username;
      element.status = element.lastName;
      delete element.lastName;
      element.participantType = element.gender;
      delete element.gender;
    });
console.log('new shit');
console.log(obj);

    return of(obj.map(user => {
      console.log(user);
      const participantResponse = new ParticipantResponse();

      participantResponse.participant = user;
      return participantResponse;
    }));
  }

  getMessageHistory(destinataryId: any): Observable<Message[]> {
    let mockedHistory: Array<Message>;

    mockedHistory = [
      {
        fromId: 1,
        toId: 999,
        message: "Hi there, just type any message bellow to test this Angular module.",
        dateSent: new Date()
      }
    ];

    return of(mockedHistory).pipe(delay(2000));
  }

  sendMessage(message: Message): void {
    setTimeout(() => {
      let replyMessage = new Message();

      replyMessage.message = "You have typed '" + message.message + "'";
      replyMessage.dateSent = new Date();

      if (isNaN(message.toId)) {
        let group = this.mockedParticipants.find(x => x.id == message.toId) as Group;

        // Message to a group. Pick up any participant for this
        let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
        replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

        replyMessage.toId = message.toId;

        this.onMessageReceived(group, replyMessage);
      }
      else {
        replyMessage.fromId = message.toId;
        replyMessage.toId = message.fromId;

        let user = this.mockedParticipants.find(x => x.id == replyMessage.fromId);

        this.onMessageReceived(user, replyMessage);
      }
    }, 1000);
  }

  groupCreated(group: Group): void {
    this.mockedParticipants.push(group);

    this.mockedParticipants = this.mockedParticipants.sort((first, second) =>
      second.displayName > first.displayName ? -1 : 1
    );

    // Trigger update of friends list
    this.listFriends().subscribe(response => {
      this.onFriendsListChanged(response);
    });
  }

}
