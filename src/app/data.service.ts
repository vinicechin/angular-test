import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataService {
  films: any[] = [];
  chars: any[] = [];

  constructor(private http: HttpClient) {}

  getFilms() {
    return this.films;
  }

  setData(data: any) {
    this.films = data.films.items;
    this.chars = data.chars.items;
  }

  getFilmsTitle(array: any[]) {
    for(let film of this.films) {
      array.push(film.title);
    }
  }

  //In: return array, movie characters array
  getCharsName(charsArray: any[], array: any[]) {
    console.log(charsArray);
  }

}
