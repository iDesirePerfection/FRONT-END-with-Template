import { Component, OnInit } from '@angular/core';
import { PackService } from 'app/services/pack-service/pack.service';
import { Pack } from 'app/services/pack-service/models/pack';


declare interface Table_With_Checkboxes {
  id?: number;
  check: boolean;
  product_name: string;
  type: string;
  qty?: number;
  price: string;
  amount?: string;
}
declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-pack-admin',
  templateUrl: './pack-admin.component.html',
  styleUrls: ['./pack-admin.component.scss']
})

export class PackAdminComponent implements OnInit {
  public tableData1: TableData;
   
    

    constructor(private packService:PackService) { }
  listPack:Pack[]=null;
  ngOnreload(){
    this.packService.getAllPacks().subscribe(u=>this.listPack=u);
    console.log(this.listPack);   
        this.tableData1 = {
            headerRow: [ '#', 'Title', 'Description', 'Type', 'Price', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', ''],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
       
  }
    ngOnInit() {
      this.packService.getAllPacks().subscribe(u=>this.listPack=u);
    console.log(this.listPack);   
        this.tableData1 = {
            headerRow: [ '#', 'Title', 'Description', 'Type', 'Price', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', ''],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', ''],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', ''],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
       
    }
    deletePack(id:number){
      this.packService.deletePack(id).subscribe(u=>{ this.ngOnreload()});
     
    }
    
}