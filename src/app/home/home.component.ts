import { Component } from '@angular/core';
import { Electronichome } from './electronichome';
import { RecomendedComponent } from "../recomended/recomended.component";
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  electronics :Electronichome[] = []

constructor(_electronicService:ElectronicService){
  this.electronics = _electronicService.electronic
}
}
