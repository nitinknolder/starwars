import React, { useRef, useState, } from 'react';
import { useAppStateContext } from '../../redux/reducers';
import './searching.scss';

const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const SearchBar = ({ onSearch }) => {
  const { state } = useAppStateContext();
  const [input, setInput] = useState(state.searchText);
  const delayQuery = useRef(
    debounce(value => {
      onSearch(value);
    }, 400)
  ).current;

  const handleOnChange = event => {
    event.persist();
    setInput(event.target.value);
    delayQuery(event.target.value);
  };

  return (
    <div className='my-4 mx-auto w-25'>
      <div className="welcome text-center mb-3">
        Welcome: <span className="login-user">{state.loginUserName}</span>
      </div>
      <div className="row">
        <span className="col-sm-2">
          <img src="assets/images/planet.svg" height="50" alt="Planet" />
        </span>
        <span className="col-sm-10 mt-2">
          <input value={input} placeholder="Enter Planet Name..."
            onChange={handleOnChange} className='form-control' />
        </span>
      </div>
    </div>
  );
}

export default SearchBar;