import { Injectable, NgZone } from '@angular/core';
import { EventParams } from '../interfaces/analytics';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor(private zone: NgZone) { }

  public eventEmitter(
    action: string,
    params?: EventParams
  ){
    return this.zone.runOutsideAngular( () => new Promise( (resolve, reject) => {
      try {
        const tmr = setTimeout( () => reject( new Error('gtag call timed-out')), 10000 );

        gtag('event', action, {
          ...params,
          event_callback: () => { clearTimeout(tmr); resolve(); }
        })
      }
      catch(e) { reject(e); }
    }));
  }

  public pageView(page_title?: string, page_path?: string, page_location?: string) {
    return this.eventEmitter('page_view', { page_title, page_location, page_path });
  }

  public login(method?: string) {
    return this.eventEmitter('login', { method });
  }
}
