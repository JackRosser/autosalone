import { iCar } from './../../models/icars';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  car!:iCar
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(params => {
      fetch('db 2.json')
      .then(res => res.json())
      .then((data: iCar[]) => {
        const found = data.find(car => car.id === +params['id']);

        if(found){
          this.car = found
        }
      })
    })


}
}
