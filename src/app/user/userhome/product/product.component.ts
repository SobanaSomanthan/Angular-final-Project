import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productlist: any;
  @Input() product:any;
  constructor(private api:ApiService,private cartService:CartService , 
    public router:Router,public route:ActivatedRoute
    ,private snackbar: MatSnackBar) {
   }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productlist = res;
      this.productlist.forEach((a:any) => {
      Object.assign(a,{quantity:1, total: a.price});
      });
    })
  
  }

  addtocart(){
    this.snackbar.open("Product added to cart", "Dismiss",{
      duration: 3000,
      verticalPosition: 'top',
    });
    this.cartService.addtoCart(this.product);
    
}
removeItem(item: any){
  this.cartService.removeCartItem(item);
}
emptycart(){
  this.cartService.removeAllCart();
}
@Input() products:any;

  changeRoute(){
    this.router.navigate(['details'],{relativeTo:this.route,state:this.product});
  }
  changeRoute1(){
    this.router.navigate(['cart'],{relativeTo:this.route,state:this.product});
  }
}
