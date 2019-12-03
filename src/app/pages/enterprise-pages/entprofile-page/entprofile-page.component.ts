import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { EntprofileService } from 'app/services/enterprise-services/entprofile.sevice';
import { Entprofile } from 'app/services/enterprise-services/models/entprofile';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entprofile-page',
  templateUrl: './entprofile-page.component.html',
  styleUrls: ['./entprofile-page.component.scss']
})
export class EntprofilePageComponent implements OnInit {

  data : Date = new Date();
  entprofile:Entprofile[]=[];
   public entId;

  constructor(private entprofileService : EntprofileService ) { }


  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');

    this.entprofileService.GetAllEnt().subscribe(pro => {
      this.entprofile = pro;
      console.log(pro);
    });
  }
  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
  }

  


  

  
  










}
