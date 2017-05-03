import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MomentModule } from 'angular2-moment';
import { LocalStorageModule } from 'angular-2-local-storage';

import { TimerComponent } from './timer.component';
import { TimerListComponent } from './timer-list/timer-list.component';
import { TimerService } from './timer.service';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent, TimerListComponent ],
      providers: [ TimerService ],
      imports: [
        MomentModule,
        LocalStorageModule.withConfig({
            prefix: 'app',
            storageType: 'localStorage',
            notifyOptions : {setItem: true, removeItem: true}
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
