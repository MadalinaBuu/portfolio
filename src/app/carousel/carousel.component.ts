import { Component } from '@angular/core';
import { carouselItems } from './carousel-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  public carouselItems = carouselItems;
}
