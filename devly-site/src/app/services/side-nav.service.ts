import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  sideNavCollapsed: boolean = false;
  constructor() { }


  toggleExpand() {
    console.log("sideNav expand?", !this.sideNavCollapsed);
    this.sideNavCollapsed = !this.sideNavCollapsed;
  }
}
