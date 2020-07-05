import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = new FormArray([
    new FormControl('Reactive'),
    new FormControl('Array'),
    new FormControl('Form')
  ]);

  constructor() {}

  ngOnInit(): void {}

  prepend(): void {
    this.skills.insert(0, new FormControl(''));
  }

  addSkill(): void {
    this.skills.push(new FormControl(''));
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  replaceFirst(): void {
    this.skills.setControl(0, new FormControl(''));
  }

  get first(): AbstractControl {
    return this.skills.at(0).value;
  }

  clear(): void {
    this.skills.clear();
  }
}
