import { Component } from '@angular/core';
import { Electronichome } from '../home/electronichome';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-recomended',
  standalone: true,
  imports: [],
  templateUrl: './recomended.component.html',
  styleUrl: './recomended.component.css'
})
export class RecomendedComponent {
  electronics :Electronichome[] = []

  constructor(_electronicSerice:ElectronicService){
  this.electronics = _electronicSerice.electronic
  }
}
