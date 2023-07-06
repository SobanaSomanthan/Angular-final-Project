import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from './services/log.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';

  constructor(private log:LogService,private router:Router, private dialog:MatDialog){
          
  }

    openAddEditProduct(){
      this.dialog.open(AdminProductComponent)
    }
  ngAfterViewInit(){
    if(!this.log.getStatus()){
                
      this.router.navigate(['login'])
   }
   else{
     if(this.log.usertype=="admin")
       this.router.navigate(['admin/home']);
     else
       this.router.navigate(['user/home']);
   }
  }
}
