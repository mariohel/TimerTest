import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerListComponent } from './timer/timer-list/timer-list.component';
import { TimerService } from './timer/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MomentModule,
    LocalStorageModule.withConfig({
        prefix: 'app',
        storageType: 'localStorage',
        notifyOptions : {setItem: true, removeItem: true}
    })
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
