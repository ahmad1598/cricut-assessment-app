import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = environment.googleBooksApi;
  searchTerm = 'test';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();
  isLoading: boolean = false;

  constructor(private http: HttpClient) { 
    this.searchBooks(this.searchTerm);
  }

  searchBooks(query: string) {
    this.isLoading = true;
    const params = {
      q: query,
      maxResults: '40'
    };

    this.http.get(`${this.apiUrl}`, { params }).pipe(
      map((response: any) => {
        this.isLoading = false;
        if (!response.items) {
          return [];
        };

        return response.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          thumbnail: item.volumeInfo.imageLinks?.thumbnail,
          publishedDate: item.volumeInfo.publishedDate,
          publisher: item.volumeInfo.publisher,
          pageCount: item.volumeInfo.pageCount,
          categories: item.volumeInfo.categories,
        }));
      })
    ).subscribe({
      next: (books: Book[]) => {
        this.booksSubject.next(books);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching books:', error);
        this.isLoading = false;
        this.booksSubject.next([]);
      }
    });
  }
}
