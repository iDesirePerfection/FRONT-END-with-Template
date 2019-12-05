import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-pack-details',
  templateUrl: './show-pack-details.component.html',
  styleUrls: ['./show-pack-details.component.scss']
})
export class ShowPackDetailsComponent implements OnInit {

  packId:number;
  constructor() { }

  ngOnInit() {
  }

}
