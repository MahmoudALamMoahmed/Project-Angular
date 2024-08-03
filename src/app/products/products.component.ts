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

constructor(_electronicService:ElectronicService){
  this.electronics = _electronicService.electronic
}
}
