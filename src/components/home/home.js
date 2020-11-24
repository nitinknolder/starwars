import React, { useEffect, useState } from 'react';
import { searchPlanets } from '../../api-calls';
import { useHistory } from 'react-router-dom';
import { useAppStateContext } from '../../redux/reducers';
import Planet from '../planets/planet';
import './home.scss';
import SearchBar from '../searching/searching';
import { SEARCH_PLANET, SEARCH_RESULTS } from '../../redux/actions/actionTypes';

const HomeComponent = () => {
  const history = useHistory();
  const { state, dispatch } = useAppStateContext();
  const { loginUserName, results } = state;
  
  useEffect(() => {
    if (!loginUserName) {
      history.push('/login');
    }
  });
  const [loading, setLoading] = useState(false);

  const onSearch = async searchText => {
    dispatch({ type: SEARCH_PLANET, results: null });
    setLoading(true);
    const response = await searchPlanets(searchText);
    dispatch({ type: SEARCH_PLANET, searchText });
    dispatch({ type: SEARCH_RESULTS, results: response.results });
    setLoading(false);
  };
  if (!loginUserName) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SearchBar onSearch={onSearch} />
      {loading &&
        <div className="not-found text-center">Loading...</div>
      }
      {!loading &&
        results && results.length === 0
        &&
        <div className="text-center">
          <span className="not-found text-center">Data Not Found!!!</span>
        </div>}
      <div className="flex flex-wrap align-middle">
        {
          results && results.sort((a, b) =>  a.population - b.population).map
            (planet => <Planet key={planet.name} planet={planet} />)
        }
      </div>
    </>
  );
}

export default HomeComponent;