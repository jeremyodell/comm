import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InterviewComponent } from './interview/interview/interview.component';
import { InterviewSub1Component } from './interview/interview/sub/interview-sub1/interview-sub1.component';
import { InterviewSub2Component } from './interview/interview/sub/interview-sub2/interview-sub2.component';
import { InterviewSub3Component } from './interview/interview/sub/interview-sub3/interview-sub3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, InterviewSub1Component, InterviewSub2Component, InterviewSub3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
