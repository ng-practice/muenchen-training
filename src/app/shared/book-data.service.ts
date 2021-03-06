import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './book';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookDataService {
  endpoint = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(`${this.endpoint}/books`)
      .catch(errorResponse => Observable.throw({
        message: errorResponse.statusText
      }));
  }

  getBookByISBN(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }
}
