import { Component, OnInit, OnDestroy } from '@angular/core';
import { PresentationService } from './presentation.service';

@Component({
  standalone: false,
  selector: 'app-presentation',
  templateUrl: './presentation.html',
  styleUrls: ['./presentation.css']
})
export class PresentationComponent implements OnInit, OnDestroy {
  currentItem: any;

  constructor(private presentationService: PresentationService) { }

  ngOnInit(): void {
    // Pega o item atual e inicia o auto-slide
    this.currentItem = this.presentationService.getCurrentItem();
    this.presentationService.startAutoSlide(() => {
      this.currentItem = this.presentationService.getCurrentItem();
    });
  }

  ngOnDestroy(): void {
    // Limpa intervalos ao destruir o componente
    this.presentationService.stopAutoSlide();
  }

  nextItem() {
    this.presentationService.nextItem(true);
    this.currentItem = this.presentationService.getCurrentItem();
  }

  prevItem() {
    this.presentationService.prevItem();
    this.currentItem = this.presentationService.getCurrentItem();
  }
}
