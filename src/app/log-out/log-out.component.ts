import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
login : boolean;
  constructor(private DataService:DataService) { }

  ngOnInit() {
    this.login = this.DataService.datalogin;
    console.log('login cua logout',this.DataService.datalogin);
  }
Login()
{
  this.login = !this.login;
  this.DataService.datalogin = false;
}
}
