import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from 'shared/services/order/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/admin/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'shared/models/product';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {

  }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart());
    this.populateProducts();
  }

  private populateProducts() {
    this.productService
      .getAll()
      .switchMap(p => {
        this.products = p;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      })
  }

  private applyFilter() {
    this.filteredProducts = this.category ? this.products.filter(p => p.category === this.category) : this.products;
  }
}
