import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageModule } from 'angular-2-local-storage';

import { TimerService } from './timer.service';

describe('TimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig({
        prefix: 'app',
        storageType: 'localStorage',
        notifyOptions : {setItem: true, removeItem: true}
        })
      ],
      providers: [TimerService]
    });
  });

  it('should ...', inject([TimerService], (service: TimerService) => {
    expect(service).toBeTruthy();
  }));
});
