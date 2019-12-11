import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, NgModel } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { ImageUploadModule } from '../shared/image-upload/image-upload.module';

import { ExamplesComponent } from './examples.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DiscoverComponent } from './discover/discover.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { TwitterComponent } from './twitter/twitter.component';
import { Page404Component } from './page404/page404.component';
import { Page422Component } from './page422/page422.component';
import { Page500Component } from './page500/page500.component';
import { EntprofilePageComponent } from './enterprise-pages/entprofile-page/entprofile-page.component';
import { EnterpriseprofilePageComponent } from './enterprise-pages/enterpriseprofile-page/enterpriseprofile-page.component';
import { ListjobofferPageComponent } from './enterprise-pages/listjoboffer-page/listjoboffer-page.component';
import { ListeventPageComponent } from './enterprise-pages/listevent-page/listevent-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';
import { MyjobofferlistPageComponent } from './enterprise-pages/myjobofferlist-page/myjobofferlist-page.component';
import { PostsPageComponent } from './profile/posts-page/post-page.component';



import { ExperienceComponent } from './experience/experience.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddExperienceFormComponent } from './add-experience-form/add-experience-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditExperienceFormComponent } from './edit-experience-form/edit-experience-form.component';
import { SkillComponent } from './skill/skill.component';
import { AddSkillFormComponent } from './add-skill-form/add-skill-form.component';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { ImageUploadComponent } from 'app/shared/image-upload/image-upload.component';
import { DiscoverNetworkComponent } from './discover-network/discover-network.component';
import { DiscoverCompaniesComponent } from './discover-companies/discover-companies.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { InterviewTrainingComponent } from './interview-training/interview-training.component';
import { DateAdapter, CalendarMonthViewComponent, CalendarMonthModule, CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddEventComponent } from './add-event/add-event.component';
import { DemoComponent } from './demo/demo.component';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TagInputModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AngularMultiSelectModule,
        AgmCoreModule.forRoot({
            apiKey: 'NO_API_KEY'
        }),
        ImageUploadModule,
        FormsModule,
        Ng2SearchPipeModule,
        RouterModule,
        MatDialogModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        CalendarMonthModule,
        NgbModalModule,
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
          })
       
        


        
        
        
    ],
    declarations: [
        ExamplesComponent,
        AboutusComponent,
        AddproductComponent,
        BlogpostComponent,
        BlogpostsComponent,
        ContactusComponent,
        DiscoverComponent,
        EcommerceComponent,
        LandingComponent,
        LoginComponent,
        ProductpageComponent,
        ProfileComponent,
        PostsPageComponent,
        RegisterComponent,
        SearchComponent,
        SettingsComponent,
        TwitterComponent,
        Page404Component,
        Page422Component,
        Page500Component,
        EntprofilePageComponent,
        EnterpriseprofilePageComponent,
        ListjobofferPageComponent,
        ListeventPageComponent,
        MyjobofferlistPageComponent,
        ExperienceComponent,
        SkillComponent,
        AddExperienceFormComponent,
        EditExperienceFormComponent,
        AddSkillFormComponent,
        EditProfileFormComponent,
        DiscoverNetworkComponent,
        DiscoverCompaniesComponent,
        ViewProfileComponent,
        ViewJobComponent,
        InterviewTrainingComponent,
        AddEventComponent,
        DemoComponent,
        
        
        

    ],
    exports: [
        
        Ng2SearchPipeModule,
        RouterModule,
       
    ],
    entryComponents: [
        AddExperienceFormComponent,
        EditExperienceFormComponent,
        AddSkillFormComponent,
        EditProfileFormComponent,
        AddEventComponent
    ]
})
export class ExamplesModule { }
