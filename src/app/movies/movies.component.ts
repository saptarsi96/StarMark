import { Component, OnInit } from '@angular/core';
import {movies} from '../movies'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = movies;
  constructor() { }

  ngOnInit() {
  }

}
