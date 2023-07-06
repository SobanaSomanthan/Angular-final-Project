import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { AdminProductTableComponent } from './admin-product-table/admin-product-table.component';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children:[{
    path:"user",
    component:UserComponent
  }]
}]


@NgModule({
  declarations: [
    HomeComponent,
    AdminProductComponent,
    UserComponent,
    AdminProductTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class AdminModule { }
