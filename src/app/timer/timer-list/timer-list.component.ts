import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrls: ['./timer-list.component.scss']
})
export class TimerListComponent implements OnInit {

  @Input() timeList: number[];
  @Input() format: string;
  @Output() itemDeleted = new EventEmitter();
  mouseOvered: Object = {};

  constructor() { }

  ngOnInit() {
  }

  deleteTimer(t) {
    console.log('deleting');
    console.log(t);
    this.itemDeleted.emit(t);
  }

}
