import { Component, OnInit } from '@angular/core';
import { PackService } from 'app/services/pack-service/pack.service';
import { Pack } from 'app/services/pack-service/model/pack';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pack-admin',
  templateUrl: './edit-pack-admin.component.html',
  styleUrls: ['./edit-pack-admin.component.scss']
})
export class EditPackAdminComponent implements OnInit {
  packId:number;
  pack:Pack;
  constructor(private packService:PackService,private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe(result => this.packId = Number(result.get('packId')));
    console.log(this.packId);
    this.packService.getPackById(this.packId).subscribe(u=>this.pack=u);
    console.log(this.pack);

  }
  updatePack(id:number,title:string,type:string,prix:number,reduction:number,desc:string){
    this.packService.addReduction(id,reduction,null,null).subscribe(u=>u);
  }

}
