import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from "./about/about.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
