import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from './Students';
@Injectable()

export class QuizService{
    constructor(private http: HttpClient)
    {

    }
 
 getQuiz(jsonName:String)
 {
    const url ='./assets/TaiNguyen/db/Quizs/'+jsonName;
     return this.http.get(url);
 }
 getSub()
 {
     const url1 ='./assets/TaiNguyen/db/Subjects.json';
     return this.http.get(url1);
 }
 getStudent()
 {
     const url2 ='./assets/TaiNguyen/db/Students.json';
     return this.http.get<Student[]>(url2);
 }
 
}