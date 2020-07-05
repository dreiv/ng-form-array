import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  AbstractControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  skills = new FormArray([
    new FormGroup({
      level: new FormControl('3'),
      name: new FormControl('Reactive')
    }),
    new FormGroup({
      level: new FormControl('7'),
      name: new FormControl('Array')
    }),
    new FormGroup({
      level: new FormControl('1'),
      name: new FormControl('Form')
    })
  ]);

  constructor() {}

  ngOnInit(): void {}

  prepend(): void {
    this.skills.insert(
      0,
      new FormGroup({
        level: new FormControl(),
        name: new FormControl()
      })
    );
  }

  addSkill(): void {
    const group = new FormGroup({
      level: new FormControl(''),
      name: new FormControl('')
    });

    this.skills.push(group);
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  replaceFirst(): void {
    this.skills.setControl(
      0,
      new FormGroup({
        level: new FormControl(),
        name: new FormControl()
      })
    );
  }

  get first(): AbstractControl {
    return this.skills.at(0).value;
  }

  clear(): void {
    this.skills.clear();
  }
}
