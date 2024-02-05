import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './parts/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeReader';
}
