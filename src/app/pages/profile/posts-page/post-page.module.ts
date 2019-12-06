import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './post-page.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ],
  exports: [PostsPageComponent]
})
export class PostsPageModule { }
