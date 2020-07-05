import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, SkillsComponent, UserComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
