import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductComponent } from '../admin-product/admin-product.component';
import { ProductService } from 'src/app/shared/services/product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-table',
  templateUrl: './admin-product-table.component.html',
  styleUrls: ['./admin-product-table.component.css']
})
export class AdminProductTableComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'image', 'aboutitem','price', 'type', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() user:any;
  

  ngOnInit(): void {
    this.getProduct();
   }
  constructor(private dialog:MatDialog, private ps: ProductService, public router: Router, public route: ActivatedRoute) { }
  
  getUser(){
    this.ps.getProduct().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:
        console.log
      }
  );
  
}
   openAddEditProduct(){
      const dialogRef = this.dialog.open(AdminProductComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=>{
          if(val)
          {
            this.getProduct();
          }
        }
      })
    }
    
    getProduct(){
      this.ps.getProduct().subscribe({
        next:(res)=>{
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error:
          console.log
        }
    );
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteProduct(id:number){
    this.ps.deleteProduct(id).subscribe({
      next:(res)=>{
        
        alert("Product Deleted");
        this.getProduct();
      },
      error: console.log,
    });
  }

  openEditProduct(data: any) {
    const dialogRef = this.dialog.open(AdminProductComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProduct();
        }
      },
    });
  }
  }
