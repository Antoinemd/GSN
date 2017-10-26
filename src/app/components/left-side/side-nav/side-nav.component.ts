import { Component, OnInit } from '@angular/core';

/* Services */
import { NotifyStateMenuService } from '../../../services/notify-state-menu.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers:[NotifyStateMenuService]
})

export class SideNavComponent implements OnInit {

  sideNavWidth: number;
  sideOpacity: number;

  isVisible: boolean;
  
  constructor(private notifyStateMenuService: NotifyStateMenuService) { 

  }

  ngOnInit() {
    this.sideNavWidth = 65; // unit: px
    this.sideOpacity = 0.5;
    this.isVisible = false;
  }

  widthUp(): void {
    this.sideNavWidth = 200; // unit: px
    this.sideOpacity = 1;
    this.isVisible = true;
    console.log("increase");
    this.sendMessage();
  }

  widthDown(): void {
    this.sideNavWidth = 65; // unit: px
    this.sideOpacity = 0.5;
    this.isVisible = false;
    console.log("decrease");
    this.sendMessage();
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    // this.notifyStateMenuService.sendMessage('isVisible: '+this.isVisible);
    this.notifyStateMenuService.sendMessage(this.isVisible);
    
  }


  clearMessage(): void {
    // clear message
    this.notifyStateMenuService.clearMessage();
  }
}
