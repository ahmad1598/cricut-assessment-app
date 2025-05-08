import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { BookService } from './services/book.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule,
    RouterOutlet,
    SearchBarComponent
  ],
  providers: [BookService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public bookService: BookService) {}
}
