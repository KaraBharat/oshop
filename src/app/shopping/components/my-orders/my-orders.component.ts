import { OrderService } from 'shared/services/order/order.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'shared/services/account/auth.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.orders$ = this.authService.user$.switchMap(user =>{
      return this.orderService.getOrdersByUserId(user.uid);
    });
  }
}
