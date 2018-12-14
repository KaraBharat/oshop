import { ShoppingCart } from 'shared/models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order/order.service';
import { AuthService } from 'shared/services/account/auth.service';
import { Order } from 'shared/models/order';
import { ShippingOrder } from 'shared/models/shipping-order';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  
  @Input('cart') cart: ShoppingCart;

  shipping: ShippingOrder = new ShippingOrder();
  userId: string;
  subscription: Subscription;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private authService: AuthService
  ) {

  }

  async ngOnInit() {
    this.subscription = this.authService.user$.subscribe(user => {
      this.userId = user.uid;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.placeOrder(order).then(result => {
      this.router.navigate(['/order-success', result.key]);
    });
  }
}
