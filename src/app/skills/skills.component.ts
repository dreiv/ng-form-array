import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = new FormArray([]);

  constructor() {}

  ngOnInit(): void {}

  addSkill(): void {
    this.skills.push(new FormControl(''));
  }
}
