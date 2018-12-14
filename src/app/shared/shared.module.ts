import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductCardComponent } from 'shared/component/product-card/product-card.component';
import { ProductQuantityComponent } from 'shared/component/product-quantity/product-quantity.component';
import { AuthGuard } from 'shared/services/account/auth-guard.service';
import { AuthService } from 'shared/services/account/auth.service';
import { UserService } from 'shared/services/account/user.service';
import { CategoryService } from 'shared/services/admin/category.service';
import { ProductService } from 'shared/services/admin/product.service';
import { OrderService } from 'shared/services/order/order.service';
import { ShoppingCartService } from 'shared/services/order/shopping-cart.service';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
  ],
  
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],

  exports:[
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot().ngModule
  ],

  providers:[
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
