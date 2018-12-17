import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '테스트 Angular';
  months = [
    "January",
    "Feburary",
    "March",
    "April", 
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  isavailable = false;

  myClickFunction(event) {
    alert("Button is clicked");
    console.log(event);
  };

  changemonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
}
