import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getFilmsTitle(length: number, array: any[]) {
    for(let i = 1; i <= length; i++) {
      this.getUnitaryData("https://swapi.co/api/films/" + i).subscribe(
        (film: any) => {
          array.push(film.title);
        }
      )
    }
  }

  getUnitaryData(url: string) {
    return this.http.get(url)
  }

}
