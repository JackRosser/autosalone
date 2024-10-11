import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

// 🔴 ho un piccolo bug in versione mobile, le cards vengono tagliate in fase di scorrimento e non riesco a risolvere

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('cardList') cardList!: ElementRef<HTMLDivElement>;
  currentIndex = 0;
  cardWidth = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
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
