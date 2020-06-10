import flightResults from "./flightResults.mock.json";

export class DestinationsService {
  static #_cities;
  /**
   * {TravelResult[]}
   */
  static #flightResults;

  static get cities() {
    if (!this.#_cities) {
      this.#_cities = [
        {
          name: "Warszawa",
          code: "WW",
        },
        {
          name: "Gdynia",
          code: "GA",
        },
        {
          name: "Radom",
          code: "RA",
        },
        {
          name: "Sosnowiec",
          code: "SO",
        },
      ];
      Object.freeze(this.#_cities);
    }
    return this.#_cities;
  }

  static get flightResults() {
    if (!this.#flightResults) {
      this.#flightResults = flightResults;
      Object.freeze(this.#flightResults);
    }
    return this.#flightResults;
  }
}
