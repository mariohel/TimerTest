import { Injectable } from '@angular/core';
import { Observable , Subscription } from 'rxjs/Rx';
import { LocalStorageService } from 'angular-2-local-storage';

export class ITimer {
  time: number;
  date: number;
  threads: number;
  list: number[];
  paused: boolean;
}

@Injectable()
export class TimerService {

// LocalStorage Variables
  public storage: ITimer;

  // Timer Variables
  public startTime: number = 1; // initial time ticking
  public time: number = 1; // current time ticking
  public threads: number = 0; // current opened windows
  public timer: Observable<number>;
  public subscription: Subscription;
  public timeList: number[] = []; // saved time list

  constructor(private localStorageService: LocalStorageService) {
    // When the localStorage object is updated from ANOTHER WINDOW
    window.addEventListener( 'storage', (e) => {
      this.setItemsHandler(e);
    });
    window.addEventListener('unload', (e) => {
      this.destroy();
    });
    // Get Cached current Time
    this.getCache();
    this.threads++;
  }

  init() {
    this.timer = Observable.timer(0, 1);

    if (this.storage && !this.storage.paused) {
      this.play();
    }
  }

  destroy() {
    if (this.threads > 1) {
      this.threads--;
      this.setCache();
    } else {
      this.localStorageService.remove('timer');
    }

   if (this.subscription) {
      this.subscription.unsubscribe();
   }
  }

  setItemsHandler(e: any) {
    this.getCache();
    if (this.storage && this.storage.paused) {
      this.pause();
    } else if ( !this.subscription && (this.storage && !this.storage.paused) ) {
      this.play();
    }
  }

  tick(time) {
    const diff = (this.storage.date && !this.storage.paused) ? (new Date().getTime() - this.storage.date) : 0;
    this.time = this.startTime + (diff/10);
  }

  play() {
    if (!this.subscription) {
      this.getCache();
      this.subscription = this.timer.subscribe(t => {
          this.tick(t);
      });
    }
    this.setCache();
  }

  pause() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
      this.setCache();
    }
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
      this.time = 1;
      this.setCache();
  }

  saveTimer() {
    if (this.time) {
      this.timeList.push(this.time);
      this.setCache();
    }
  }

  deleteTimer(t) {
    const index = this.timeList.indexOf(t);
    this.timeList.splice(index, 1);
    this.setCache();
  }

  setCache() {
    const storage = {
      time: this.time,
      threads: this.threads,
      date: new Date().getTime(),
      list: this.timeList ? this.timeList : [],
      paused: (this.subscription === null)
    };
    this.storage = storage;
    this.localStorageService.set('timer', storage);
  }

  getCache() {
    this.storage = this.localStorageService.get<ITimer>('timer');
    if (this.storage && this.storage.time) {
      const diff = (this.storage.date && !this.storage.paused) ? new Date().getTime() - this.storage.date : 0;
      this.startTime = this.time = this.storage.time + diff ;
      this.timeList = this.storage.list;
      this.threads = this.storage.threads;
    }

  }

}
