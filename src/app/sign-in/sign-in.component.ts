import { Component, OnInit } from '@angular/core';
import  {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import {QuizService} from '../quiz.service';
import {Student} from '../Students';
import {DataService} from '../data.service';
import {FirebaseService} from '../firebase.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  formSignIn : FormGroup;
  login :boolean;
  list: Student[];
  liststudent: Student[];
  student: Student;
  login2: boolean;

  constructor(private fb:FormBuilder,private QuizService:QuizService,private DataService:DataService,private FireService:FirebaseService) { }

  ngOnInit() : void {
   
    this.formSignIn = this.fb.group({
      username :['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
    this.login = false;
    console.log("day la ds22",this.FireService.ListStudents)

  }
  onSubmit()
  {
    console.log(this.formSignIn.value);
    //Kiem tra mac dinh
    //Kiem tra sau khi dang ky
    for(let i=0 ; i< this.FireService.ListStudents.length ; i++)
    {
    if(this.formSignIn.value.username == this.FireService.ListStudents[i].username && this.formSignIn.value.password==this.FireService.ListStudents[i].password)
    {
      this.student = this.FireService.ListStudents[i];
      
    }
    } 
    if(this.formSignIn.value.username == this.student.username && this.formSignIn.value.password == this.student.password)
    {
      this.login= !this.login;
      this.DataService.infor = this.student;
      console.log('Dang nhap thanh cong')
      this.DataService.datalogin = true;
      
    } 
    else{
      alert('Ten tai khoan hoac mat khau khong chinh xac');
      console.log('Dang nhap ko thanh cong');
    }
    
  }
  Login()
  {
    this.login = !this.login
  }

}
