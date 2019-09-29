import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
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
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {path:'',component:HomeComponent},
        {path:'home',component:HomeComponent},
        {path:'home/question',component:QuestionComponent},
        {path:'home/introduction',component:IntroductionComponent},
        {path:'home/contact',component:ContactComponent},
        {path:'home/answer',component:AnswerComponent},
        {path:'home/feedback',component:FeedbackComponent},
        {path:'home/sign-up',component:SignUpComponent},
        {path:'home/sign-in',component:SignInComponent}
      ]
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
