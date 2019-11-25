import {Injectable,OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {Student} from './Students';


@Injectable()

export class FirebaseService implements OnInit{
    ListStudents:any[];
    
    constructor(private db:AngularFireDatabase){}
ngOnInit(){
   
}
getStudent()
{
    //return this.db.firestore
   return this.db.list('/Students').valueChanges()
}
updateStudent()
{
  return this.db.list('/Students')
}
additem(){

}
}