import { TestBed, async } from '@angular/core/testing';
import { MomentModule } from 'angular2-moment';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerListComponent } from './timer/timer-list/timer-list.component';
import { TimerService } from './timer/timer.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TimerComponent,
        TimerListComponent
      ],
      providers: [TimerService],
      imports: [
        MomentModule,
        LocalStorageModule.withConfig({
          prefix: 'app',
          storageType: 'localStorage',
          notifyOptions : {setItem: true, removeItem: true}
          })
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

/*  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/
});
