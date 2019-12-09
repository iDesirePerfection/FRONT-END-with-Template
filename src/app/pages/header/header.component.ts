import { Component, OnInit } from '@angular/core';
import { Notification } from 'app/services/notification-services/models/notification.model';
import { NotificationService } from 'app/services/notification-services/notification.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

notifs:any[]=[];
notifnumber:number=0;
    constructor(private notifService:NotificationService) {}

    ngOnInit(){
        this.notifService.myNotifs().subscribe(notifs => {
            console.log(notifs);
            this.notifs=notifs;
            this.notifnumber=notifs.length;
});
}
  refreshData(){
    this.notifService.myNotifs().subscribe(notifs => {
            this.notifs=notifs;
    });
  }
    setSeen(id:number){
      setTimeout(function() { 
        this.notifService.setSeen(id).subscribe();
          }.bind(this), 100);
           setTimeout(function() { 
              this.refreshData();
          }.bind(this), 500);

    }
    setAllSeen(){
              setTimeout(function() { 
        this.notifService.setAllSeen(this.notifs).subscribe();
          }.bind(this), 100);
           setTimeout(function() { 
              this.refreshData();
          }.bind(this), 500);
  }
}