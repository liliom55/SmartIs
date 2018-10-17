import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'solid',
        style({
          opacity: 1
        })
      ),
      state(
        'transparent',
        style({
          opacity: 0.5
        })
      ),
      transition('solid => transparent', animate('700ms ease-out')),
      transition('transparent => solid', animate('700ms ease-in'))
    ])
  ]
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbar')
  navbar: ElementRef;
  state = 'solid';
  public wishList = [1, 2, 3, 4, 5];
  public cartList = [1];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.navbar.nativeElement.offsetTop;
  //   const scrollPosition = window.pageYOffset;
  //   if (scrollPosition === componentPosition) {
  //     this.state = 'solid';
  //   } else if (scrollPosition === 0) {
  //     this.state = 'transparent';
  //   }
  // }
}
