import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { SlickModule } from 'ngx-slick';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {coursesService} from './courses.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';
import { AchievementComponent } from './achievement/achievement.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { CourseItemComponent } from './courses/course-item/course-item.component';
import { CourseDetailsComponent} from './courses/course-item/course-details/course-details.component';
import { SubjectComponent} from './courses/course-item/course-details/subject/subject.component';
import { PaymentComponent} from './courses/course-item/course-details/payment/payment.component';
import {UserAchieveComponent} from './achievement/user-achieve/user-achieve.component';
const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'courses',component:CoursesComponent},
{path:'profile',component:ProfileComponent},
{path:'leaderBoard',component:AchievementComponent},
{path:'signIn',component:SignInComponent},
{path:'courseDetails',component:CourseDetailsComponent},
{path:'editProfile',component:EditProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    ProfileComponent,
    AchievementComponent,
    HomeComponent,
    SignInComponent,
    EditProfileComponent,
    CourseItemComponent,
    CourseDetailsComponent,
    SubjectComponent,
    PaymentComponent,
    UserAchieveComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [coursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
