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
