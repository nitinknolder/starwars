import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAppStateContext } from '../../redux/reducers';
import './planet-info.scss';

const PlanetInfo = () => {
  const { state } = useAppStateContext();
  const history = useHistory();
  const location = useLocation();
  const details = state.results ?
    state.results.filter(item => item.url === 'http://swapi.dev/api' + location.pathname + '/')
    : null;

  useEffect(() => {
    if (!state.loginUserName) {
      history.push('/login');
    }
  });

  return (
    <div className="m-10">
      {details && details.map((detail) => {
        return (
          <div className="row">
            <div className="col-sm-6 mx-auto mt-5">
              <div className="card ml-3">
                <div className="card-body">
                  <div className="card-title font-weight-bold">{detail.name}</div>
                  <div className="planet-details">Population: {detail.population}</div>
                  <div className="planet-details">Terrain: {detail.terrain}</div>
                  <div className="planet-details">Climate: {detail.climate}</div>
                  <div className="planet-details">Created: {detail.created}</div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  );
}

export default PlanetInfo;