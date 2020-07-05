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
      new FormGroup({
        name: new FormControl('Secretary'),
        level: new FormControl('3')
      }),
      new FormGroup({
        name: new FormControl('Tennis'),
        level: new FormControl('5')
      })
    ])
  });

  skills = this.user.get('skills') as FormArray;

  constructor() {}

  ngOnInit(): void {}
}
