import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/types';
  @Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent implements OnInit {

  searchText: string='';
  productlist:any;
  min_value:number=100;
  max_value:number=100000;

types=["All",
"Mobile",
"Laptop",
"Tablets",
"Watch"]
selected:string="All";
 state2?:any;
  @Input() products:any[]=[];
  @Input() producttitle:string="";
  constructor(public router:Router,public route:ActivatedRoute) {
    this.state2=this.router.getCurrentNavigation()?.extras.state;
  
   }

  ngOnInit(): void {
  }

  changeRoute(current:product){
    alert("event firing")
    this.router.navigate(['details'],{relativeTo:this.route,state:current});
  }
}
