import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user = new FormGroup({
    name: new FormControl('Drei'),
    skills: new FormArray([
      new FormControl('Tennis'),
      new FormControl('Secretary')
    ])
  });

  skills = this.user.get('skills') as FormArray;

  constructor() {}

  ngOnInit(): void {}
}
