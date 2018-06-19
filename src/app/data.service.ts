import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

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
