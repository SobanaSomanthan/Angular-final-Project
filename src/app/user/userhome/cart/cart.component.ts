import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from './cart-model';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  data:any;
  state?:any;
  public product:Cart[]=new Array<Cart>();
  public grandTotal! : number ;
  constructor( private router:Router, private cartService: CartService) {
    this.state=this.router.getCurrentNavigation()?.extras.state;
   }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
    this.product = res;
    this.grandTotal = this.cartService.getTotalPrice();
  })
}
removeItem(item:any){
const index = this.product.indexOf(item);
if(index >-1){
  this.product.splice(index, 1);
}
}

emptycart(){
  this.cartService.removeAllCart();
}
}
