import { Component } from '@angular/core';
import { iCar } from '../../models/icars';

@Component({
  selector: 'app-jeep',
  templateUrl: './jeep.component.html',
  styleUrl: './jeep.component.scss'
})
export class JeepComponent {

  carsContainer!: iCar[]
  nonDisponibile: string = "bg-red-700 p-1 absolute w-full z-20 top-[50%] rotate-45 text-center text-white shadow-md"


ngOnInit() {



  fetch("db 2.json")
  .then(res => {
    if(!res.ok) {
      throw new Error("Errore nella chiamata")
    } return res.json()
  }).then((data: iCar[]) => {
    this.carsContainer = data.filter(car => car.brand === "Jeep")
    console.log(this.carsContainer);


  }).catch(err => {
    console.log("errore: ",err);

  })
}

}
