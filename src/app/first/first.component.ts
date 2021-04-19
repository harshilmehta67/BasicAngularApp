import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private rs: RestService) { }
  Subjects: any;
  Student: any;
  //Input Data
  Name:string | undefined;
  email: string | undefined;
  BirthDate : string | undefined;
  Gender = 'Male';
  Subject: string | undefined;
  Active = true;

  addUser(user: any){
    this.rs.createUser(user).subscribe((response)=>{
      console.log("New User Added!");
    })
  }
  ngOnInit(): void {
  }

}
