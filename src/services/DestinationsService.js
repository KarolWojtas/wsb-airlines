export class DestinationsService {
  static #_cities;

  static get cities() {
    if (!this.#_cities) {
      this.#_cities = [
        {
          name: "Warszawa",
        },
        {
          name: "Gdynia",
        },
        {
          name: "Radom",
        },
        {
          name: "Sosnowiec",
        },
      ];
      Object.freeze(this.#_cities);
    }
    return this.#_cities;
  }
}
