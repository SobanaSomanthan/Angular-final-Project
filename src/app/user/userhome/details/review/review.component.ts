import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/shared/services/review.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
    @Input() prod:string | undefined;
  reviewForm:any;
  constructor(private fb:FormBuilder, private rs:ReviewService) { 
    this.reviewForm = this.fb.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      message:['',[Validators.required,Validators.minLength(15)]],
      email:['',[Validators.required, Validators.pattern(
        "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

    });
  }
  saveReview(product:any){


    var temp:any={
      id: Math.round(Math.random()*10000),
      name: this.reviewForm.value.name,
      email: this.reviewForm.value.email,
      message:this.reviewForm.value.message,
      product:product

    }
    this.rs.postReview(temp).subscribe(
      { 
       next: data=>{
         alert('Your Review is saved')
         location.reload();
       },
       error:(error)=>alert('Not saved ---some Error')
     }

     )
   }
}

