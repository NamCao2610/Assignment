import {Injectable,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Student } from './Students';

@Injectable()

export class DataService {
 ListStudents: Student[];
 infor:Student;
 datalogin:boolean;
    constructor(private http: HttpClient)
    {
    
    }

getStudent()
{
    const url2 ='./assets/TaiNguyen/db/Students.js';
    return this.http.get<Student[]>(url2);
}

addStudent(stu:Student)
{
  this.ListStudents.push(stu);
  
}
setList(stu:Student[])
{
    this.ListStudents = stu;
}
getList()
{
    return this.ListStudents;
}

}