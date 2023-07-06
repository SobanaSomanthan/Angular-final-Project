import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(products: any, min_value:number, max_value: number):any{
    return products.filter((x:any)=>(x.price)>=min_value &&((x.price)<=max_value))
     }

}
