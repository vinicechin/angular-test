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

  //Receive a characters url array and returns a characters array
  getCharactersFromUrls(charsArray: any[], array: any[]) {
    if (this.chars.length > 0) {
      for(let id of this.getIdsArray(charsArray)) {
        const character = this.chars.find((char) => {
          return char.id === id
        });
        array.push(character);
      }
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
