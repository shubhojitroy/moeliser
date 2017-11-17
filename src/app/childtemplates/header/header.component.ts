import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imageSrc: string = 'assets/images/Moelis-logo.png';
  hrefTitle: string = 'Moelis Australia';
  imageWidth: number = 286;
  subtitleText: string = 'Offer Information Line';
  subtitleCtcinfoAus: string = '1800 634 850 (within Australia)';
  subtitleCtcinfoOut: string = '+61 2 9290 9681 (International)';
  
  constructor() { }

  ngOnInit() {
  }

}
