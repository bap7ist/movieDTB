import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take, tap } from 'rxjs';
import { MovieAPIService } from '../movie-api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  movies: Array<any>

  search: string;

  constructor(
    private route: ActivatedRoute,
    private movieApi: MovieAPIService
    ) {}


  ngOnInit(): void {
    this.initParamsFromRoute()
    this.searchMovies(this.search)
  }

  initParamsFromRoute() {
    this.route.queryParams
      .pipe(
        take(1),
        filter((params) => params['search']),
        tap(({ search }) => (this.search = search))
      )
      .subscribe();
  }

  searchMovies(movieTitle: string) {
    this.movieApi.loadMovies(movieTitle).subscribe((movies: any) => {
      this.movies = movies
    })
  }
}
