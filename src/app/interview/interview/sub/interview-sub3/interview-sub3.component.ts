import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-interview-sub3',
  templateUrl: './interview-sub3.component.html',
  styleUrls: ['./interview-sub3.component.css']
})
export class InterviewSub3Component implements OnInit {


  meMsg:string = 'Update this message';
  constructor() { }

  ngOnInit() {
  }

}