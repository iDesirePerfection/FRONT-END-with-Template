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

    public user:User;
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
        console.log('test');
        this.userService.login(this.usern,this.passw).subscribe(u=>{
        localStorage.setItem('id', u.id.toString());
        localStorage.setItem('email', u.email.toString());
        localStorage.setItem('firstname', u.firstName.toString());
        localStorage.setItem('lastname', u.lastName.toString());
        localStorage.setItem('password', u.password.toString());
        localStorage.setItem('username', u.username.toString());
        localStorage.setItem('role', u.role.toString());
        localStorage.setItem('interests', u.interests.toString());
        localStorage.setItem('entid', u.enterprise.eid.toString());
        });
        this.userService.All();
        console.log(localStorage.getItem('id'));
    }

}
