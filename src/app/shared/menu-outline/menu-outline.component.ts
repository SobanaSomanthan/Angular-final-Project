import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-menu-outline',
  templateUrl: './menu-outline.component.html',
  styleUrls: ['./menu-outline.component.css']
})
export class MenuOutlineComponent implements OnInit {
  lang:any="english"
  languages:any=[
    {name:"English", value:"english"},
    {name:"Tamil", value:"tamil"},
    {name:"Hindi", value:"hindi"}
  ]

cartshow:boolean=true;
cartCount:number=1;
username:any=""
  constructor(private ts:TranslateService, private log:LogService,private router:Router,private route:ActivatedRoute) {
    this.ts.use(this.lang)
   }

   changeLang():void{
    this.ts.use(this.lang)
   }

  ngOnInit(): void {
    let usertype=sessionStorage.getItem("usertype");
    this.username=sessionStorage.getItem("username");
    if(usertype=="admin")
     this.cartshow=false;
    let cart=localStorage.getItem("cart");
    if(cart)
       this.cartCount=JSON.parse(cart).length;
    else
       this.cartCount=0;

       
  }
  
  navigate(url:string){
    
    if(url=="")
    window.location.reload()
    else
    this.router.navigate([url], {relativeTo:this.route});
  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
}
}
