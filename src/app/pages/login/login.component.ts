import { Component, OnInit } from '@angular/core';

import { UserService } from 'app/services/user-services/user.service';
import { environment } from 'environments/environment';
import { User } from 'app/services/user-services/model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data: Date = new Date();

    public user: User;
    usern: string;
    passw: string;

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
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('full-screen');
        body.classList.remove('login');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

<<<<<<< HEAD
    onSubmit(form) {
        this.userService.login(this.usern, this.passw).subscribe(u => {
            this.user = u;
            localStorage.setItem('id', this.user.id.toString());
            localStorage.setItem('email', this.user.email.toString());
            localStorage.setItem('firstname', this.user.firstName.toString());
            //localStorage.setItem('lastname', this.user.lastName.toString());
            localStorage.setItem('password', this.user.password.toString());
            localStorage.setItem('username', this.user.username.toString());
            localStorage.setItem('role', this.user.role.toString());
            localStorage.setItem('interests', this.user.interests.toString());
            localStorage.setItem('entid', this.user.enterprise.eid.toString());

            if (u.role == "Candidate") {
                if(this.user.biography!=null)
                localStorage.setItem('Biography', this.user.biography.toString());
                else 
                localStorage.setItem('Biography',"This Candidate Has No Biography");

                if(this.user.title!=null)
                localStorage.setItem('title', this.user.title.toString());
                else 
                localStorage.setItem('title',"This Candidate Has No Title");

                if(this.user.imageUrl!=null)
                localStorage.setItem('imageUrl', this.user.imageUrl.toString());
                else 
                localStorage.setItem('imageUrl',"pp fahd.jpg");

                if(this.user.cv!=null)
                localStorage.setItem('cv', this.user.cv.toString());
                else 
                localStorage.setItem('cv',"defaultCv.pdf");
            }
        });


=======
    onSubmit(form)
    {
        this.userService.login(this.usern,this.passw).subscribe(u=>this.user=u);
>>>>>>> origin/mouhibBranch
        console.log(this.user);
    }



 


}
