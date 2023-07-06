import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { ProductComponent } from './userhome/product/product.component';
import { DetailsComponent } from './userhome/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CartComponent } from './userhome/cart/cart.component';
import { ReviewComponent } from './userhome/details/review/review.component';
import { ReviewBoxComponent } from './userhome/details/review-box/review-box.component';
import { ProfileComponent } from './userhome/profile/profile.component';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"details",
      component: DetailsComponent
    },
    {
      path:"cart",
      component:CartComponent
    },
    {
      path:"profile",
      component:ProfileComponent
    }
    ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductrowComponent,
    ProductComponent,
    DetailsComponent,
    CartComponent,
    ReviewComponent,
    ReviewBoxComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
