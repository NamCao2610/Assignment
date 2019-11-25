import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {QuizService} from '../quiz.service';
import {Student} from '../Students';
import {DataService} from '../data.service';
import {FirebaseService} from '../firebase.service';
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
  constructor(private fb:FormBuilder,private QuizService:QuizService,private DataService:DataService,private FireService:FirebaseService) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      username :['',[Validators.required]],
      email:['',[Validators.required,Validators.email]]
    })
    this.login = false;
    console.log(this.FireService.ListStudents);
  }
onSubmit(){
  for(let i =0;i<this.FireService.ListStudents.length;i++)
   {
     if(this.formSignIn.value.username == this.FireService.ListStudents[i].username && this.formSignIn.value.email == this.FireService.ListStudents[i].email)
     {
       this.student =this.FireService.ListStudents[i];
     }
   }
   if(this.student.username == this.formSignIn.value.username && this.student.email == this.formSignIn.value.email)
   {
       console.log("mat khau la:",this.student.password);
       this.login = !this.login;
   }
   else{
     alert('Ten tai khoan hoac email ko chinh xac');
     console.log("dang nhap ko thanh cong")
   }
   
}
Login(){
  this.login = !this.login;
}
}
