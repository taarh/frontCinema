import { Injectable } from '@angular/core';
import { Categorie } from './categories/categorie';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/cinema/';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(apiUrl + 'categories')
      .pipe(
        tap(_ => this.log('fetched Categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
