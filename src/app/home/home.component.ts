import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
list :any;
  constructor(private QuizService:QuizService) { }
CountPage=6;
Page=1;
  ngOnInit() {
     this.QuizService.getSub().subscribe(data =>
        {
           this.list = data;
           console.log(this.list);
        })
  }

nextpage()
{
 if(this.list.length/this.CountPage>this.Page)
 {
   this.Page++;
 }
}
prepage()
{
 if(this.Page>1)
 {
   this.Page--;
 }
}
Load()
{
  location.reload();
}
}
