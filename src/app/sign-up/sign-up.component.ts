import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {FirebaseService} from '../firebase.service';
import {Student} from '../Students'
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username='';
  password='';
  fullname='';
  email='';
  ngay=0;
  thang=0;
  nam=0;
  birthday= new Date().toISOString().substring(0,10)
  date=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  month=[1,2,3,4,5,6,7,8,9,10,11,12];
  year=[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003];
  students:Student[];
  login : boolean;
  list: Student;
  ListStudent:Student[];
  
  
  constructor(private DataService : DataService,private db:AngularFireDatabase,private fb:FirebaseService) { }

  ngOnInit() {
    console.log("danh sach dang ki",this.fb.ListStudents)
    this.login = false;
    
  }
  onSubmit(formSignup)
  {
  
    this.list={
      username:formSignup.value.username,
      password:formSignup.value.password,
      fullname:formSignup.value.fullname,
      email: formSignup.value.email,
      gender:formSignup.value.gender.gender,
      birthday:formSignup.value.ngay+'-'+formSignup.value.thang+'-'+formSignup.value.nam,
      schoolfee:"0",
      marks:"0"
    }
    console.log(formSignup.value);
    this.DataService.ListStudents.push(this.list)
    this.fb.ListStudents.push(this.list)
    this.db.list('/Students').push(this.list);
    console.log('Day la danh sach hs2',this.fb.ListStudents);
    this.login = !this.login
  }
  getHs()
  {
    return this.students;
  }
  Login()
  {
    this.login =!this.login
  }
  
}
