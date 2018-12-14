import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/admin/product.service';
import { CategoryService } from 'shared/services/admin/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { NewProduct } from 'shared/models/new-product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: NewProduct =  new NewProduct();
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(prod => this.product = prod);
    }
  }

  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    }
    else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }
  
  delete(){
    if(!confirm('Are you sure, you wants to delete this product ?')){
      return;
    }

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }

}
