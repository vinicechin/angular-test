export class DataService {
  private films: any[] = [];

  getFilms() {
    return this.films.slice();
  }

  setFilms(films) {
    this.films = films
  }
}
