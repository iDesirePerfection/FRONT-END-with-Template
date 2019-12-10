import { Component, OnInit, Input, Output, OnChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit,OnChanges {
    @Input() isRound: boolean = false;
    @Input() image: string;
    @Output() updated = new EventEmitter<string>();
    state: any = {}
    constructor() {
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
    ngOnChanges() {
        console.log("hello");
    }

    handleImageChange(e){
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.state.file = file;
            this.state.imagePreviewUrl = reader.result;
            this.updated.emit(this.state.imagePreviewUrl);
            console.log(typeof this.state.imagePreviewUrl);
        }
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

        
        
    }
    handleRemove(){
        this.state.file = null;
        this.state.imagePreviewUrl = this.image !== undefined ? this.image:(this.isRound ? './assets/img/placeholder.jpg':'./assets/img/image_placeholder.jpg');
    }
}
