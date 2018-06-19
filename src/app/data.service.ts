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
    // const idsArray = this.getIdsArray(charsArray);
    if (this.chars.length > 0) {
      for(let id of this.getIdsArray(charsArray)) {
        array.push(this.chars[id - 1].name);
      }
      console.log(array);
    }
  }

  getIdsArray(originArray) { 
    const resultArray = [] 
    for (let item of originArray) { 
      const itemId = parseInt(item.substr(item.length - 3, 2).replace('/','')) 
      resultArray.push(itemId) 
    } 
    return resultArray; 
  }

}
