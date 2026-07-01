import { Component } from '@angular/core'; 
import { HomeComponent } from './features/home/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [ 
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  { 
}
