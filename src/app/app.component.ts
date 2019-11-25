import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Student} from './Students';
import {AngularFireDatabase} from '@angular/fire/database';
import {FirebaseService} from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WebThiTracNghiem';
  list:any;
  Students:any[];
  constructor(private DataService:DataService,private FireService:FirebaseService,private db:AngularFireDatabase){
    
  }
  ngOnInit()
  {
    this.DataService.getStudent().subscribe(data=>
      {
        this.DataService.ListStudents = data;
      })
      this.FireService.getStudent().subscribe(Students =>{
        this.FireService.ListStudents = Students;
        console.log("Day la danh sach firebase",this.FireService.ListStudents);
    })
   
  }
  
}
