import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PostsPageComponent } from './posts-page/post-page.component';
import { MatTabsModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PostsPageModule } from './posts-page/post-page.module';




@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        PostsPageComponent,
        PostsPageComponent,
        FormsModule,
        PostsPageModule
    ],
    exports: [ProfileComponent]]
  })

  export class ProfileModule { }
