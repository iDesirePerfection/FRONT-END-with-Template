import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './post-page.component';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NotificationComponent } from 'app/components/notification/notification.component';



@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    NotificationComponent,
    MatInputModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    MatOptionModule,
    FormsModule
  ],
  exports: [PostsPageComponent]
})
export class PostsPageModule { }
