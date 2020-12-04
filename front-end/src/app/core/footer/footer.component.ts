import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyrights = '© 2020 Wave, Inc. "Wave" design is registered trademark of Wave, Inc. All Rights Reserved.';

  constructor() { }

  ngOnInit(): void {
  }

}
