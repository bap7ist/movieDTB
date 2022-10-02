import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  API_URL = 'ttps://api.themoviedb.org/3';
  API_KEY = 'api_key=9952e490be27ea079da3d33dd5079f67';

  constructor(private http: HttpClient) {}

  loadMovies(movieTitle: string): any {
    return this.http.get(
      `${this.API_URL}/search/movies?language=fr-FR&query=${movieTitle}&page=1&${this.API_KEY}`
    ).pipe(map((res: any) => res.data.results))
  }
}
