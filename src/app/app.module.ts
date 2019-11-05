import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ContactComponent } from './contact/contact.component';
import { AnswerComponent } from './answer/answer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { QuizService } from './quiz.service';
import {DataService} from './data.service';
import { LogOutComponent } from './log-out/log-out.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    IntroductionComponent,
    ContactComponent,
    AnswerComponent,
    FeedbackComponent,
    SignUpComponent,
    SignInComponent,
    LogOutComponent,
    ChangePassComponent,
    ForgotPassComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path:'',component:HomeComponent},
        {path:'home',component:HomeComponent},
        {path:'home/:Id',component:QuestionComponent},
        {path:'introduction',component:IntroductionComponent},
        {path:'contact',component:ContactComponent},
        {path:'answer',component:AnswerComponent},
        {path:'feedback',component:FeedbackComponent},
        {path:'sign-up',component:SignUpComponent},
        {path:'sign-in',component:SignInComponent},
        {path:'log-out',component:LogOutComponent},
        {path:'change-pass',component:ChangePassComponent},
        {path:'forgot-pass',component:ForgotPassComponent},
        {path:'update',component:UpdateComponent}
      ]
    ),
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [QuizService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
