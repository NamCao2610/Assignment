import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {QuizService} from '../quiz.service';
import {Student} from '../Students';
import {DataService} from '../data.service';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  formSignIn : FormGroup;
  login :boolean;
  liststudent: Student[];
  student: Student;
  constructor(private fb:FormBuilder,private QuizService:QuizService,private DataService:DataService) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      username :['',[Validators.required]],
      email:['',[Validators.required,Validators.email]]
    })
    this.login = false;
    this.liststudent = this.DataService.ListStudents;
  }
onSubmit(){
  for(let i =0;i<this.liststudent.length;i++)
   {
     if(this.formSignIn.value.username == this.liststudent[i].username && this.formSignIn.value.email == this.liststudent[i].email)
     {
       this.student =this.liststudent[i];
     }
   }
   if(this.student.username == this.formSignIn.value.username && this.student.email == this.formSignIn.value.email)
   {
       console.log("mat khau la:",this.student.password);
       this.login = !this.login;
   }
   else{
     alert('Ten tai khoan hoac email ko chinh xac');
   }
   
}
Login(){
  this.login = !this.login;
}
}
