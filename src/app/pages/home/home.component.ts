import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private viewPort: Subscription;
  public heightParallex: number;
  public imgUrl = '../../assets/images/background1.jpg';
  public titles = ['خوش آمدید', 'با ما', 'خوشمزه لاغر شوید'];
  constructor(public breakpointObserver: BreakpointObserver) {}
  ngOnInit() {
    this.viewPort = this.breakpointObserver
      .observe(['(max-width: 414px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.heightParallex = 200;
        } else {
          this.heightParallex = 700;
        }
      });
  }
  ngOnDestroy(): void {
    if (this.viewPort) {
      this.viewPort.unsubscribe();
    }
  }
}
