import { Injectable } from '@angular/core';
import { PresentationData } from './presentation.data';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  private items = PresentationData;
  private currentIndex = 0;
  private intervalId: any;
  private pauseTimeout: any;
  private pauseDuration = 7000;

  getItems() {
    return this.items;
  }

  getCurrentItem() {
    return this.items[this.currentIndex];
  }

  nextItem(manual = false) {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    if (manual) this.pauseAutoSlide();
  }

  prevItem() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.pauseAutoSlide();
  }

  startAutoSlide(callback: () => void) {
    this.intervalId = setInterval(() => {
      this.nextItem();
      callback();
    }, 5000);
  }

  pauseAutoSlide() {
    clearInterval(this.intervalId);
    clearTimeout(this.pauseTimeout);
    this.pauseTimeout = setTimeout(() => {
      this.startAutoSlide(() => {});
    }, this.pauseDuration);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
    clearTimeout(this.pauseTimeout);
  }
}
