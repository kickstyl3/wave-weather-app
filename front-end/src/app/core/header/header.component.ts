import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  seconds;
  minutes;
  hour;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.seconds = new Date().getSeconds();
      this.minutes = new Date().getMinutes() + ':';
      this.hour = new Date().getHours() + ':';
    }, 1000)
  }

}
