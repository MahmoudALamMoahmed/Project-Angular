import { Component } from '@angular/core';
import { Electronichome } from './electronichome';
import { RecomendedComponent } from "../recomended/recomended.component";
import { ElectronicService } from '../electronic.service';
import { LoderComponent } from "../loder/loder.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecomendedComponent, LoderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
/*   electronics :Electronichome[] = [] */
  products:Electronichome[] = [];
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
}
)
}
}
