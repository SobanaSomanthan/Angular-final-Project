import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TypefilterPipe } from './pipes/typefilter.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    MenuOutlineComponent,
    TypefilterPipe,
    PricefilterPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    
  ],
  exports:[MenuOutlineComponent, TypefilterPipe, PricefilterPipe, SearchPipe]
})
export class SharedModule { }
