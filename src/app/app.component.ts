import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: string = 'Universal Test App';
  iterator: number[] = new Array(1);
  isBrowser: any;
  isServer: any;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ){
    this.isBrowser = isPlatformBrowser(platformId);
    this.isServer = isPlatformServer(platformId);
  }
  
  ngOnInit() {
    if(this.isBrowser)
      console.log('App loaded on browser!');
    else if(this.isServer)
      console.log('App loaded on server!');
    else
      console.log('App loaded!');
  }
  
  log(logMe: string) {
    console.log(`Hello ${logMe}`);
  }
  
}