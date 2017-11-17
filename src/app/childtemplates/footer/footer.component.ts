import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightText: string = 'Copyright 2017 Moelis Australia';
  
  constructor() { }

  ngOnInit() {
  }

}
