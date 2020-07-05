import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

function validateSize(arr: FormArray) {
  return arr.length > 3
    ? {
        invalidSize: true
      }
    : null; // returns null for valid
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user = new FormGroup({
    name: new FormControl('Drei'),
    skills: new FormArray(
      [
        new FormGroup({
          name: new FormControl('Secretary'),
          level: new FormControl('3')
        }),
        new FormGroup({
          name: new FormControl('Tennis'),
          level: new FormControl('5')
        })
      ],
      validateSize
    )
  });

  skills = this.user.get('skills') as FormArray;

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    this.skills.push(control);
  }

  constructor() {}

  ngOnInit(): void {}
}
