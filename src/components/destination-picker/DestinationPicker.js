import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOriginCity, setDestinationCity } from "../../store/actionCreators";

const DestinationPicker = () => {
  const cities = useSelector((state) => state.cities);
  const [originCities, setOriginCities] = useState([]);
  const [destCities, setDestCities] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setOriginCities(cities);
    const [, ...rest] = cities;
    setDestCities(rest);
  }, [cities]);
  const setCity = useCallback(
    (name, isOrigin) => {
      dispatch(isOrigin ? setOriginCity(name) : setDestinationCity(name));
      if (isOrigin) {
        setDestCities(cities.filter((city) => city.name !== name));
      }
    },
    [dispatch, cities]
  );
  return (
    <div className="container-fluid">
      <div className="card border-0">
        <div className="card-body">
          <h5 className="card-title">Wybierz trasę przelotu</h5>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label ">Skąd?</label>
                  <div className="col-md-9">
                    <select
                      defaultValue=""
                      className="form-control"
                      onChange={({ target }) => setCity(target.value, true)}
                    >
                      <option disabled hidden value="">
                        -Wybierz-
                      </option>
                      {originCities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group row">
                  <label className="col-md-3 col-form-label ">Dokąd?</label>
                  <div className="col-md-9">
                    <select
                      defaultValue=""
                      className="form-control"
                      disabled={false}
                      onChange={({ target }) => setCity(target.value, false)}
                    >
                      <option disabled hidden value="">
                        -Wybierz-
                      </option>
                      {destCities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DestinationPicker;
