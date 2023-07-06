import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user:any;
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  changeRoute(){
    this.router.navigate(['userflow'],{relativeTo:this.route,state:this.user});
  }
}
