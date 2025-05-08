import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book.interface';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  imports: [NgIf, CommonModule, AsyncPipe],
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  constructor(private router: Router, public bookService: BookService) {}
  

  onSelectBook(book: Book) {
    this.router.navigate(['/books', book.id], { state: { book } });
  }
}
