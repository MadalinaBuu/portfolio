import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, AboutComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
