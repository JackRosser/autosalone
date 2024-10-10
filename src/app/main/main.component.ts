import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('cardList') cardList!: ElementRef;
  currentIndex = 0;

  ngAfterViewInit() {
    this.updateCarousel();
  }

  updateCarousel() {
    const cardWidth = this.cardList.nativeElement.querySelector('.card-item').clientWidth;
    this.cardList.nativeElement.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
  }

  prevSlide() {
    const totalCards = this.cardList.nativeElement.querySelectorAll('.card-item').length;
    this.currentIndex = (this.currentIndex - 1 + totalCards) % totalCards;
    this.updateCarousel();
  }

  nextSlide() {
    const totalCards = this.cardList.nativeElement.querySelectorAll('.card-item').length;
    this.currentIndex = (this.currentIndex + 1) % totalCards;
    this.updateCarousel();
  }
}
