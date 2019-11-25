import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import { QuizService } from '../quiz.service';
import {Student} from '../Students';
import {DataService} from '../data.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  
})
export class QuestionComponent implements OnInit {
   
pID:String;
pName:String;
question :any;
jsonName : any;
CountPage = 1;
Page = 1;
list : any;
index : number;
answer:0;
mark = 0;
Quizslength : number;
isShow: boolean;
login : boolean;
user:Student;
  constructor(private route:ActivatedRoute,private QuizService:QuizService,private DataService:DataService) { }

  ngOnInit(): void {
    //Lay file Json cua mon hoc
    this.QuizService.getSub().subscribe(data =>
      {
         this.list = data;
         this.index=this.list.findIndex(p => p.Id === this.pID);
         console.log(this.index)
         this.pName = this.list[this.index].Name;
      })
      
    // Lay Tham so Id va name cua home 
    this.pID = this.route.snapshot.paramMap.get('Id');
    console.log(this.pID);
    console.log(this.pName);
    this.isShow = true;
    this.jsonName = this.pID+'.json';
    //Lay file Json cua cau hoi
    this.QuizService.getQuiz(this.jsonName).subscribe(data =>{
        this.question = data;
        this.Quizslength = this.question.length;
    })
    this.login = this.DataService.datalogin;
    this.user = this.DataService.infor;
    console.log('login',this.DataService.datalogin)
  }
//Ham di chuyen trang
  nextpageQuestion()
{
 if(this.question.length/this.CountPage>this.Page)
 {
   this.Page++;
   this.isShow =true;
 }
}
prepageQuestion()
{
 if(this.Page>1)
 {
   this.Page--;
 }
}
//Ham load lai Trang 

//Ham cham diem
Mark(right : number)
{
  
 if(this.answer == right)
 {
   this.mark++;
   console.log(this.answer); 
 }
 this.isShow = !this.isShow;
}
}