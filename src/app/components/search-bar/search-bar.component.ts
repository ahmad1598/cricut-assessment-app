import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchTerm = '';

  constructor(public bookService: BookService) {}

  onSearch() {
    if (this.searchTerm.trim()) {
        this.bookService.searchBooks(this.searchTerm);
    }
  }
}
