import React from 'react';
import { Link } from 'react-router-dom';
import './planet.scss';

const Planet = ({ planet }) => {

  const id = planet.url.split('/')[5];
  return (
    <Link to={`/planets/${id}`} style={{ textDecoration: "none" }}>
      <div className="row">
        <div className="col-sm-6 mb-3 mx-auto">
          <div className="card ml-3">
            <div className="card-body">
              <div className="card-title font-weight-bold">Planet Name</div>
              <span style={{ color: "#5d6d9c" }}>{planet.name}</span>
              <div className="card-title mt-3 font-weight-bold">Planet Population</div>
              <span style={{ color: "#5d6d9c" }}>{planet.population}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>

  );
}

export default Planet;
