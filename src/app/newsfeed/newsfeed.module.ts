import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from '../pages/profile/posts-page/post-page.component';
import { MatTabsModule, MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PostsPageModule } from '../pages/profile/posts-page/post-page.module';
import { NewsfeedComponent } from './newsfeed.component';




@NgModule({
    declarations: [NewsfeedComponent],
    imports: [
        CommonModule,
        PostsPageComponent,
        PostsPageComponent,
        FormsModule,
        PostsPageModule
    ],
    exports: [NewsfeedComponent]]
  })

  export class NewsfeedModule { }
