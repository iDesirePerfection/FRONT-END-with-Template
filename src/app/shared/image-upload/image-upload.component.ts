import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FileUpload } from 'app/services/fileupload-services/fileupload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
    @Input() isRound: boolean = false;
    @Input() image: string;
    filename:string;
    @Output() change = new EventEmitter();

    state: any = {}
    options:any;
    constructor(private fileupload :FileUpload) {
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        
    }
   

    

    ngOnInit() {
        this.state = {
            file: null,
            imagePreviewUrl: this.image !== undefined ? this.image:(this.isRound ? './assets/img/placeholder.jpg':'./assets/img/image_placeholder.jpg')
        }
    }
    handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.state.file = file;
            this.state.imagePreviewUrl = reader.result;
            // this.state.imagePreviewUrl1 = reader.result;
        }
        console.log('mrnghir change');
        this.filename=file.name;
        this.change.emit(this.filename);
        console.log(this.filename);
        reader.readAsDataURL(file);
    }
    handleSubmit(e){
        e.preventDefault();
       
        // this.state.file is the file/image uploaded
        // in this function you can save the image (this.state.file) on form submit
        // you have to call it yourself
    }
    handleClick(){
        var input = document.createElement("input");
        input.type = "file";
        input.onchange = this.handleImageChange;
        input.click();
        console.log(input.type);
        console.log(input.onchange);

    }
    handleRemove(){
        this.state.file = null;
        this.state.imagePreviewUrl = this.image !== undefined ? this.image:(this.isRound ? './assets/img/placeholder.jpg':'./assets/img/image_placeholder.jpg');
    }
}
