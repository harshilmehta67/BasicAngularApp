import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IntroAngular';
  
  constructor(private rs : RestService){}

  columns = ["User Id", "Name", "Email","Gender", "Status", "Mobile"];

  index = ["id", "name" , "email","gender", "active", "mobile"] ;

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },
      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }
}
