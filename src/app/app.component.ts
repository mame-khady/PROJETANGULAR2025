import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./frame/entete/entete.component";
import { MenuComponent } from "./frame/menu/menu.component";
import { FooterComponent } from "./frame/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, MenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'IPSLANGULAR2025';
}
