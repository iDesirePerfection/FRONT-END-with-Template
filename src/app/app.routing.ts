import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SectionsComponent } from './sections/sections.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { BlogpostComponent } from './pages/blogpost/blogpost.component';
import { BlogpostsComponent } from './pages/blogposts/blogposts.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './pages/header/header.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page422Component } from './pages/page422/page422.component';
import { Page500Component } from './pages/page500/page500.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ClaimsComponent } from './pages/claims/claims.component';
import { PackComponent } from './pages/pack/pack.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { EntprofilePageComponent } from './pages/enterprise-pages/entprofile-page/entprofile-page.component';
import { EnterpriseprofilePageComponent } from './pages/enterprise-pages/enterpriseprofile-page/enterpriseprofile-page.component';
import { ListjobofferPageComponent } from './pages/enterprise-pages/listjoboffer-page/listjoboffer-page.component';
import { ListeventPageComponent } from './pages/enterprise-pages/listevent-page/listevent-page.component';
import { MyjobofferlistPageComponent } from './pages/enterprise-pages/myjobofferlist-page/myjobofferlist-page.component';
import { PostsPageComponent } from './pages/profile/posts-page/post-page.component';

import { DiscoverNetworkComponent } from './pages/discover-network/discover-network.component';
import { DiscoverCompaniesComponent } from './pages/discover-companies/discover-companies.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { ViewJobComponent } from './pages/view-job/view-job.component';
import { InterviewTrainingComponent } from './pages/interview-training/interview-training.component';
import { AddjobofferPageComponent } from './pages/enterprise-pages/addjoboffer-page/addjoboffer-page.component';
import { AddenterprisePageComponent } from './pages/enterprise-pages/addenterprise-page/addenterprise-page.component';
import { AddenteventPageComponent } from './pages/enterprise-pages/addentevent-page/addentevent-page.component';
import { JobofferdetailPageComponent } from './pages/enterprise-pages/jobofferdetail-page/jobofferdetail-page.component';
import { PackAdminComponent } from './pages/pack-admin-pages/pack-admin/pack-admin.component';
import { EditPackAdminComponent } from './pages/pack-admin-pages/edit-pack-admin/edit-pack-admin.component';
import { ShowPackDetailsComponent } from './pages/pack-admin-pages/show-pack-details/show-pack-details.component';
import { PaymentAdminComponent } from './pages/payment/payment-admin/payment-admin.component';
import { InterviewComponent } from './pages/interview/interview.component';
import { QuestionComponent } from './pages/question/question.component';

const routes: Routes = [
    { path: 'presentation', component: PresentationComponent },
    { path: 'pages/quizSpace', component: QuizComponent },
    { path: 'pages/Question&AnswersSpace', component: QuestionComponent },
    { path: 'pages/quizSpace/interviews/:id', component: InterviewComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'sections', component: SectionsComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'pages/aboutus', component: AboutusComponent },
    { path: 'pages/addproduct', component: AddproductComponent },
    { path: 'pages/blogpost', component: BlogpostComponent },
    { path: 'pages/blogposts', component: BlogpostsComponent },
    { path: 'pages/contactus', component: ContactusComponent },
    { path: 'pages/discover', component: DiscoverComponent },
    { path: 'pages/ecommerce', component: EcommerceComponent },
    { path: 'pages/landing', component: LandingComponent },
    { path: 'pages/login', component: LoginComponent },
    { path: 'pages/productpage', component: ProductpageComponent },
    { path: 'pages/profile', component: ProfileComponent },
    { path: 'pages/register', component: RegisterComponent },
    { path: 'pages/search', component: SearchComponent },
    { path: 'pages/settings', component: SettingsComponent },
    { path: 'pages/twitter', component: TwitterComponent },
    { path: 'pages/page404', component: Page404Component },
    { path: 'pages/page422', component: Page422Component },
    { path: 'pages/page500', component: Page500Component },
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'pages/profile',     component: ProfileComponent },
    { path: 'pages/ViewProfile/:id',     component: ViewProfileComponent },
    { path: 'pages/ViewJob/:id',     component: ViewJobComponent },
    { path: 'pages/DiscoverNetwork',     component: DiscoverNetworkComponent },
    { path: 'pages/DiscoverCompanies',     component: DiscoverCompaniesComponent },
    { path: 'pages/InterviewTraining',     component: InterviewTrainingComponent },
    { path: 'pages/register',    component: RegisterComponent },
    { path: 'pages/search',      component: SearchComponent },
    { path: 'pages/settings',    component: SettingsComponent },
    { path: 'pages/header',      component: HeaderComponent },
    { path: 'pages/twitter',     component: TwitterComponent },
    { path: 'pages/page404',     component: Page404Component },
    { path: 'pages/page422',     component: Page422Component },
    { path: 'pages/page500',     component: Page500Component },
    { path: '', redirectTo: 'presentation', pathMatch: 'full' }, 
    { path: 'pages/claims',   component: ClaimsComponent },
    { path: 'pages/pack',   component: PackComponent },
    { path: 'pages/pack-admin-pages/packAdmin',  component: PackAdminComponent },
    { path: 'pages/pack-admin-pages/editPackAdmin/:packId',   component: EditPackAdminComponent },
    { path: 'pages/pack-admin-pages/showPackDetails/:packId',   component: ShowPackDetailsComponent },
    { path: 'pages/pack-admin-pages/showPackDetails/:packId',   component: ShowPackDetailsComponent },
    { path: 'pages/admin/payment/:paymentId',   component: PaymentAdminComponent },
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'pages/enterprise-pages/entprofile-page',       component: EntprofilePageComponent },
    { path: 'pages/enterprise-pages/enterpriseprofile-page/:entId',       component: EnterpriseprofilePageComponent },
    { path: 'pages/enterprise-pages/listjoboffer-page',       component: ListjobofferPageComponent },
    { path: 'pages/enterprise-pages/listevent-page',       component: ListeventPageComponent },
    { path: 'pages/enterprise-pages/myjobofferlist-page',       component: MyjobofferlistPageComponent },
    { path : 'pages/comments/test' , component: PostsPageComponent},
    { path: 'pages/enterprise-pages/addjoboffer-page',       component: AddjobofferPageComponent },
    { path: 'pages/enterprise-pages/addenterprise-page',       component: AddenterprisePageComponent },
    { path: 'pages/enterprise-pages/addentevent-page',       component: AddenteventPageComponent },
    { path: 'pages/enterprise-pages/jobofferdetail-page/:joid',       component: JobofferdetailPageComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
