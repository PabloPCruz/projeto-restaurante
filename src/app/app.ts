import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { Header } from './header/header';
import { PresentationComponent } from './presentation/presentation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PresentationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apresentacao-restaurante-01');
}
