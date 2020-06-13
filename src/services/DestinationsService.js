import moment from "moment";

export class DestinationsService {
  static #_cities;

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

  /**
   *
   * @param {*} origin
   * @param {*} destination
   * @param {Date} date - search date, time at midnight
   */
  static flightResults(origin, destination, date) {
    if (!origin || !destination || !date) {
      return [];
    }
    return [
      {
        date: moment(date).format("DD-MM-yyyy"),
        origin,
        destination,
        flights: [
          {
            start: moment(date).hour(11).minute(30),
            end: moment(date).hour(12).minute(0),
          },
          {
            start: moment(date).hour(18).minute(30),
            end: moment(date).hour(19).minute(0),
          },
        ],
      },
      {
        date: moment(date).add(2, "days").format("DD-MM-yyyy"),
        origin,
        destination,
        flights: [
          {
            start: moment(date).hour(11).minute(30),
            end: moment(date).hour(12).minute(0),
          },
          {
            start: moment(date).hour(18).minute(30),
            end: moment(date).hour(19).minute(0),
          },
        ],
      },
    ];
  }
}
