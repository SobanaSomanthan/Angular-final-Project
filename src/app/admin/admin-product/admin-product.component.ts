import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit  {
  productForm: FormGroup;
  
  constructor(private fb: FormBuilder, private ps: ProductService, 
    private dialogRef: MatDialogRef<AdminProductComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.productForm = this.fb.group({
      name: '',
      image:'',
      AboutItem: '',
      price: '',
      type : '',

    })
   }
   ngOnInit(): void{
    this.productForm.patchValue(this.data);
   }
   onFormSubmit(){
    if(this.productForm){
      if(this.data){
     this.ps.updateProduct(this.data.id,this.productForm.value).subscribe({
      next:(val: any)=>{
        alert("Products updated successfully");
        this.dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      },
     });
    }
     else{
     this.ps.addProduct(this.productForm.value).subscribe({
      next:(val: any)=>{
        alert("Products added successfully")
        this.dialogRef.close(true);
      },
      error:(err:any)=>{
        console.error(err);
      },
    });
  }
}
}
}