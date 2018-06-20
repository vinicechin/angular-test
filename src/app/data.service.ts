import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

enum Type {
    FILMS = 0,
    CHARACTERS = 1,
}

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

  //Receive a characters url array and returns a characters array
  getCharactersFromUrls(charsArray: any[], array: any[]) {
    this.getArrayFromUrls(charsArray, array, Type.CHARACTERS);
  }

  getArrayFromUrls(urlArray: any[], array: any[], type: Type) {
    var dataArray: any[];
    switch(type) {
      case Type.FILMS:
        dataArray = this.films;
        break;
      case Type.CHARACTERS:
        dataArray = this.chars;
        break;
      default:
        dataArray = [];
    }

    if (dataArray.length > 0) {
      for (let id of this.getIdsArray(urlArray)) {
        const item = dataArray.find((item) => {
          if (type === Type.FILMS) {
            return item.episode_id;
          }
          return item.id === id;
        });
        array.push(item);
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
