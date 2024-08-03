import { Component } from '@angular/core';
import { Electronic } from './electronic';
import { ElectroniccardComponent } from '../electroniccard/electroniccard.component';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ElectroniccardComponent],
  templateUrl:'./products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  electronics :Electronic[] = []
  products:any;
constructor(_electronicService:ElectronicService){
/*   this.electronics = _electronicService.electronic */
_electronicService.getProducts().subscribe({

  next:(res)=> {
    console.log(res);
    this.products=res;
  },
  error(err){
    console.log(err);

  },
  complete(){
    console.log("Complete");

  }
})
}
}
