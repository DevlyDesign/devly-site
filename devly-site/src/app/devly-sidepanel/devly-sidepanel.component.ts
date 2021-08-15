import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'devly-sidepanel',
  templateUrl: './devly-sidepanel.component.html',
  styleUrls: ['./devly-sidepanel.component.css']
})
export class DevlySidepanelComponent implements OnInit {
  bgColor: any;

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit(){
    console.log(this.route);
    console.log("url",this.router.url);
    if (this.router.url === "/devlydata") {
      console.log("hit blue");
      this.bgColor = "#0a2ea4";
    } 
    else if (this.router.url === '/projects') {
      console.log("hit green");
      this.bgColor = "#0e772a";
    } else {
      console.log("hit red");
      this.bgColor = "#ef495b";
    }
    
  }

}
