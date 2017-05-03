import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { TimerService } from './timer.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  @Input() format: string;


  constructor(private service: TimerService) {
  }

  ngOnInit() {
    this.service.init();
  }

  ngOnDestroy() {
    this.service.destroy();
  }

  play() {
    this.service.play();
  }

  pause() {
    this.service.pause();
  }

  stop() {
    this.service.stop();
  }

  saveTimer() {
    this.service.saveTimer();
  }

  deleteTimer(t) {
    this.service.deleteTimer(t);
  }
}
