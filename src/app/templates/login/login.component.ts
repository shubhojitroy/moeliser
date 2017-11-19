import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'mo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pc: FormGroup;
  // constructor() { }
  constructor(fb: FormBuilder) {
    this.pc = fb.group({
      hideRequired: false,
      floatPlaceholder: 'auto',
    });
  }

  ngOnInit() {
  }

}
