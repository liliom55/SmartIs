import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-big-navbar',
  templateUrl: './big-navbar.component.html',
  styleUrls: ['./big-navbar.component.scss']
})
export class BigNavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
