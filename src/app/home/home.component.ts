import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './../services/google-analytics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit(): void {
  }

  SendClickedButtonEvent(){
    this.googleAnalyticsService.eventEmitter("click-button", {
      event_label: 'button',
      event_category: 'test',
      value: 1
    });
  }
}
