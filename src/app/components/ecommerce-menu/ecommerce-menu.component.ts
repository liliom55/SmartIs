import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecommerce-menu',
  templateUrl: './ecommerce-menu.component.html',
  styleUrls: ['./ecommerce-menu.component.scss']
})
export class EcommerceMenuComponent implements OnInit {
  @Input()
  wishList: number;
  @Input()
  cartList: number;
  constructor() {}

  ngOnInit() {}
}
