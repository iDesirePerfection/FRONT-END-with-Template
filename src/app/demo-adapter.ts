import { ChatAdapter, IChatGroupAdapter, User, Group, Message,
ChatParticipantStatus, ParticipantResponse, ParticipantMetadata, ChatParticipantType, IChatParticipant } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { User as U } from './services/user-services/models/user';
import { UserService } from './services/user-services/user.service';
import { delay } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

export class DemoAdapter extends ChatAdapter implements IChatGroupAdapter{
constructor()
{
  super();
}
}
