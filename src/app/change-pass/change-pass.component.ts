import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {QuizService} from '../quiz.service';
import {Student} from '../Students';
import {DataService} from '../data.service';
@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  formSignIn : FormGroup;
  login :boolean;
  liststudent: Student[];
  student:Student;
  constructor(private fb:FormBuilder,private QuizService:QuizService,private DataService:DataService) { }

  ngOnInit() {
    this.formSignIn = this.fb.group({
      username :['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]],
      newpassword:['',[Validators.required,Validators.minLength(6)]]
    })
   this.login = false;
   this.liststudent = this.DataService.ListStudents;
  }
 onSubmit(){
   for(let i =0;i<this.liststudent.length;i++)
   {
     if(this.formSignIn.value.username == this.liststudent[i].username && this.formSignIn.value.password == this.liststudent[i].password)
     {
       this.student =this.liststudent[i];
     }
   }
   if(this.student.username == this.formSignIn.value.username && this.student.password == this.formSignIn.value.password)
   {
       this.student.password= this.formSignIn.value.newpassword ;
     console.log("day la danh sach hoc sinh sau khi thay doi",this.student);
   }
   else{
     alert('Ten tai khoan hoac mat khau ko chinh xac');
   }
   for(let i =0;i<this.liststudent.length;i++)
   {
     if(this.student.username == this.liststudent[i].username)
     {
       this.liststudent[i] = this.student;
       this.login= !this.login;
      console.log('Dang nhap thanh cong')
     }
   }
   this.DataService.setList(this.liststudent);
 }
 Login()
 {
   this.login = !this.login;
 }
}
