import { Component, Input } from '@angular/core';
import { Electronic } from '../products/electronic';

@Component({
  selector: 'app-electroniccard',
  standalone: true,
  imports: [],
  templateUrl: './electroniccard.component.html',
  styleUrl: './electroniccard.component.css'
})
export class ElectroniccardComponent {
  @Input() inp : Electronic = {} as Electronic
}
