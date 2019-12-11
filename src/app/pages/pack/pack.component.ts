import { Component, OnInit } from '@angular/core';
import { PackService } from 'app/services/pack-service/pack.service';
import { Pack } from 'app/services/pack-service/models/pack';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {
  page:any=1;
  pageSize=8;
  loading:boolean=true;
  constructor(private packService:PackService,private modalService: NgbModal) { }
  listPack:Pack[]=null;
  idPack:number;
  closeResult: string;
  
  ngOnInit() {  
    this.packService.getAllPacks().subscribe(u=>this.listPack=u);
    this.loading=false;
    console.log(this.listPack);
  }
  
  open(content,id:number, type) {
this.idPack=id;
console.log(this.idPack);
    if (type === 'sm') {
        console.log('aici');
        this.modalService.open(content, { size: 'sm' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    } else {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}

private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}

}
