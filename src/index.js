import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './redux/reducers';

function Main() {
  return (
      <Provider>
        <App />
      </Provider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
