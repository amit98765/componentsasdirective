import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any[] = [
    { src: "../assets/images/assignment2_2.png", title: "The assignment i did", description: "This version contains few mistakes" },
    { src: "../assets/images/assignment2.png", title: "Assignment", description: "this version works well" },
    { src: "../assets/images/ay0ol1.jpg" }
  ]
}
