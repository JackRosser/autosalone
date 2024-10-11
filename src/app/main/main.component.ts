// QUI fuNziONAVA TUTTO FINO A QUANDO NON HO GeNERATO LE CARDS DINAMICAMENTE
// IL COMANDO DEL CAROSELLO PARTIVA PRIMA RISPETTO ALLA FETCH, QUINDI LE IMMAGINI NON SI MUOVEVANO
// SONO ANDATO A CERCARMI ALCUNI METODI PER RISOLVERE E HO RISOLTO, ALCUNI NON LI CONOSCEVO

import { iCar } from './../models/icars';
import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('cardList') cardList!: ElementRef<HTMLDivElement>;
  currentIndex = 0;
  cardWidth = 0;
  carsCatalogue: iCar[] = [];
  router: any;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch("db 2.json");
      if (!response.ok) {
        throw new Error("Errore nella chiamata");
      }
      const data: iCar[] = await response.json();

      if (data.length >= 10) {
        while (this.carsCatalogue.length < 10) {
          const randomCarIndex = Math.floor(Math.random() * data.length);
          const randomCar = data[randomCarIndex];

          if (!this.carsCatalogue.some(car => car.model === randomCar.model && car.brand === randomCar.brand)) {
            this.carsCatalogue.push(randomCar);
          }
        }
      }

      console.log(this.carsCatalogue);

      // Forza il rilevamento delle modifiche dopo il caricamento dei dati
      this.cdr.detectChanges();
      this.initializeCarousel();
    } catch (err) {
      console.log("Errore: " + err);
    }
  }

  ngAfterViewInit() {
    // questo è vuoto perchè il carosello parte dopo la fetch
  }

  initializeCarousel() {
    this.calculateCardWidth();
    this.updateSlide();
  }

  calculateCardWidth() {
    if (this.cardList && this.cardList.nativeElement.children.length > 0) {
      this.cardWidth = (this.cardList.nativeElement.children[0] as HTMLElement).offsetWidth;
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.getCardsCount();
    this.updateSlide();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.getCardsCount()) % this.getCardsCount();
    this.updateSlide();
  }

  updateSlide() {
    if (this.cardList && this.cardList.nativeElement) {
      const offset = -this.currentIndex * this.cardWidth;
      this.renderer.setStyle(this.cardList.nativeElement, 'transform', `translateX(${offset}px)`);
      this.renderer.setStyle(this.cardList.nativeElement, 'transition', 'transform 0.5s ease-in-out');
    }
  }

  getCardsCount(): number {
    return this.cardList.nativeElement.children.length;
  }

}
