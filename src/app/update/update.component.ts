import { Component, OnInit } from '@angular/core';
import {Student} from '../Students';
import {DataService} from '../data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
liststudent:Student;
login:boolean;
  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.login = this.DataService.datalogin;
    this.liststudent = this.DataService.infor;
    
  }

}
