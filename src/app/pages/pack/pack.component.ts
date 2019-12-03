import { Component, OnInit } from '@angular/core';
import { PackService } from 'app/services/pack-service/pack.service';
import { Pack } from 'app/services/pack-service/model/pack';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {

  constructor(private packService:PackService) { }
  listPack:Pack[]=null;
  
  ngOnInit() {  
    this.packService.getAllPacks().subscribe(u=>this.listPack=u);
    console.log(this.listPack);
  }

}
