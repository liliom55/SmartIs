import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-parallax',
  templateUrl: './section-parallax.component.html',
  styleUrls: ['./section-parallax.component.scss']
})
export class SectionParallaxComponent implements OnInit {
  @Input()
  height: number;
  @Input()
  imageUrl: string;
  @Input()
  titles: string[];
  constructor() {}

  ngOnInit() {}
}
