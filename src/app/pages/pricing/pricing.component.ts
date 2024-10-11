import { iCar } from './../../models/icars';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

carPrices!: iCar[]


ngOnInit() {
  fetch("db 2.json").then(res => {
    if (!res.ok) {
      throw new Error("Errore nella chiamata")
    } return res.json()
  }).then((data: iCar[]) => {
    this.carPrices = data
    console.log(this.carPrices);


  }).catch(err => {
    console.log("ERROR: ", err);

  })
}


}
