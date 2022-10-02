import { animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  backgroundImgs = new Array<string>();
  backgroundImg: string;

  searchForm = new FormGroup({
    search: new FormControl(),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.backgroundImg = '../../assets/img/interstellar-wallpaper.jpg';
    this.backgroundImgs = [
      '../../assets/img/interstellar-wallpaper.jpg',
      '../../assets/img/ironman.jpg',
    ];
  }

  goToSearch(): void {
    this.router.navigate(['/search'], {
      queryParams: { search: this.searchForm.controls['search'].value },
    });
  }
}
