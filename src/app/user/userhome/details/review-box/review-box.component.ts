import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/shared/services/review.service';
@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent  {
  review:any;
  constructor(private rs:ReviewService) {
    this.rs.getReview().subscribe(
      {
        next:(data:any)=>this.review= data,
        error:()=>this.review=[]
      }
    )
  }
   }
