import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit{
  book: Book | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.book = navigation?.extras.state?.['book'];
  }

  ngOnInit(): void {
    if (!this.book) {
      this.router.navigate(['/books']);
    }
  }

  goBack() {
    this.router.navigate(['/books']);
  }
}
