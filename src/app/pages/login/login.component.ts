import { Component, OnInit } from '@angular/core';
import { User } from 'app/services/user-services/models/user';
import { UserService } from 'app/services/user-services/user.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();

    public user:User=null;
    usern:string;
    passw:string;

    constructor(private userService: UserService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('full-screen');
        body.classList.add('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        if (navbar.classList.contains('nav-up')) {
            navbar.classList.remove('nav-up');
        }
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('full-screen');
        body.classList.remove('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    onSubmit(form)
    {
        this.userService.login(this.usern,this.passw).subscribe(u=>this.user=u);
        console.log(this.user);
    }

}
