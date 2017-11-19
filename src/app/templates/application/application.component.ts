import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'mo-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  // constructor() { }
  ua: FormGroup;
  // constructor() { }
  constructor(fb: FormBuilder) {
    this.ua = fb.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
  }

  ngOnInit() {
  }

}
