import { Component, OnInit } from '@angular/core';
import {books} from '../books';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books = books;
  constructor() { }

  ngOnInit() {
  }

}
