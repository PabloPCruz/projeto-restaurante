import { AfterViewInit, Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements AfterViewInit {
  constructor(private headerService: HeaderService) { }

  ngAfterViewInit() {
    this.headerService.smoothNavigation();
  }
}
