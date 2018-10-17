import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private viewPort: Subscription;
  public heightParallex: number;
  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.viewPort = this.breakpointObserver
      .observe(['(max-width: 414px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.heightParallex = 200;
        } else {
          this.heightParallex = 400;
        }
      });
    AOS.init();
  }
  ngOnDestroy(): void {
    if (this.viewPort) {
      this.viewPort.unsubscribe();
    }
  }
}
