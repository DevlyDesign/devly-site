import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/styles/hover.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

 /*  getUrl() {
  return "url('https://devlydesign.github.io/devly-site/assets/images/bg-blob1.png')";
} */
  }

 getUrl() {
    return "url('https://devlydesign.github.io/devly-site/assets/images/bg-blob1.png')";
  }
  
}

